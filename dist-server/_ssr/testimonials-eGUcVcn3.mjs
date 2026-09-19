import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { s as Quote } from "../_libs/lucide-react.mjs";
import { t as CtaBand } from "./CtaBand-X-h8ueQG.mjs";
import { t as PageHeader } from "./PageHeader-ga8U6oTB.mjs";
import { u as TESTIMONIALS } from "./site-data-CJ33iV0Z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/testimonials-eGUcVcn3.js
var import_jsx_runtime = require_jsx_runtime();
var testimonials_hero_default = "/assets/testimonials-hero-BeRxt9AH.jpg";
function TestimonialsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Testimonials",
			title: "What Our Clients Say",
			subtitle: "We'd rather you heard it from the businesses we've worked with than from us.",
			image: testimonials_hero_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 md:grid-cols-2",
				children: TESTIMONIALS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "hover-lift flex flex-col rounded-lg border border-border bg-background p-8 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "size-6 text-navy/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "mt-5 flex-1 leading-relaxed text-muted-foreground",
							children: t.quote
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline mt-6" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm font-semibold",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: [
									t.role,
									", ",
									t.company
								]
							})]
						})
					]
				}, t.name))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Ready to Be Our Next Success Story?",
			body: "Start with a free consultation — no pressure, just a clear view of what's possible for your business.",
			buttonLabel: "Book a Free Consultation"
		})
	] });
}
//#endregion
export { TestimonialsPage as component };
