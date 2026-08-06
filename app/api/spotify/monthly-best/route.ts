import axios from "axios";
import { NextResponse } from "next/server";

import { getSpotifyAccessToken } from "../../../../lib/spotify";
import { SpotifyNowPlayingPayload } from "../../../../types/api/spotify";

const TOP_TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks";
const TOP_ARTISTS_ENDPOINT = "https://api.spotify.com/v1/me/top/artists";

export const GET = async () => {
	const { access_token } = await getSpotifyAccessToken(
		process.env.SPOTIFY_CLIENT_ID ?? "",
		process.env.SPOTIFY_CLIENT_SECRET ?? "",
		process.env.SPOTIFY_REFRESH_TOKEN ?? "",
	);

	const [topTracksRes, topArtistsRes] = await Promise.all([
		axios.get<{ items: SpotifyNowPlayingPayload[] }>(TOP_TRACKS_ENDPOINT, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
			params: {
				limit: 3,
				time_range: "short_term",
			},
		}),
		axios.get<{ items: SpotifyNowPlayingPayload[] }>(TOP_ARTISTS_ENDPOINT, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
			params: {
				limit: 3,
				time_range: "short_term",
			},
		}),
	]);

	if (topTracksRes.status > 400) {
		return NextResponse.json(
			{
				error: topTracksRes.data,
				message: "Unable to fetch top tracks.",
			},
			{ status: topTracksRes.status },
		);
	}
	if (topArtistsRes.status > 400) {
		return NextResponse.json(
			{
				error: topArtistsRes.data,
				message: "Unable to fetch top artists.",
			},
			{ status: topArtistsRes.status },
		);
	}

	return NextResponse.json({
		artists: topArtistsRes.data.items,
		tracks: topTracksRes.data.items,
	});
};
