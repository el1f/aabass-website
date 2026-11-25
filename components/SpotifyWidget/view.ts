import {
	SpotifyNowPlayingPayload,
	SpotifyTopPayload,
} from "../../types/api/spotify";

export type NowPlayingView =
	| { status: "error" }
	| { status: "idle" }
	| { status: "loading" }
	| { status: "ready"; track: SpotifyNowPlayingPayload };

export type TopView =
	| { status: "error" }
	| { status: "loading" }
	| { items: SpotifyTopPayload; status: "ready" };
