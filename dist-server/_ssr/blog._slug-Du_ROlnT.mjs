import { M as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as POSTS } from "./site-data-CJ33iV0Z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-Du_ROlnT.js
var $$splitComponentImporter = () => import("./blog._slug-Dz5XYUZT.mjs");
var Route = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const post = POSTS.find((p) => p.slug === params.slug);
		if (!post) throw notFound();
		return { post };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Unavailable" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { post } = loaderData;
		return { meta: [
			{ title: `${post.title} | Zebnex Insights` },
			{
				name: "description",
				content: post.excerpt
			},
			{
				property: "og:title",
				content: post.title
			},
			{
				property: "og:description",
				content: post.excerpt
			},
			{
				property: "og:type",
				content: "article"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
