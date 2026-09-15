import { createFileRoute, Link } from "@tanstack/react-router";

import projectTenant from "@/assets/project-tenant.jpg";
import projectTicketing from "@/assets/project-ticketing.jpg";
import slideBranding from "@/assets/slide-branding.jpg";
import slideNetwork from "@/assets/slide-network.jpg";
import slideWeb from "@/assets/slide-web.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Projects & Case Studies — Zebnex Tech Solutions" },
      {
        name: "description",
        content:
          "Real projects delivered for Kenyan businesses — custom software, websites, networks, databases and brand identities, with the outcome of each.",
      },
      { property: "og:title", content: "Work We've Delivered for Kenyan Businesses" },
      {
        property: "og:description",
        content:
          "Ticketing systems, tenant management, school websites, office networks and brand identities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

const CASES = [
  {
    title: "TUK Ticketing System",
    client: "Tuk tuk transport operator",
    image: projectTicketing,
    challenge:
      "Fares were collected in cash with paper records, so daily revenue never reconciled and drivers had no way to prove a ticket was valid.",
    solution:
      "A digital ticketing platform with mobile ticket purchase, kiosk issuing, driver-side verification, and a reporting dashboard for management.",
    result:
      "Revenue is reconciled the same day, disputes over fares dropped sharply, and management can see performance per route.",
    tags: ["Software Development", "Database Management", "Data Analysis"],
  },
  {
    title: "Tenant Management System",
    client: "Property management company",
    image: projectTenant,
    challenge:
      "Units, leases and rent collection were tracked across spreadsheets, making arrears difficult to spot until they were serious.",
    solution:
      "A cloud-hosted platform covering units, leases, rent invoicing and maintenance requests, with automatic statements for landlords.",
    result:
      "Landlords get a live view of collections and arrears, and maintenance requests no longer get lost between calls.",
    tags: ["Software Development", "Cloud Services", "Web Development"],
  },
  {
    title: "School Website & Campus Network",
    client: "Embakasi Bedicta Academy",
    image: slideWeb,
    challenge:
      "Parents relied on phone calls for basic information, and staff Wi-Fi did not reach half the classrooms.",
    solution:
      "A responsive school website with admissions information and announcements, plus structured cabling and wireless coverage across the campus.",
    result:
      "Routine enquiry calls fell noticeably and staff can work reliably from any building.",
    tags: ["Web Development", "Networking"],
  },
  {
    title: "Security Firm Systems Hardening",
    client: "Lancaster Security Ltd",
    image: slideNetwork,
    challenge:
      "Shared passwords, unpatched machines and no backup routine left client data exposed.",
    solution:
      "A security audit followed by multi-factor authentication, endpoint protection, tested backups and quarterly staff awareness training.",
    result:
      "Phishing attempts are now reported rather than clicked, and recovery from a lost device takes hours instead of days.",
    tags: ["Cybersecurity", "Networking"],
  },
  {
    title: "Brand Identity & Rollout",
    client: "Antique",
    image: slideBranding,
    challenge:
      "The brand had grown inconsistent — different colours and logos across signage, packaging and social media.",
    solution:
      "A full identity system: logo refinement, colour and typography rules, and written guidelines rolled out across every customer touchpoint.",
    result:
      "One recognisable look everywhere, and staff can produce on-brand materials without asking a designer.",
    tags: ["Branding"],
  },
];

const STATS = [
  { value: "40+", label: "Projects delivered" },
  { value: "6", label: "Industries served" },
  { value: "8", label: "Service areas" },
  { value: "100%", label: "Work handed over to clients" },
];

function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Work We've Delivered"
        subtitle="A selection of projects for Kenyan businesses — what the problem was, what we built, and what changed afterwards."
        image={projectTicketing}
      />

      <section className="border-b border-border bg-secondary/30 py-14">
        <div className="container-page grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-semibold text-navy">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="container-page py-20">
        {CASES.map((item, index) => (
          <article
            key={item.title}
            className={`grid gap-10 py-14 lg:grid-cols-2 lg:items-center lg:gap-16 ${
              index > 0 ? "border-t border-border" : ""
            }`}
          >
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <p className="eyebrow">0{index + 1}</p>
              <h2 className="mt-4 text-3xl font-semibold">{item.title}</h2>
              <p className="mt-2 font-display text-sm text-navy">{item.client}</p>
              <div className="hairline mt-6" />
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="eyebrow">The challenge</dt>
                  <dd className="mt-2 leading-relaxed text-muted-foreground">{item.challenge}</dd>
                </div>
                <div>
                  <dt className="eyebrow">What we built</dt>
                  <dd className="mt-2 leading-relaxed text-muted-foreground">{item.solution}</dd>
                </div>
                <div>
                  <dt className="eyebrow">The result</dt>
                  <dd className="mt-2 leading-relaxed text-muted-foreground">{item.result}</dd>
                </div>
              </dl>
              <ul className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="zoom-media hover-lift overflow-hidden rounded-lg border border-border shadow-card">
              <img
                src={item.image}
                alt={`${item.title} project`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </article>
        ))}

        <div className="mt-10 rounded-lg border border-border bg-secondary/40 p-8">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Want to see something closer to your own industry?{" "}
            <Link to="/contact" className="font-medium text-navy underline underline-offset-4">
              Ask us for relevant examples
            </Link>{" "}
            and we'll share what we can.
          </p>
        </div>
      </div>

      <CtaBand
        title="Have a Project in Mind?"
        body="Tell us what you're trying to achieve and we'll tell you honestly what it takes — scope, timeline and cost, before any commitment."
        buttonLabel="Start a Conversation"
      />
    </>
  );
}
