import type { NextPage } from "next";

import { Pegboard } from "../components/pegboard/Pegboard";
import { Seo } from "../components/Seo";

const STATUS =
	"Product engineer in London, obsessing over corner radii and clean pixels. Previously Member of Technical Staff at SpaceXAI. Currently sidequestmaxxing.";

const Home: NextPage = () => {
	return (
		<>
			<Seo
				description={STATUS}
				ogDescription={STATUS}
				ogTitle="Ayoub Aabass"
				title="Ayoub Aabass"
			/>
			<Pegboard />
		</>
	);
};

export default Home;
