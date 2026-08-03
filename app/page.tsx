import type { Metadata } from "next";

import Home from "./home-view";

export const metadata: Metadata = {
	title: "Hello, I'm Ayoub",
};

const HomePage = () => <Home />;

export default HomePage;
