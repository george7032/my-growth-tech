import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Check } from "../_libs/lucide-react.mjs";
import { t as CtaBand } from "./CtaBand-X-h8ueQG.mjs";
import { t as PageHeader } from "./PageHeader-ga8U6oTB.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { a as PLANS, c as RETAINERS } from "./site-data-CJ33iV0Z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-BEoT8Ouu.js
var import_jsx_runtime = require_jsx_runtime();
var pricing_hero_default = "/assets/pricing-hero-DXgWM080.jpg";
var NOTES = [
	"Every quote is fixed in writing before work begins — we don't bill surprises.",
	"Projects are normally split into a deposit, a milestone payment and a balance on delivery.",
	"Domain, hosting and third-party licence fees are listed separately so you always know what is ours and what is theirs.",
	"Prices exclude VAT where applicable."
];
function PricingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Pricing",
			title: "Clear Pricing, No Surprises",
			subtitle: "Starting points for the work we do most often. Every project gets a written scope and fixed quote after a free consultation — you approve the number before anything begins.",
			image: pricing_hero_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 lg:grid-cols-3",
				children: PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `hover-lift flex flex-col rounded-lg border p-8 shadow-card ${plan.popular ? "border-navy bg-secondary/40" : "border-border bg-background"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-lg font-semibold",
								children: plan.name
							}), plan.popular && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-navy px-3 py-1 text-[11px] tracking-wider text-primary-foreground uppercase",
								children: "Most chosen"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 font-display text-2xl font-semibold text-navy",
							children: plan.price
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: plan.note
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm leading-relaxed text-muted-foreground",
							children: plan.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline mt-6" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 flex-1 space-y-3 text-sm",
							children: plan.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-navy" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: f
								})]
							}, f))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-8",
							variant: plan.popular ? "default" : "secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: "Get a Quote"
							})
						})
					]
				}, plan.name))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-secondary/30 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Ongoing support"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-semibold",
						children: "Monthly Retainers"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl leading-relaxed text-muted-foreground",
						children: "For businesses that would rather have us on call than search for help when something breaks."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-8 md:grid-cols-3",
						children: RETAINERS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hover-lift rounded-lg border border-border bg-background p-7 shadow-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-base font-semibold",
									children: r.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-display text-lg text-navy",
									children: r.price
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: r.body
								})
							]
						}, r.name))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-semibold",
					children: "Good to know"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-5 md:grid-cols-2",
					children: NOTES.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-sm leading-relaxed text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-navy" }), n]
					}, n.slice(0, 20)))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-10 text-sm text-muted-foreground",
					children: [
						"Still unsure what your project would cost?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/faq",
							className: "font-medium text-navy underline underline-offset-4",
							children: "Read the FAQ"
						}),
						" ",
						"or just ask us."
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Get an Exact Quote",
			body: "A free consultation is enough for us to scope your project and give you a firm number in writing.",
			buttonLabel: "Book a Free Consultation"
		})
	] });
}
//#endregion
export { PricingPage as component };
