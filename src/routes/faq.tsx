import { createFileRoute, Link } from "@tanstack/react-router";

import heroOffice from "@/assets/hero-office.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CONTACT, FAQS } from "@/lib/site-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Timelines, Pricing & How We Work — Zebnex" },
      {
        name: "description",
        content:
          "Answers on project timelines, pricing, payment plans, ownership of work, support after launch and how to get started with Zebnex Tech Solutions.",
      },
      { property: "og:title", content: "Frequently Asked Questions" },
      {
        property: "og:description",
        content: "Straight answers on timelines, costs, ownership and support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="The questions we get asked most often, answered plainly. If yours isn't here, just ask."
        image={heroOffice}
      />

      <div className="container-page grid gap-12 py-20 lg:grid-cols-[1fr_320px]">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-display text-base font-medium">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <aside className="h-fit rounded-lg border border-border bg-secondary/40 p-7">
          <h2 className="font-display text-base font-semibold">Still have a question?</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Call us during working hours or send a message and we'll get back to you.
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={CONTACT.phoneHref} className="text-navy hover:underline">
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="break-all text-navy hover:underline">
                {CONTACT.email}
              </a>
            </li>
            <li className="text-xs text-muted-foreground">{CONTACT.hours}</li>
          </ul>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center text-sm font-medium text-navy underline underline-offset-4"
          >
            Send us a message
          </Link>
        </aside>
      </div>

      <CtaBand
        title="Let's Talk About Your Project"
        body="A free consultation costs you nothing and gives you a clear picture of scope, timeline and cost."
        buttonLabel="Book a Free Consultation"
      />
    </>
  );
}
