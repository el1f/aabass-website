import axios from "axios";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

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
