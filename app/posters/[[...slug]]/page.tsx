import type { Metadata } from "next";

import { POSTERS } from "../../../data";
import Posters from "./view";

export const metadata: Metadata = {
	title: "My poster collection",
};

export const dynamicParams = false;

export const generateStaticParams = async () => [
	{ slug: [] },
	...POSTERS.map((poster) => ({ slug: [poster.slug] })),
];

const PostersPage = async ({
	params,
}: {
	params: Promise<{ slug?: string[] }>;
}) => {
	const { slug } = await params;

	return <Posters activeSlug={slug?.[0]} />;
};

export default PostersPage;
