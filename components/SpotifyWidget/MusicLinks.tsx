import Link from "next/link";

import { Button } from "../Button";

export const MusicLinks = () => (
	<div className="flex flex-col gap-2">
		<Button
			render={
				<Link
					href="https://open.spotify.com/user/11170893355?si=ebb8a9d89ad947bf"
					target="_blank"
				/>
			}
			startIcon="spotify"
			variant="outline"
		>
			Profile
		</Button>
		<Button
			render={
				<Link href="https://www.last.fm/user/yami4529" target="_blank" />
			}
			startIcon="lastfm"
			variant="outline"
		>
			Scrobbles
		</Button>
	</div>
);
