import Link from "next/link";

import { SpotifyArtist } from "../../types/api/spotify";

export const ArtistNames = ({ artists }: { artists: SpotifyArtist[] }) => (
	<>
		{artists.map((artist) => (
			<span
				className="not-last:after:mr-1 not-last:after:content-[',']"
				key={artist.id}
			>
				<Link
					className="underline-offset-2 hover:underline"
					href={artist.external_urls.spotify}
					target="_blank"
				>
					{artist.name}
				</Link>
			</span>
		))}
	</>
);
