import { MessageSquare, RotateCcw, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import logo from "@/assets/zebnex-logo.png";

const SUGGESTIONS = [
  "What services do you offer?",
  "How much does a website cost?",
  "Can you build a management system?",
];

type ChatMessage = { role: "user" | "assistant"; content: string };

const STORAGE_KEY = "zebnex-chat-v1";
const GREETING: ChatMessage = {
  role: "assistant",
  content:
    "Hi! I'm the Zebnex assistant. Ask me about websites or management systems, or tell me what your organization needs.",
};

export function ChatWidget({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as ChatMessage[];
        if (Array.isArray(parsed) && parsed.length) setMessages(parsed);
      }
    } catch {
      /* ignore unreadable history */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-40)));
    } catch {
      /* ignore quota errors */
    }
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open, sending]);

  function reset() {
    setMessages([GREETING]);
    setInput("");
    setError(null);
    inputRef.current?.focus();
  }

  async function send(preset?: string) {
    const text = (preset ?? input).trim();
    if (!text || sending) return;
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setSending(true);
    setError(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(-16) }),
      });
      if (!res.ok || !res.body) {
        const detail = (await res.text().catch(() => "")).trim();
        throw new Error(detail || "failed");
      }

      const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
      let reply = "";
      setMessages([...next, { role: "assistant", content: "" }]);
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        reply += value;
        setMessages([...next, { role: "assistant", content: reply }]);
      }
      if (!reply.trim()) {
        setMessages([
          ...next,
          {
            role: "assistant",
            content:
              "I couldn't put that into words just now. Could you rephrase, or reach us on +254 115 339 092?",
          },
        ]);
      }
    } catch (err) {
      const detail = err instanceof Error ? err.message : "";
      setMessages(next);
      setError(
        detail && detail.length < 160 && !detail.startsWith("<")
          ? detail
          : "The assistant is unavailable right now. Please try again or message us on WhatsApp.",
      );
    } finally {
      setSending(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed right-4 bottom-24 z-50 flex h-[min(560px,72vh)] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-xl border border-border bg-card shadow-lift sm:right-6">
      <div className="flex items-center gap-3 border-b border-border bg-navy px-4 py-3 text-primary-foreground">
        <img src={logo} alt="" width={512} height={512} className="size-8 rounded" />
        <div className="flex-1">
          <p className="font-display text-sm font-semibold">Zebnex Assistant</p>
          <p className="text-xs text-primary-foreground/70">Usually replies instantly</p>
        </div>
        <button
          type="button"
          aria-label="Start a new chat"
          title="Start a new chat"
          onClick={reset}
          className="opacity-80 transition-opacity hover:opacity-100"
        >
          <RotateCcw className="size-4" />
        </button>
        <button type="button" aria-label="Close chat" onClick={() => onOpenChange(false)}>
          <X className="size-5" />
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
        {messages.map((m, i) => (
          <div key={i} className={m.role === "user" ? "flex justify-end" : ""}>
            {m.role === "user" ? (
              <p className="max-w-[85%] rounded-lg rounded-br-sm bg-navy px-3.5 py-2.5 text-sm whitespace-pre-wrap text-primary-foreground">
                {m.content}
              </p>
            ) : (
              <div className="chat-prose max-w-full text-sm leading-relaxed text-foreground">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.content}</ReactMarkdown>
              </div>
            )}
          </div>
        ))}
        {sending && (
          <div className="flex items-center gap-1.5" aria-label="Assistant is typing">
            <span className="size-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
            <span className="size-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
            <span className="size-2 animate-bounce rounded-full bg-muted-foreground" />
          </div>
        )}
        {error && <p className="text-sm text-destructive">{error}</p>}
        {messages.length === 1 && !sending && (
          <div className="flex flex-wrap gap-2 pt-1">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => void send(s)}
                className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-navy hover:text-foreground"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      <form
        className="border-t border-border p-3"
        onSubmit={(e) => {
          e.preventDefault();
          void send();
        }}
      >
        <div className="flex items-end gap-2">
          <textarea
            ref={inputRef}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                void send();
              }
            }}
            placeholder="Ask about our services…"
            className="max-h-28 flex-1 resize-none rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-navy"
          />
          <button
            type="submit"
            aria-label="Send message"
            disabled={sending || !input.trim()}
            className="flex size-10 shrink-0 items-center justify-center rounded-md bg-navy text-primary-foreground transition-opacity disabled:opacity-40"
          >
            <Send className="size-4" />
          </button>
        </div>
      </form>
    </div>
  );
}

export function ChatLauncher({ onClick, open }: { onClick: () => void; open: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Close assistant" : "Chat with the Zebnex assistant"}
      className="flex size-13 items-center justify-center rounded-full bg-navy text-primary-foreground shadow-lift transition-transform hover:scale-105"
    >
      {open ? <X className="size-5" /> : <MessageSquare className="size-5" />}
    </button>
  );
}
