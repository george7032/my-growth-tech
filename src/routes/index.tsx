import { Link, createFileRoute } from "@tanstack/react-router";
import clientCare from "@/assets/client-care.jpg";
import clientRetail from "@/assets/client-retail.jpg";
import clientSchool from "@/assets/client-school.jpg";
import clientTours from "@/assets/client-tours.jpg";
import {
  ArrowRight,
  Blocks,
  Globe,
  MapPin,
  TrendingUp,
} from "lucide-react";

import heroImage from "@/assets/zebnex-home-hero.jpg";
import projectTenant from "@/assets/project-tenant.jpg";
import projectTicketing from "@/assets/project-ticketing.jpg";
import slideWeb from "@/assets/slide-web.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { ImageMarquee } from "@/components/site/ImageMarquee";
import { Button } from "@/components/ui/button";
import { CLIENTS, POSTS, PROJECTS, SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zebnex Tech Solutions | Websites & Management Systems in Kenya" },
      {
        name: "description",
        content:
          "Professional websites and custom management systems for Kenyan businesses and institutions. Speak with Zebnex Tech Solutions about your project.",
      },
      { property: "og:title", content: "Websites & Management Systems for Kenyan Organizations" },
      {
        property: "og:description",
        content:
          "Dependable websites and management systems, tailored to how your organization works.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const SLIDES = [
  { src: projectTicketing, label: "TUK Ticketing System", caption: "Mobile and kiosk ticketing for a transport operator." },
  { src: projectTenant, label: "Tenant Management System", caption: "Units, leases, rent invoicing and arrears in one place." },
  { src: slideWeb, label: "Websites", caption: "Clear, responsive websites for businesses and institutions." },
];

const REASONS = [
  {
    icon: Globe,
    title: "Websites built around your goals",
    body: "Clear, responsive websites that make it easier for customers to understand and reach you.",
  },
  {
    icon: Blocks,
    title: "Systems shaped around your work",
    body: "Management systems are planned around your real records, routines and reporting needs.",
  },
  {
    icon: MapPin,
    title: "Built for organizations in Kenya",
    body: "We understand local operations and can tailor systems to the way your team works.",
  },
  {
    icon: TrendingUp,
    title: "Solutions that scale with you",
    body: "We provide clear handover, training and support options after your project is delivered.",
  },
];

const POST_IMAGES = {
  web: slideWeb,
  analytics: slideWeb,
} as const;

const CLIENT_PHOTOS = [
  clientSchool,
  clientRetail,
  clientTours,
  clientCare,
] as const;

function HomePage() {
  const latest = POSTS.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[36rem] overflow-hidden bg-secondary sm:min-h-[42rem]">
        <img
          src={heroImage}
          alt="Team collaborating in a modern office"
          width={1600}
          height={1024}
          className="absolute inset-0 size-full animate-ken-burns object-cover"
        />
        <div className="container-page relative flex min-h-[36rem] items-center py-20 sm:min-h-[42rem] sm:py-28">
          <div className="max-w-2xl stagger-children">
            <p className="eyebrow text-foreground">Zebnex Tech Solutions</p>
            <h1 className="mt-6 text-4xl leading-[1.08] font-semibold text-foreground sm:text-5xl lg:text-6xl">
              Websites and Management Systems That Work
            </h1>
            <div className="mt-8 h-px w-24 bg-navy/70" />
            <p className="mt-8 text-base leading-relaxed text-foreground sm:text-lg">
              We build professional websites and practical management systems for Kenyan businesses
              and institutions — designed around the way you work.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group sheen-on-hover inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lift"
              >
                Book a Free Consultation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-foreground/30 bg-background/70 px-7 py-4 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground/60 hover:bg-background"
              >
                Explore our services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction strip */}
      <section className="container-page grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow">About Zebnex</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Websites and systems for everyday work
          </h2>
          <div className="hairline mt-6" />
          <p className="mt-6 leading-relaxed text-muted-foreground">
            We help businesses present themselves professionally online and manage day-to-day work
            with dependable systems tailored to their operations.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            From company and school websites to systems for fees, bookings, stock and property,
            every project starts with the needs of your organization.
          </p>
        </div>
        <div className="zoom-media hover-lift overflow-hidden rounded-lg border border-border shadow-card">
          <img
            src={slideWeb}
            alt="Website design displayed on a computer"
            width={1600}
            height={1000}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Sliding images */}
      <ImageMarquee slides={SLIDES} />

      {/* Services */}
      <section className="container-page py-20">
        <p className="eyebrow">What we do</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">
          Two focused services for your organization
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Professional websites and custom management systems, designed around your needs.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((service) => {
            const Icon = service.slug === "websites" ? Globe : Blocks;
            return (
              <Link
                key={service.slug}
                to="/services"
                hash={service.slug}
                className="group rounded-lg border border-border bg-secondary/30 p-6 transition-all hover:-translate-y-1 hover:bg-card hover:shadow-lift"
              >
                <Icon className="size-6 stroke-[1.4] text-navy transition-colors group-hover:text-navy-deep" />
                <h3 className="mt-5 font-display text-base font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.tagline}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-navy">
                  Learn more
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Selected projects */}
      <section className="border-y border-border bg-secondary/30 py-20">
        <div className="container-page">
          <p className="eyebrow">Selected work</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Systems we've built</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PROJECTS.map((project, i) => (
              <article
                key={project.title}
                className="zoom-media hover-lift overflow-hidden rounded-lg border border-border bg-card shadow-card"
              >
                <img
                  src={i === 0 ? projectTicketing : projectTenant}
                  alt={project.title}
                  width={1400}
                  height={1000}
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
                <div className="p-7">
                  <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose Zebnex */}
      <section className="container-page py-20">
        <p className="eyebrow">Why businesses choose Zebnex</p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Reliability You Can Build On</h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason) => (
            <div key={reason.title}>
              <reason.icon className="size-6 stroke-[1.4] text-navy" />
              <h3 className="mt-5 font-display text-base font-semibold">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="border-y border-border py-16">
        <div className="container-page text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">Trusted by Businesses Across Kenya</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
            We're proud to work with organizations across education, tourism, retail and professional services.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {CLIENTS.map((client, index) => (
              <li
                key={client}
                className="zoom-media hover-lift group relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted shadow-card"
              >
                <img
                  src={CLIENT_PHOTOS[index]}
                  alt={`${client} business partnership`}
                  loading="lazy"
                  className="size-full object-cover grayscale-[25%] transition-all duration-700 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/35 to-transparent opacity-50 transition-opacity group-hover:opacity-20" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Insights preview */}
      <section className="container-page py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">From our blog</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Insights &amp; ideas</h2>
          </div>
          <Link
            to="/blog"
            className="group inline-flex items-center gap-1 text-sm font-medium text-navy"
          >
            View All Insights
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {latest.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <img
                src={POST_IMAGES[post.image]}
                alt=""
                loading="lazy"
                className="h-44 w-full object-cover"
              />
              <div className="p-6">
                <p className="eyebrow">{post.category}</p>
                <h3 className="mt-3 font-display text-base leading-snug font-semibold">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand
        title="Ready to Build Something That Lasts?"
        body="Tell us whether you need a website or a management system, and we'll help you plan the right next step."
        buttonLabel="Get a Free Consultation"
      />
    </>
  );
}
