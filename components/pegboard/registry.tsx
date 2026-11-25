import Image from "next/image";
import type { ComponentType } from "react";

import { PEG_CARDS, type PegCard,pegCardKey } from "../../data/pegboard";
import { POSTERS } from "../../data/posters";

/**
 * One renderer per card type. The homepage passes PEG_CARDS, which is empty,
 * so none of these mount on first paint and no poster files are requested.
 */

type PegRenderer<T extends PegCard["type"]> = ComponentType<{
	card: Extract<PegCard, { type: T }>;
}>;

function frameStyle(card: { h: number; w: number; x: number; y: number }) {
	return {
		height: card.h,
		left: card.x,
		top: card.y,
		width: card.w,
	};
}

const PosterPeg: PegRenderer<"poster"> = ({ card }) => {
	const poster = POSTERS.find((item) => item.slug === card.slug);
	if (!poster) return null;

	return (
		<article
			className="absolute overflow-hidden rounded-md bg-bgRaised shadow-paper"
			style={frameStyle(card)}
		>
			<Image
				alt={poster.name}
				className="object-cover"
				fill
				sizes="320px"
				src={poster.src}
			/>
		</article>
	);
};

const FactPeg: PegRenderer<"fact"> = ({ card }) => {
	return (
		<article
			className="absolute overflow-hidden rounded-md bg-bgRaised p-4 text-sm text-text shadow-paper"
			style={frameStyle(card)}
		>
			{card.body}
		</article>
	);
};

const CssExperimentPeg: PegRenderer<"css-experiment"> = ({ card }) => {
	return (
		<article
			className="absolute overflow-hidden rounded-md border border-dashed border-primary-700 bg-bgRaised p-4 shadow-paper"
			style={frameStyle(card)}
		>
			<h2 className="font-mono text-xs tracking-widest text-textDimmed uppercase">
				Experiment
			</h2>
			<p className="mt-2 text-sm text-text">{card.title}</p>
		</article>
	);
};

const ImagePeg: PegRenderer<"image"> = ({ card }) => {
	return (
		<article
			className="absolute overflow-hidden rounded-md bg-bgRaised shadow-paper"
			style={frameStyle(card)}
		>
			<Image
				alt={card.alt}
				className="object-cover"
				fill
				sizes="320px"
				src={card.src}
			/>
		</article>
	);
};

export const pegRegistry = {
	"css-experiment": CssExperimentPeg,
	fact: FactPeg,
	image: ImagePeg,
	poster: PosterPeg,
} satisfies {
	[K in PegCard["type"]]: PegRenderer<K>;
};

function PegCardView({ card }: { card: PegCard }) {
	switch (card.type) {
		case "css-experiment": {
			const Renderer = pegRegistry["css-experiment"];
			return <Renderer card={card} />;
		}
		case "fact": {
			const Renderer = pegRegistry.fact;
			return <Renderer card={card} />;
		}
		case "image": {
			const Renderer = pegRegistry.image;
			return <Renderer card={card} />;
		}
		case "poster": {
			const Renderer = pegRegistry.poster;
			return <Renderer card={card} />;
		}
	}
}

export function PegCards({ cards = PEG_CARDS }: { cards?: PegCard[] }) {
	return (
		<>
			{cards.map((card) => (
				<PegCardView card={card} key={pegCardKey(card)} />
			))}
		</>
	);
}
