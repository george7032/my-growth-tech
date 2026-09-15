import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import slideAnalytics from "@/assets/slide-analytics.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { PLANS, RETAINERS } from "@/lib/site-data";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | Website, IT & Branding Packages — Zebnex" },
      {
        name: "description",
        content:
          "Transparent starting prices for websites, custom software, networking, security and branding, plus monthly support retainers for Kenyan businesses.",
      },
      { property: "og:title", content: "Clear Pricing, No Surprises" },
      {
        property: "og:description",
        content:
          "Starting prices for websites, custom systems and monthly IT support — quoted properly before work begins.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

const NOTES = [
  "Every quote is fixed in writing before work begins — we don't bill surprises.",
  "Projects are normally split into a deposit, a milestone payment and a balance on delivery.",
  "Domain, hosting and third-party licence fees are listed separately so you always know what is ours and what is theirs.",
  "Prices exclude VAT where applicable.",
];

function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Clear Pricing, No Surprises"
        subtitle="Starting points for the work we do most often. Every project gets a written scope and fixed quote after a free consultation — you approve the number before anything begins."
        image={slideAnalytics}
      />

      <div className="container-page py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`hover-lift flex flex-col rounded-lg border p-8 shadow-card ${
                plan.popular ? "border-navy bg-secondary/40" : "border-border bg-background"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-display text-lg font-semibold">{plan.name}</h2>
                {plan.popular && (
                  <span className="rounded-full bg-navy px-3 py-1 text-[11px] tracking-wider text-primary-foreground uppercase">
                    Most chosen
                  </span>
                )}
              </div>
              <p className="mt-5 font-display text-2xl font-semibold text-navy">{plan.price}</p>
              <p className="mt-1 text-xs text-muted-foreground">{plan.note}</p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{plan.summary}</p>
              <div className="hairline mt-6" />
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-navy" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8" variant={plan.popular ? "default" : "secondary"}>
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>

      <section className="border-y border-border bg-secondary/30 py-20">
        <div className="container-page">
          <p className="eyebrow">Ongoing support</p>
          <h2 className="mt-4 text-3xl font-semibold">Monthly Retainers</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            For businesses that would rather have us on call than search for help when something
            breaks.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {RETAINERS.map((r) => (
              <div
                key={r.name}
                className="hover-lift rounded-lg border border-border bg-background p-7 shadow-card"
              >
                <h3 className="font-display text-base font-semibold">{r.name}</h3>
                <p className="mt-3 font-display text-lg text-navy">{r.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-page py-20">
        <h2 className="text-2xl font-semibold">Good to know</h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {NOTES.map((n) => (
            <li key={n.slice(0, 20)} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <Check className="mt-0.5 size-4 shrink-0 text-navy" />
              {n}
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-muted-foreground">
          Still unsure what your project would cost?{" "}
          <Link to="/faq" className="font-medium text-navy underline underline-offset-4">
            Read the FAQ
          </Link>{" "}
          or just ask us.
        </p>
      </div>

      <CtaBand
        title="Get an Exact Quote"
        body="A free consultation is enough for us to scope your project and give you a firm number in writing."
        buttonLabel="Book a Free Consultation"
      />
    </>
  );
}
