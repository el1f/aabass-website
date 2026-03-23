import React from "react";

import { Footer, Heading, Navbar } from "../../components";

const DesignSystem = () => {
	return (
		<>
			<Navbar />

			<main className="container flex flex-col max-w-5xl gap-8 px-6 py-20 mx-auto">
				<section
					className="relative grid gap-8 grid-cols-systemSection"
					id="colors"
				>
					<header className="sticky top-20">
						<Heading level={3}>Colors</Heading>
					</header>
					<article>
						<div className="min-h-[256px] border rounded-lg border-textDimmed"></div>
					</article>
				</section>

				<section
					className="relative grid gap-8 grid-cols-systemSection"
					id="typography"
				>
					<header className="sticky top-20">
						<Heading level={3}>Typography</Heading>
					</header>
					<article>
						<div className="min-h-[256px] border rounded-lg border-textDimmed"></div>
					</article>
				</section>

				<section
					className="relative grid gap-8 grid-cols-systemSection"
					id="buttons"
				>
					<header className="sticky top-20">
						<Heading level={3}>Buttons</Heading>
					</header>
					<article>
						<div className="min-h-[256px] border rounded-lg border-textDimmed"></div>
					</article>
				</section>

				<section
					className="relative grid gap-8 grid-cols-systemSection"
					id="effects"
				>
					<header className="sticky top-20">
						<Heading level={3}>Effects</Heading>
					</header>

					<article
						className="min-h-[256px] border rounded-lg border-textDimmed"
						id="hoverGradient"
					>
						<div className="p-10">
							<div className="flex items-center justify-center h-40 border rounded-lg w-60 border-white/10 bg-bgRaised hover-gradient">
								<div>Test with a card</div>
							</div>
						</div>
					</article>
				</section>
			</main>

			<Footer />
		</>
	);
};

export default DesignSystem;
