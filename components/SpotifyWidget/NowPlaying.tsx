import { motion } from "framer-motion";
import Link from "next/link";

import { Icon } from "../Icon";
import { Text } from "../Text";
import { ArtistNames } from "./ArtistNames";
import { Record } from "./Record";
import { NowPlayingView } from "./view";

export const NowPlaying = ({ view }: { view: NowPlayingView }) => {
	if (view.status === "loading")
		return (
			<>
				<Record tone="loading" />
				<Text className="mb-2" size="sm">
					Loading
				</Text>
			</>
		);

	if (view.status === "idle")
		return (
			<>
				<Record />
				<Text className="mb-2">
					My streaming is idle right now and I&apos;m probably listening to my
					thoughts.
				</Text>
			</>
		);

	if (view.status === "error")
		return (
			<>
				<Record tone="error" />
				<Text className="mb-2">Error</Text>
			</>
		);

	const song = view.track;

	return (
		<>
			<Icon className="absolute top-4 left-4" name="spotify" />
			<Record spinning={song.is_playing} src={song.item.album.images[0].url} />
			<Text className="break-all line-clamp-1">
				<Link
					className="underline-offset-2 hover:underline"
					href={song.item.external_urls.spotify}
					target="_blank"
				>
					{song.item.name}
				</Link>
			</Text>
			<Text className="break-all line-clamp-1" size="sm">
				<Link
					className="underline-offset-2 hover:underline"
					href={song.item.album.external_urls.spotify}
					target="_blank"
				>
					{song.item.album.name}
				</Link>
			</Text>
			<Text className="mb-2 break-all line-clamp-1" size="sm">
				<ArtistNames artists={song.item.artists} />
			</Text>
			<div className="relative w-full h-0.5 mb-4 overflow-hidden rounded pointer-events-none bg-textDimmedDark/50">
				<motion.span
					animate={{
						width: `${(song.progress_ms / song.item.duration_ms) * 100}%`,
					}}
					className="absolute bottom-0 left-0 h-0.5 bg-primary-400"
				/>
			</div>
		</>
	);
};
