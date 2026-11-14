import { createFileRoute } from "@tanstack/react-router";

type ChatMessage = { role: "user" | "assistant"; content: string };

const SYSTEM_PROMPT = `You are the assistant for Zebnex Tech Solutions, a Kenyan company based in Utawala, Nairobi.

Services: professional websites and custom management systems for businesses and institutions. Website work includes company and school sites, e-commerce, booking platforms and client portals. Management systems support operations such as schools, property, retail and transport. Past work includes a TUK ticketing system and a tenant management system.
Contact: +254 115 339 092, info@zebnextechsolutions.co.ke. Free consultations are available and projects usually start within 1-2 weeks of an agreed proposal. Website projects are available across Kenya.

Be warm, concise and practical. Keep answers under 120 words, avoid jargon, never invent prices or promises, and when someone is ready to act, invite them to book a free consultation on the Contact page or message on WhatsApp.`;

function isMessage(value: unknown): value is ChatMessage {
  if (typeof value !== "object" || value === null) return false;
  const m = value as Record<string, unknown>;
  return (m["role"] === "user" || m["role"] === "assistant") && typeof m["content"] === "string";
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json().catch(() => null)) as { messages?: unknown } | null;
        const incoming = Array.isArray(body?.messages) ? body.messages.filter(isMessage) : [];
        if (!incoming.length) {
          return new Response("No messages provided", { status: 400 });
        }

        const key = process.env["LOVABLE_API_KEY"];
        if (!key) {
          return new Response("The assistant is not configured yet.", { status: 500 });
        }

        let upstream: Response;
        try {
          upstream = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Lovable-API-Key": key,
              "X-Lovable-AIG-SDK": "fetch",
            },
            body: JSON.stringify({
              model: "openai/gpt-6-astra",
              stream: true,
              store: false,
              reasoning: { effort: "low" },
              max_output_tokens: 1200,
              input: [
                { role: "system", content: SYSTEM_PROMPT },
                ...incoming.slice(-16).map((m) => ({
                  role: m.role,
                  content: m.content.slice(0, 2000),
                })),
              ],
            }),
          });
        } catch (error) {
          console.error("AI gateway request failed", error);
          return new Response("The assistant is unavailable right now.", { status: 502 });
        }

        if (!upstream.ok || !upstream.body) {
          const detail = await upstream.text().catch(() => "");
          console.error(`AI gateway error [${upstream.status}]: ${detail}`);
          const message =
            upstream.status === 429
              ? "The assistant is busy right now. Please try again in a moment."
              : upstream.status === 402
                ? "The assistant is out of credits. Please reach us on WhatsApp meanwhile."
                : "The assistant is unavailable right now.";
          return new Response(message, {
            status: upstream.status === 429 || upstream.status === 402 ? upstream.status : 502,
          });
        }

        const encoder = new TextEncoder();
        const decoder = new TextDecoder();
        const reader = upstream.body.getReader();

        const stream = new ReadableStream<Uint8Array>({
          async start(controller) {
            let buffer = "";
            let sentAny = false;

            const handleEvent = (raw: string) => {
              for (const line of raw.split("\n")) {
                if (!line.startsWith("data:")) continue;
                const payload = line.slice(5).trim();
                if (!payload || payload === "[DONE]") continue;
                try {
                  const parsed = JSON.parse(payload) as Record<string, unknown>;
                  if (parsed["type"] === "response.output_text.delta") {
                    const delta = parsed["delta"];
                    if (typeof delta === "string" && delta) {
                      sentAny = true;
                      controller.enqueue(encoder.encode(delta));
                    }
                  } else if (parsed["type"] === "response.error" || parsed["type"] === "error") {
                    console.error("AI stream error", payload);
                  }
                } catch {
                  /* ignore keep-alives and partial frames */
                }
              }
            };

            try {
              while (true) {
                const { value, done } = await reader.read();
                if (done) break;
                buffer += decoder.decode(value, { stream: true });
                const events = buffer.split("\n\n");
                buffer = events.pop() ?? "";
                for (const event of events) handleEvent(event);
              }
              if (buffer.trim()) handleEvent(buffer);
              if (!sentAny) {
                controller.enqueue(
                  encoder.encode(
                    "Sorry, I couldn't answer that just now. Please try rephrasing, or reach us on +254 115 339 092.",
                  ),
                );
              }
            } catch (error) {
              console.error("AI stream failed", error);
            } finally {
              controller.close();
            }
          },
          cancel() {
            void reader.cancel();
          },
        });

        return new Response(stream, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-cache, no-transform",
            "X-Accel-Buffering": "no",
          },
        });
      },
    },
  },
});
