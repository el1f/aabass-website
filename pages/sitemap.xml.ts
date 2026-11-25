import type { GetServerSideProps } from "next";

import { POSTERS } from "../data/posters";

const HOST = "https://ayoub.aabass.net";

function SiteMap() {
	return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	const paths = ["/", ...POSTERS.map((poster) => `/posters/${poster.slug}`)];
	const urls = paths
		.map(
			(path) =>
				`  <url><loc>${HOST}${path === "/" ? "/" : path}</loc></url>`,
		)
		.join("\n");
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	res.setHeader("Content-Type", "text/xml");
	res.write(body);
	res.end();

	return { props: {} };
};

export default SiteMap;
