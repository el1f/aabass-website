"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
	Button,
	Footer,
	Heading,
	Navbar,
	Strong,
	Text,
} from "../components";
import * as ga from "../lib/ga";

const NotFound = () => {
	const pathname = usePathname();

	return (
		<>
			<Navbar />

			<header className="container max-w-2xl px-4 pt-32 pb-8 mx-auto">
				<Heading className="mb-4 leading-snug" level={1}>
					Nothing to be found over here chief!
				</Heading>
				{/* TODO: figure out why using a p causes a hydration issue */}
				<Text as="div" className="mb-6">
					So, either you&apos;re here too early to actually see the contents of
					this page or you&apos;ve stranded yourself on a good old{" "}
					<Strong>404 page</Strong>.
					<hr className="my-1 opacity-0" />
					Come over later to check whether it&apos;s done or better yet ask me
					about it!
				</Text>
				<div className="flex gap-4 dark:gap-6">
					<Link href="mailto:ayoub@aabass.net">
						<Button
							onClick={() => {
								ga.contactPress(pathname ?? "/404");
							}}
						>
							Ask about this page
						</Button>
					</Link>
					<Link href="/about">
						<Button variant="outline">About me</Button>
					</Link>
				</div>
			</header>

			<section className="container max-w-5xl px-4 mx-auto mb-48"></section>

			<Footer />
		</>
	);
};

export default NotFound;
