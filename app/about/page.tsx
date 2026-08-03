import type { Metadata } from "next";

import About from "./view";

export const metadata: Metadata = {
	title: "About Ayoub",
};

const AboutPage = () => <About />;

export default AboutPage;
