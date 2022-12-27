import dayjs from "dayjs";
import Image from "next/image";
import React from "react";

import {
	CoffeePlaceCard as CoffeePlaceCardFragment,
	FragmentType,
	useFragment,
} from "../graphql";
import { Heading, OutlinedCard, Text } from ".";

interface CoffeePlaceCardProps {
	country: string;
	image: string;
	lastVisit: string;
	name: string;
	score: number;
}

export const CoffeePlaceCard: React.FC<CoffeePlaceCardProps> = ({
	country,
	image,
	lastVisit,
	name,
	score,
}) => {
	return (
		<OutlinedCard className="flex flex-shrink-0 gap-3 p-1 w-80 md:w-96 rounded-xl">
			<figure className="relative overflow-hidden rounded-lg w-28 h-36 bg-bgRaised">
				<Image alt="" height={288} objectFit="cover" src={image} width={224} />
			</figure>
			<div className="flex flex-col py-3">
				<Text
					className="mb-1 font-mono font-bold leading-none uppercase"
					size="xs"
				>
					{country}
				</Text>
				<Heading className="leading-tight md:leading-tight" level={5}>
					{name}
				</Heading>

				<div className="flex gap-2 mt-auto">
					<Text size="sm">⭐️ {score.toFixed(1)}</Text>
					<Text size="sm">🕛 {lastVisit}</Text>
				</div>
			</div>
		</OutlinedCard>
	);
};

export const FragCoffeePlaceCard: React.FC<{
	placeRef: FragmentType<typeof CoffeePlaceCardFragment>;
}> = ({ placeRef }) => {
	const place = useFragment(CoffeePlaceCardFragment, placeRef);

	return (
		<CoffeePlaceCard
			country={place.country}
			image={place.picture?.url ?? ""}
			lastVisit={dayjs(place.visits[0]).format("DD MMM")}
			name={place.name}
			score={place.score ?? 0}
		/>
	);
};
