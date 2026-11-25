import {
	SpotifyArtist,
	SpotifyExtendedArtist,
	SpotifyNowPlayingPayload,
	SpotifyTopPayload,
	Track,
} from "../../types/api/spotify";
import { NowPlayingView, TopView } from "./view";

export const SPOTIFY_WIDGET_STATUSES = [
	"loading",
	"idle",
	"playing",
	"paused",
	"error",
] as const;

export type SpotifyWidgetStatus = (typeof SPOTIFY_WIDGET_STATUSES)[number];

const spotifyUrl = (path: string) => ({
	spotify: `https://open.spotify.com/${path}`,
});

const artist = (id: string, name: string): SpotifyArtist => ({
	external_urls: spotifyUrl(`artist/${id}`),
	href: "",
	id,
	name,
	type: "artist",
	uri: `spotify:artist:${id}`,
});

const track = (
	id: string,
	name: string,
	artists: SpotifyArtist[],
	cover: string,
): Track => ({
	album: {
		album_type: "album",
		artists,
		available_markets: [],
		external_urls: spotifyUrl(`album/${id}`),
		href: "",
		id,
		images: [{ height: 640, url: cover, width: 640 }],
		name: `${name} — single`,
		release_date: "2024-01-01",
		release_date_precision: "day",
		total_tracks: 1,
		type: "album",
		uri: `spotify:album:${id}`,
	},
	artists,
	available_markets: [],
	disc_number: 1,
	duration_ms: 214000,
	explicit: false,
	external_ids: { isrc: "" },
	external_urls: spotifyUrl(`track/${id}`),
	href: "",
	id,
	is_local: false,
	name,
	popularity: 40,
	preview_url: null,
	track_number: 1,
	type: "track",
	uri: `spotify:track:${id}`,
});

const muse = (
	id: string,
	name: string,
	cover: string,
): SpotifyExtendedArtist => ({
	...artist(id, name),
	followers: { href: null, total: 12000 },
	genres: [],
	images: [{ height: 640, url: cover, width: 640 }],
	popularity: 50,
});

const northLane = artist("north-lane", "North Lane");
const miraSol = artist("mira-sol", "Mira Sol");

const MOCK_TRACKS = [
	track("paper-crane", "Paper Crane", [northLane], "/posters/disc_1.jpg"),
	track("night-market", "Night Market", [miraSol, northLane], "/posters/disc_2.jpg"),
	track("glasshouse", "Glasshouse", [miraSol], "/posters/disc_3.jpg"),
];

const MOCK_TOP: SpotifyTopPayload = {
	artists: [
		muse("north-lane", "North Lane", "/posters/disc_1.jpg"),
		muse("mira-sol", "Mira Sol", "/posters/disc_2.jpg"),
		muse("the-fold", "The Fold", "/posters/disc_4.jpg"),
	],
	tracks: MOCK_TRACKS,
};

const nowPlaying = (isPlaying: boolean): SpotifyNowPlayingPayload => ({
	actions: { disallows: { resuming: false } },
	context: {
		external_urls: spotifyUrl("playlist/mock"),
		href: "",
		type: "playlist",
		uri: "spotify:playlist:mock",
	},
	currently_playing_type: "track",
	is_playing: isPlaying,
	item: MOCK_TRACKS[0],
	progress_ms: 83000,
	timestamp: 0,
});

const READY_TOP: TopView = { items: MOCK_TOP, status: "ready" };

export const viewFromStatus = (
	status: SpotifyWidgetStatus,
): { nowPlaying: NowPlayingView; top: TopView } => {
	switch (status) {
		case "loading":
			return {
				nowPlaying: { status: "loading" },
				top: { status: "loading" },
			};
		case "idle":
			return { nowPlaying: { status: "idle" }, top: READY_TOP };
		case "playing":
			return {
				nowPlaying: { status: "ready", track: nowPlaying(true) },
				top: READY_TOP,
			};
		case "paused":
			return {
				nowPlaying: { status: "ready", track: nowPlaying(false) },
				top: READY_TOP,
			};
		case "error":
			return { nowPlaying: { status: "error" }, top: { status: "error" } };
	}
};
