import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

import ceoPortrait from "@/assets/ceo-ian-kariuki.jpg";
import slideWeb from "@/assets/slide-web.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { POSTS } from "@/lib/site-data";

const IMAGES = {
  web: slideWeb,
  analytics: slideWeb,
} as const;

const CLOSING_CTA: Record<string, { title: string; body: string }> = {
  "Management Systems": {
    title: "Planning a management system?",
    body: "Let's talk about the records and routines your organization needs to manage.",
  },
  Websites: {
    title: "Planning a website for your organization?",
    body: "Tell us what your visitors need to find and do on your website.",
  },
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | Zebnex Insights` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: PostPage,
});

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function PostPage() {
  const { post } = Route.useLoaderData();
  const related = POSTS.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);
  const cta = CLOSING_CTA[post.category] ?? {
    title: "Want to talk it through?",
    body: "Tell us whether you need a website or management system and we'll help you find the right next step.",
  };

  return (
    <>
      <article>
        <header className="border-b border-border bg-secondary/30">
          <div className="container-page max-w-3xl py-16">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-navy"
            >
              <ArrowLeft className="size-4" />
              All insights
            </Link>
            <p className="eyebrow mt-8">{post.category}</p>
            <h1 className="mt-4 text-3xl leading-tight font-semibold sm:text-4xl">{post.title}</h1>
            <p className="mt-5 text-sm text-muted-foreground">
              {formatDate(post.date)} · {post.readTime}
            </p>
          </div>
          <div className="container-page max-w-4xl pb-16">
            <img
              src={IMAGES[post.image]}
              alt=""
              loading="lazy"
              className="h-72 w-full rounded-lg border border-border object-cover sm:h-96"
            />
          </div>
        </header>

        <div className="container-page max-w-3xl py-14">
          <p className="font-display text-lg leading-relaxed">{post.excerpt}</p>
          {post.body.map((section) => (
            <section key={section.heading} className="mt-12">
              <h2 className="text-xl font-semibold">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 20)} className="mt-4 leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <div className="mt-14 flex items-center gap-4 border-t border-border pt-8">
            <img
              src={ceoPortrait}
              alt="Ian Kariuki"
              loading="lazy"
              className="size-14 rounded-full object-cover"
            />
            <div>
              <p className="font-display text-sm font-semibold">Ian Kariuki</p>
              <p className="text-sm text-muted-foreground">
                CEO &amp; Founder of Zebnex Tech Solutions
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-lg border border-border bg-secondary/40 p-7">
            <h2 className="font-display text-lg font-semibold">{cta.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{cta.body}</p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Talk to us
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        {related.length > 0 && (
          <section className="border-t border-border py-16">
            <div className="container-page">
              <h2 className="text-2xl font-semibold">Related reading</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    to="/blog/$slug"
                    params={{ slug: item.slug }}
                    className="rounded-lg border border-border p-6 transition-all hover:-translate-y-1 hover:shadow-card"
                  >
                    <p className="eyebrow">{item.category}</p>
                    <h3 className="mt-3 font-display text-base leading-snug font-semibold">
                      {item.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <CtaBand
        title="Still Have Questions?"
        body="No question is too small — reach out and let's figure out the right next step for your business."
        buttonLabel="Send a Message"
      />
    </>
  );
}
