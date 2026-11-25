import { motion } from "framer-motion";

import { Heading } from "../Heading";
import { MusicLinks } from "./MusicLinks";
import { NowPlaying } from "./NowPlaying";
import { TopArtists } from "./TopArtists";
import { TopTracks } from "./TopTracks";
import { NowPlayingView, TopView } from "./view";

export const SpotifyWidgetView = ({
	animateIn = false,
	nowPlaying,
	top,
}: {
	animateIn?: boolean;
	nowPlaying: NowPlayingView;
	top: TopView;
}) => (
	<motion.div
		animate="visible"
		className="relative p-4 overflow-hidden border rounded-lg bg-bgRaisedLight/50 dark:bg-bgRaisedDark/50 backdrop-blur-md dark:border-textLight/10 border-textDark/10"
		exit="hidden"
		initial={animateIn ? "hidden" : false}
		style={{ perspective: 500 }}
		variants={{
			hidden: { opacity: 0, scale: 0.9, y: -32 },
			visible: {
				opacity: 1,
				scale: 1,
				transition: { delayChildren: 0.3 },
				y: 0,
			},
		}}
	>
		<div className="flex gap-8">
			<div className="flex flex-col w-64">
				<NowPlaying view={nowPlaying} />
				<MusicLinks />
			</div>
			<div className="flex-col justify-between hidden w-full md:flex max-w-[20rem]">
				<section>
					<Heading className="mb-3" level={6}>
						My anthems this month
					</Heading>
					<TopTracks view={top} />
				</section>
				<section>
					<Heading className="mb-3" level={6}>
						This month&apos;s muses
					</Heading>
					<TopArtists view={top} />
				</section>
			</div>
		</div>
	</motion.div>
);
