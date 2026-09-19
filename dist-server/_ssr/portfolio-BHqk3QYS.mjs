import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CtaBand } from "./CtaBand-X-h8ueQG.mjs";
import { t as PageHeader } from "./PageHeader-ga8U6oTB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio-BHqk3QYS.js
var import_jsx_runtime = require_jsx_runtime();
var case_branding_default = "/assets/case-branding-B2vDHSox.jpg";
var case_school_default = "/assets/case-school-B_H1g6u9.jpg";
var case_security_default = "/assets/case-security-BUjTZEIL.jpg";
var case_tenant_default = "/assets/case-tenant-CPODTrSF.jpg";
var case_ticketing_default = "/assets/case-ticketing-CyUV6X5B.jpg";
var portfolio_hero_default = "/assets/portfolio-hero-DJSCSgaN.jpg";
var CASES = [
	{
		title: "TUK Ticketing System",
		client: "Tuk tuk transport operator",
		image: case_ticketing_default,
		challenge: "Fares were collected in cash with paper records, so daily revenue never reconciled and drivers had no way to prove a ticket was valid.",
		solution: "A digital ticketing platform with mobile ticket purchase, kiosk issuing, driver-side verification, and a reporting dashboard for management.",
		result: "Revenue is reconciled the same day, disputes over fares dropped sharply, and management can see performance per route.",
		tags: [
			"Software Development",
			"Database Management",
			"Data Analysis"
		]
	},
	{
		title: "Tenant Management System",
		client: "Property management company",
		image: case_tenant_default,
		challenge: "Units, leases and rent collection were tracked across spreadsheets, making arrears difficult to spot until they were serious.",
		solution: "A cloud-hosted platform covering units, leases, rent invoicing and maintenance requests, with automatic statements for landlords.",
		result: "Landlords get a live view of collections and arrears, and maintenance requests no longer get lost between calls.",
		tags: [
			"Software Development",
			"Cloud Services",
			"Web Development"
		]
	},
	{
		title: "School Website & Campus Network",
		client: "Embakasi Bedicta Academy",
		image: case_school_default,
		challenge: "Parents relied on phone calls for basic information, and staff Wi-Fi did not reach half the classrooms.",
		solution: "A responsive school website with admissions information and announcements, plus structured cabling and wireless coverage across the campus.",
		result: "Routine enquiry calls fell noticeably and staff can work reliably from any building.",
		tags: ["Web Development", "Networking"]
	},
	{
		title: "Security Firm Systems Hardening",
		client: "Lancaster Security Ltd",
		image: case_security_default,
		challenge: "Shared passwords, unpatched machines and no backup routine left client data exposed.",
		solution: "A security audit followed by multi-factor authentication, endpoint protection, tested backups and quarterly staff awareness training.",
		result: "Phishing attempts are now reported rather than clicked, and recovery from a lost device takes hours instead of days.",
		tags: ["Cybersecurity", "Networking"]
	},
	{
		title: "Brand Identity & Rollout",
		client: "Antique",
		image: case_branding_default,
		challenge: "The brand had grown inconsistent — different colours and logos across signage, packaging and social media.",
		solution: "A full identity system: logo refinement, colour and typography rules, and written guidelines rolled out across every customer touchpoint.",
		result: "One recognisable look everywhere, and staff can produce on-brand materials without asking a designer.",
		tags: ["Branding"]
	}
];
var STATS = [
	{
		value: "40+",
		label: "Projects delivered"
	},
	{
		value: "6",
		label: "Industries served"
	},
	{
		value: "8",
		label: "Service areas"
	},
	{
		value: "100%",
		label: "Work handed over to clients"
	}
];
function PortfolioPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Portfolio",
			title: "Work We've Delivered",
			subtitle: "A selection of projects for Kenyan businesses — what the problem was, what we built, and what changed afterwards.",
			image: portfolio_hero_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border bg-secondary/30 py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page grid grid-cols-2 gap-8 lg:grid-cols-4",
				children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl font-semibold text-navy",
					children: s.value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: s.label
				})] }, s.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-20",
			children: [CASES.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: `grid gap-10 py-14 lg:grid-cols-2 lg:items-center lg:gap-16 ${index > 0 ? "border-t border-border" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: index % 2 === 1 ? "lg:order-2" : "",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow",
							children: ["0", index + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-3xl font-semibold",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-sm text-navy",
							children: item.client
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline mt-6" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-6 space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "eyebrow",
									children: "The challenge"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-2 leading-relaxed text-muted-foreground",
									children: item.challenge
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "eyebrow",
									children: "What we built"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-2 leading-relaxed text-muted-foreground",
									children: item.solution
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "eyebrow",
									children: "The result"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-2 leading-relaxed text-muted-foreground",
									children: item.result
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 flex flex-wrap gap-2",
							children: item.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground",
								children: tag
							}, tag))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "zoom-media hover-lift overflow-hidden rounded-lg border border-border shadow-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.image,
						alt: `${item.title} project`,
						loading: "lazy",
						className: "h-full w-full object-cover"
					})
				})]
			}, item.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 rounded-lg border border-border bg-secondary/40 p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm leading-relaxed text-muted-foreground",
					children: [
						"Want to see something closer to your own industry?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "font-medium text-navy underline underline-offset-4",
							children: "Ask us for relevant examples"
						}),
						" ",
						"and we'll share what we can."
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Have a Project in Mind?",
			body: "Tell us what you're trying to achieve and we'll tell you honestly what it takes — scope, timeline and cost, before any commitment.",
			buttonLabel: "Start a Conversation"
		})
	] });
}
//#endregion
export { PortfolioPage as component };
