import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";

import testimonialsHero from "@/assets/testimonials-hero.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { TESTIMONIALS } from "@/lib/site-data";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials | What Our Clients Say — Zebnex Tech Solutions" },
      {
        name: "description",
        content:
          "Feedback from Kenyan schools, property managers, tour operators and security firms on websites, networks, systems and branding delivered by Zebnex.",
      },
      { property: "og:title", content: "What Our Clients Say" },
      {
        property: "og:description",
        content: "Honest feedback from businesses we've worked with across Kenya.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="What Our Clients Say"
        subtitle="We'd rather you heard it from the businesses we've worked with than from us."
        image={testimonialsHero}
      />

      <div className="container-page py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="hover-lift flex flex-col rounded-lg border border-border bg-background p-8 shadow-card"
            >
              <Quote className="size-6 text-navy/40" />
              <blockquote className="mt-5 flex-1 leading-relaxed text-muted-foreground">
                {t.quote}
              </blockquote>
              <div className="hairline mt-6" />
              <figcaption className="mt-5">
                <p className="font-display text-sm font-semibold">{t.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {t.role}, {t.company}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <CtaBand
        title="Ready to Be Our Next Success Story?"
        body="Start with a free consultation — no pressure, just a clear view of what's possible for your business."
        buttonLabel="Book a Free Consultation"
      />
    </>
  );
}
