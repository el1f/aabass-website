import type { Metadata } from "next";

import Changelog from "./view";

export const metadata: Metadata = {
	title: "What's new",
};

const ChangelogPage = () => <Changelog />;

export default ChangelogPage;
