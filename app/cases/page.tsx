import type { Metadata } from "next";

import CaseStudies from "./view";

export const metadata: Metadata = {
	title: "Ayoub's previous works",
};

const CasesPage = () => <CaseStudies />;

export default CasesPage;
