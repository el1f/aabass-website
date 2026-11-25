import Image from "next/image";
import Link from "next/link";

import { Skeleton } from "../Skeleton";
import { Text } from "../Text";
import { ArtistNames } from "./ArtistNames";
import { TopView } from "./view";

export const TopTracks = ({ view }: { view: TopView }) => {
	if (view.status === "loading")
		return (
			<div className="flex flex-col gap-2">
				{[0, 1, 2].map((i) => (
					<div className="flex items-center gap-2" key={i}>
						<Skeleton className="h-12 aspect-square" />
						<div className="flex flex-col w-full gap-1">
							<Skeleton className="w-2/3 h-3" />
							<Skeleton className="w-1/3 h-2" />
						</div>
					</div>
				))}
			</div>
		);

	if (view.status === "error") return <p>Error</p>;

	return (
		<div className="flex flex-col gap-2">
			{view.items.tracks.map((track) => (
				<div className="flex w-full min-w-0 gap-2" key={track.id}>
					<figure className="h-12 overflow-hidden rounded aspect-square shrink-0 bg-textDimmed">
						<Image
							alt=""
							height={128}
							src={track.album.images[0].url}
							width={128}
						/>
					</figure>
					<div className="flex flex-col flex-1 min-w-0">
						<Link
							className="block min-w-0 underline-offset-2 hover:underline"
							href={track.external_urls.spotify}
							target="_blank"
						>
							<Text className="block truncate">{track.name}</Text>
						</Link>
						<div className="min-w-0 text-sm truncate">
							<ArtistNames artists={track.artists} />
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
