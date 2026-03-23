import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

import { SpotifyNowPlayingPayload } from "../../../types/api/spotify";
import { getSpotifyAccessToken } from "./now-playing";

const TOP_TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks";
const TOP_ARTISTS_ENDPOINT = "https://api.spotify.com/v1/me/top/artists";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
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
		res.status(topTracksRes.status).json({
			error: topTracksRes.data,
			message: "Unable to fetch top tracks.",
		});
		return;
	}
	if (topArtistsRes.status > 400) {
		res.status(topArtistsRes.status).json({
			error: topArtistsRes.data,
			message: "Unable to fetch top artists.",
		});
		return;
	}

	const topTracks = topTracksRes.data;
	const topArtists = topArtistsRes.data;

	return res.status(200).json({
		artists: topArtists.items,
		tracks: topTracks.items,
	});
}
