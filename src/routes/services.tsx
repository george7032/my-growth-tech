import { createFileRoute } from "@tanstack/react-router";

import projectTenant from "@/assets/project-tenant.jpg";
import slideWeb from "@/assets/slide-web.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Websites & Management Systems — Zebnex" },
      {
        name: "description",
        content:
          "Explore Zebnex's two services: professional websites and custom management systems for Kenyan organizations.",
      },
      { property: "og:title", content: "Websites & Management Systems" },
      {
        property: "og:description",
        content:
          "Websites and day-to-day management systems, designed around how your organization works.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const VISUALS: Record<string, string> = {
  websites: slideWeb,
  "management-systems": projectTenant,
};

const STEPS = [
  {
    title: "Consultation",
    body: "We start by understanding your business, your challenges, and what success looks like for you.",
  },
  {
    title: "Proposal",
    body: "We put together a clear scope and quote, so you know exactly what you're getting and what it costs.",
  },
  {
    title: "Execution",
    body: "Our team gets to work, with regular check-ins so you're never left wondering about progress.",
  },
  {
    title: "Delivery & Support",
    body: "We hand over what we've built with proper documentation and training, and remain available for ongoing support.",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Websites & Management Systems"
        subtitle="We focus on two services: professional websites and custom management systems for businesses and institutions."
        image={slideWeb}
      />

      <div className="container-page py-20">
        {SERVICES.map((service, index) => {
          const visual = VISUALS[service.slug];
          return (
            <section
              key={service.slug}
              id={service.slug}
              className={`scroll-mt-24 grid gap-10 py-14 lg:grid-cols-2 lg:items-center lg:gap-16 ${
                index > 0 ? "border-t border-border" : ""
              }`}
            >
              <div className={visual && index % 2 === 1 ? "lg:order-2" : ""}>
                <p className="eyebrow">0{index + 1}</p>
                <h2 className="mt-4 text-3xl font-semibold">{service.title}</h2>
                <p className="mt-3 font-display text-base text-navy">{service.tagline}</p>
                <div className="hairline mt-6" />
                {service.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="mt-5 leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
                <div className="mt-7 rounded-lg border border-border bg-secondary/40 p-5">
                  <p className="eyebrow">What's included</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.included}
                  </p>
                </div>
              </div>
              {visual ? (
                <div className="zoom-media hover-lift overflow-hidden rounded-lg border border-border shadow-card">
                  <img
                    src={visual}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : null}
            </section>
          );
        })}
      </div>

      <section className="border-y border-border bg-secondary/30 py-20">
        <div className="container-page">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-4 text-3xl font-semibold">A Simple, Transparent Process</h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            {STEPS.map((step, i) => (
              <li key={step.title}>
                <span className="flex size-11 items-center justify-center rounded-full border border-navy font-display text-sm font-semibold text-navy">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Need a Website or Management System?"
        body="Tell us what your organization needs, and we'll help you plan the right starting point."
        buttonLabel="Get a Free Consultation"
      />
    </>
  );
}
