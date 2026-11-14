import { createFileRoute } from "@tanstack/react-router";

import aboutTeam from "@/assets/about-team.jpg";
import ceoPortrait from "@/assets/ceo-ian-kariuki.jpg";
import heroImage from "@/assets/hero-office.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Zebnex Tech Solutions | Kenyan Website & Systems Team" },
      {
        name: "description",
        content:
          "Learn about Zebnex Tech Solutions, a Kenyan company focused on professional websites and custom management systems.",
      },
      { property: "og:title", content: "Built on Trust. Driven by Technology." },
      {
        property: "og:description",
        content:
          "Our story, leadership, mission and values — building dependable websites and management systems for organizations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    title: "Integrity",
    body: "We give honest assessments, even when it means recommending a smaller or simpler solution than a client initially asked for. Trust is built by doing right by clients, not by upselling them.",
  },
  {
    title: "Professionalism",
    body: "From the first consultation to post-launch support, we hold ourselves to a standard of clear communication, realistic timelines, and dependable follow-through.",
  },
  {
    title: "Excellence",
    body: "We don't settle for \"good enough.\" We hold the websites and management systems we deliver to a high standard.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Websites & Systems Built Around Your Work"
        subtitle="Zebnex Tech Solutions helps Kenyan businesses and institutions build their online presence and manage everyday operations with dependable technology."
        image={heroImage}
      />

      <section className="container-page grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow">Our story</p>
        <h2 className="mt-4 text-3xl font-semibold">Technology for daily work</h2>
          <div className="hairline mt-6" />
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Zebnex Tech Solutions was founded to help organizations use practical technology in
            their day-to-day work. We focus on two services: websites that clearly present an
            organization, and management systems that bring everyday records and operations into
            one place.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We work with organizations across education, property, retail and tourism. Every
            engagement starts by understanding what the organization needs and how its team works.
          </p>
        </div>
        <div className="zoom-media hover-lift overflow-hidden rounded-lg border border-border shadow-card">
          <img
            src={aboutTeam}
            alt="The Zebnex team collaborating"
            width={1600}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30 py-20">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">Company profile</p>
        <h2 className="mt-4 text-3xl font-semibold">Two services, tailored to your needs</h2>
          <div className="hairline mt-6" />
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Zebnex Tech Solutions provides professional websites and custom management systems for
            businesses and institutions. Each website is planned around the people who need to find
            and use it. Each system is planned around the organization's records and routines.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Every organization has different goals and routines. We plan each website or system
            around that reality, not around a one-size-fits-all template.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <p className="eyebrow">Leadership</p>
        <div className="mt-8 grid gap-12 lg:grid-cols-[360px_1fr] lg:items-start">
          <div className="zoom-media hover-lift overflow-hidden rounded-lg border border-border shadow-card">
            <img
              src={ceoPortrait}
              alt="Ian Kariuki, CEO and Founder of Zebnex Tech Solutions"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Ian Kariuki</h2>
            <p className="mt-2 text-sm tracking-wide text-muted-foreground uppercase">
              CEO &amp; Founder
            </p>
            <blockquote className="mt-8 border-l-2 border-navy pl-6">
              <p className="font-display text-lg leading-relaxed">
                “The best solution is the one a client can actually run and grow with. If something
                simpler serves them better, that's what we recommend.”
              </p>
            </blockquote>
            <p className="mt-8 leading-relaxed text-muted-foreground">
              Ian founded Zebnex Tech Solutions to make practical technology accessible to
              organizations across Kenya. He leads the team in building websites and management
              systems with a personal, consultative approach.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 py-20">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">Our mission</p>
          <h2 className="mt-4 text-3xl font-semibold">
            Delivering innovation, reliability, and customer-focused solutions
          </h2>
          <div className="hairline mt-6" />
          <p className="mt-6 leading-relaxed text-muted-foreground">
            We measure success not by the complexity of what we build, but by how well it serves the
            people using it. That means staying current with new technology and design trends, while
            never losing sight of reliability — a system that impresses on day one but fails on day
            sixty isn't a win for anyone. Every project is approached with the client's long-term
            interest in mind, not just the immediate deliverable.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <p className="eyebrow">Our values</p>
        <div className="mt-10">
          {VALUES.map((value, i) => (
            <div
              key={value.title}
              className={`grid gap-4 py-8 md:grid-cols-[220px_1fr] ${i > 0 ? "border-t border-border" : ""}`}
            >
              <h3 className="font-display text-xl font-semibold">{value.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">Why we do this work</p>
          <p className="mt-6 font-display text-xl leading-relaxed">
            We build technology to help organizations communicate clearly online and keep daily
            operations organized. Our work starts with understanding the people who will use it.
          </p>
        </div>
      </section>

      <CtaBand
        title="Want to Know More About How We Work?"
        body="We're happy to walk you through our process, share examples of past work, or just have a conversation about where your business is headed."
        buttonLabel="Get in Touch"
      />
    </>
  );
}
