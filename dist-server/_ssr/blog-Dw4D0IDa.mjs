import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as slide_web_default, i as slide_security_default, n as slide_branding_default, r as slide_network_default, t as slide_analytics_default } from "./slide-web-2MY0h6c-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-Dw4D0IDa.js
var $$splitComponentImporter = () => import("./blog-Dn0_jsw0.mjs");
var Route = createFileRoute("/blog")({
	head: () => ({ meta: [
		{ title: "Insights & Ideas | Zebnex Tech Solutions Blog" },
		{
			name: "description",
			content: "Practical thinking on technology, security and branding — written for business owners and decision-makers, not just engineers."
		},
		{
			property: "og:title",
			content: "Insights & Ideas"
		},
		{
			property: "og:description",
			content: "Tech trends, cybersecurity tips, branding strategy and cloud adoption guidance."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var POST_IMAGES = {
	security: slide_security_default,
	network: slide_network_default,
	branding: slide_branding_default,
	web: slide_web_default,
	analytics: slide_analytics_default
};
//#endregion
export { Route as n, POST_IMAGES as t };
