// Based on https://medium.com/@alagappan.dev/create-a-now-playing-widget-using-the-spotify-web-api-in-react-a6cb564ed923

import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

import { SpotifyNowPlayingPayload } from "../../../types/api/spotify";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
	"https://api.spotify.com/v1/me/player/currently-playing";

export const getSpotifyAccessToken = async (
	client_id: string,
	client_secret: string,
	refresh_token: string,
) => {
	const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

	//The response will contain the access token
	const response = await axios.post(
		TOKEN_ENDPOINT,
		{
			grant_type: "refresh_token",
			refresh_token,
		},
		{
			headers: {
				Authorization: `Basic ${basic}`,
				"Content-Type": "application/x-www-form-urlencoded",
			},
		},
	);

	return response.data;
};

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
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
		res.status(nowPlayingRes.status).json({
			error: nowPlayingRes.data,
			message: "Unable to Fetch Currently playing track.",
		});
		return;
	}
	if (nowPlayingRes.status === 204) {
		res.status(204).end();
		return;
	}

	const song = nowPlayingRes.data;

	return res.status(200).json(song);
}
