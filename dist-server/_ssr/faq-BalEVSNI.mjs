import { i as __toESM } from "../_runtime.mjs";
import { a as Trigger2, i as Root2, l as require_jsx_runtime, n as Header, r as Item, t as Content2, u as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as ChevronDown } from "../_libs/lucide-react.mjs";
import { t as CtaBand } from "./CtaBand-X-h8ueQG.mjs";
import { t as PageHeader } from "./PageHeader-ga8U6oTB.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { i as FAQS, r as CONTACT } from "./site-data-CJ33iV0Z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-BalEVSNI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var faq_hero_default = "/assets/faq-hero-ZdihnPZ_.jpg";
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function FaqPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "FAQ",
			title: "Frequently Asked Questions",
			subtitle: "The questions we get asked most often, answered plainly. If yours isn't here, just ask.",
			image: faq_hero_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-12 py-20 lg:grid-cols-[1fr_320px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "w-full",
				children: FAQS.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: `item-${i}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
						className: "text-left font-display text-base font-medium",
						children: f.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
						className: "leading-relaxed text-muted-foreground",
						children: f.a
					})]
				}, f.q))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "h-fit rounded-lg border border-border bg-secondary/40 p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-base font-semibold",
						children: "Still have a question?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: "Call us during working hours or send a message and we'll get back to you."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: CONTACT.phoneHref,
								className: "text-navy hover:underline",
								children: CONTACT.phone
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${CONTACT.email}`,
								className: "break-all text-navy hover:underline",
								children: CONTACT.email
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-xs text-muted-foreground",
								children: CONTACT.hours
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "mt-6 inline-flex items-center text-sm font-medium text-navy underline underline-offset-4",
						children: "Send us a message"
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Let's Talk About Your Project",
			body: "A free consultation costs you nothing and gives you a clear picture of scope, timeline and cost.",
			buttonLabel: "Book a Free Consultation"
		})
	] });
}
//#endregion
export { FaqPage as component };
