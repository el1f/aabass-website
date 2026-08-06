// Based on https://medium.com/@alagappan.dev/create-a-now-playing-widget-using-the-spotify-web-api-in-react-a6cb564ed923

import axios from "axios";
import { NextResponse } from "next/server";

import { getSpotifyAccessToken } from "../../../../lib/spotify";
import { SpotifyNowPlayingPayload } from "../../../../types/api/spotify";

const NOW_PLAYING_ENDPOINT =
	"https://api.spotify.com/v1/me/player/currently-playing";

export const GET = async () => {
	const { access_token } = await getSpotifyAccessToken(
		process.env.SPOTIFY_CLIENT_ID ?? "",
		process.env.SPOTIFY_CLIENT_SECRET ?? "",
		process.env.SPOTIFY_REFRESH_TOKEN ?? "",
	);

	const nowPlayingRes = await axios.get<SpotifyNowPlayingPayload>(
		NOW_PLAYING_ENDPOINT,
		{
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		},
	);

	if (nowPlayingRes.status > 400) {
		return NextResponse.json(
			{
				error: nowPlayingRes.data,
				message: "Unable to Fetch Currently playing track.",
			},
			{ status: nowPlayingRes.status },
		);
	}
	if (nowPlayingRes.status === 204) {
		return new NextResponse(null, { status: 204 });
	}

	return NextResponse.json(nowPlayingRes.data);
};
