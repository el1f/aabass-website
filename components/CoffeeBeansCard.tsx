import Image from "next/image";
import React from "react";

import { Heading, OutlinedCard, Text } from ".";

interface CoffeeBeansCardProps {
	espressoScore: number;
	filterScore: number;
	image: string;
	name: string;
	origin: string;
	processing: string;
	roaster: string;
}

export const CoffeeBeansCard: React.FC<CoffeeBeansCardProps> = ({
	espressoScore,
	filterScore,
	image,
	name,
	origin,
	processing,
	roaster,
}) => {
	return (
		<OutlinedCard className="flex flex-shrink-0 gap-3 p-2 overflow-visible w-80 md:w-96 rounded-xl">
			<figure className="relative flex-shrink-0 h-40 -mt-8 -mb-4 rounded-lg w-28">
				<Image
					alt=""
					height={288}
					objectFit="contain"
					src={image}
					width={224}
				/>
			</figure>
			<div className="flex flex-col pt-1">
				<Text
					className="font-bold leading-none uppercase line-clamp-1"
					size="xs"
				>
					{roaster}
				</Text>
				<Heading className="line-clamp-2" level={5}>
					{name}
				</Heading>

				<div className="flex flex-col gap-1 mt-auto md:gap-0">
					<Text
						className="font-bold leading-none uppercase line-clamp-1"
						size="sm"
					>
						{`${origin} • ${processing}`}
					</Text>
					<div className="flex gap-2">
						<Text className="leading-none" size="sm">
							E: {espressoScore.toFixed(1)}
						</Text>
						<Text className="leading-none" size="sm">
							F: {filterScore.toFixed(1)}
						</Text>
					</div>
				</div>
			</div>
		</OutlinedCard>
	);
};
