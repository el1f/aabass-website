/**
 * Fixed pegboard world. v1 ships with no cards.
 * Add a toy by appending one entry here; renderers live in the peg registry.
 * Coordinates are world pixels. Visitors pan the camera; they do not move cards.
 */

export type PegCard =
	| {
			h: number;
			slug: string;
			type: "poster";
			w: number;
			x: number;
			y: number;
	  }
	| {
			body: string;
			h: number;
			id: string;
			type: "fact";
			w: number;
			x: number;
			y: number;
	  }
	| {
			h: number;
			id: string;
			title: string;
			type: "css-experiment";
			w: number;
			x: number;
			y: number;
	  }
	| {
			alt: string;
			h: number;
			src: string;
			type: "image";
			w: number;
			x: number;
			y: number;
	  };

export interface PegBoardSize {
	height: number;
	width: number;
}

export interface PegPoint {
	x: number;
	y: number;
}

/** Finite world bound. Larger than a laptop viewport so the camera has to pan. */
export const PEG_BOARD: PegBoardSize = {
	height: 2200,
	width: 3200,
};

/** Peg the badge lanyard clips to, in world coordinates. */
export const BADGE_PEG: PegPoint = {
	x: 1600,
	y: 180,
};

/** Where that peg sits in the viewport when the camera is at rest. */
export const PEG_REST_TOP = 72;

export const PEG_CARDS: PegCard[] = [];

export function pegCardKey(card: PegCard): string {
	switch (card.type) {
		case "css-experiment":
			return `css-experiment:${card.id}`;
		case "fact":
			return `fact:${card.id}`;
		case "image":
			return `image:${card.src}`;
		case "poster":
			return `poster:${card.slug}`;
	}
}
