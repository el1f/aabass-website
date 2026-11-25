import Image from "next/image";
import Link from "next/link";

import { Skeleton } from "../Skeleton";
import { Text } from "../Text";
import { TopView } from "./view";

export const TopArtists = ({ view }: { view: TopView }) => {
	if (view.status === "loading")
		return (
			<div className="flex flex-col gap-2">
				{[0, 1, 2].map((i) => (
					<div className="flex items-center gap-2 max-w-[20rem]" key={i}>
						<Skeleton className="h-12 rounded-full aspect-square" />
						<Skeleton className="w-1/3 h-3" />
					</div>
				))}
			</div>
		);

	if (view.status === "error") return <p>Error</p>;

	return (
		<div className="flex flex-col gap-2">
			{view.items.artists.map((artist) => (
				<div className="flex items-center gap-2 max-w-[20rem]" key={artist.id}>
					<figure className="h-12 overflow-hidden rounded-full aspect-square shrink-0 bg-textDimmed">
						<Image
							alt=""
							height={128}
							src={artist.images[0].url}
							width={128}
						/>
					</figure>
					<Link
						className="underline-offset-2 hover:underline"
						href={artist.external_urls.spotify}
						target="_blank"
					>
						<Text className="line-clamp-1">{artist.name}</Text>
					</Link>
				</div>
			))}
		</div>
	);
};
