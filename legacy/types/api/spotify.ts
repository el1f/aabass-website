export interface SpotifyExternalUrls {
	spotify: string;
}

export interface SpotifyContext {
	external_urls: SpotifyExternalUrls;
	href: string;
	type: string;
	uri: string;
}

export interface SpotifyArtist {
	external_urls: SpotifyExternalUrls;
	href: string;
	id: string;
	name: string;
	type: string;
	uri: string;
}

export interface SpotifyExtendedArtist extends SpotifyArtist {
	followers: {
		href: string | null;
		total: number;
	};
	genres: string[];
	images: SpotifyImage[];
	popularity: number;
}

export interface SpotifyImage {
	height: number;
	url: string;
	width: number;
}

export interface SpotifyAlbum {
	album_type: string;
	artists: SpotifyArtist[];
	available_markets: string[];
	external_urls: SpotifyExternalUrls;
	href: string;
	id: string;
	images: SpotifyImage[];
	name: string;
	release_date: string;
	release_date_precision: string;
	total_tracks: number;
	type: string;
	uri: string;
}

export interface SpotifyExternalIds {
	isrc: string;
}

export interface Track {
	album: SpotifyAlbum;
	artists: SpotifyArtist[];
	available_markets: string[];
	disc_number: number;
	duration_ms: number;
	explicit: boolean;
	external_ids: SpotifyExternalIds;
	external_urls: SpotifyExternalUrls;
	href: string;
	id: string;
	is_local: boolean;
	name: string;
	popularity: number;
	preview_url: string | null;
	track_number: number;
	type: string;
	uri: string;
}

export interface SpotifyDisallows {
	resuming: boolean;
}

export interface Actions {
	disallows: SpotifyDisallows;
}

export interface SpotifyNowPlayingPayload {
	actions: Actions;
	context: SpotifyContext;
	currently_playing_type: string;
	is_playing: boolean;
	item: Track;
	progress_ms: number;
	timestamp: number;
}

export interface SpotifyErrorPayload {
	error: any;
	message: string;
}

export interface SpotifyTopTracksPayload {
	href: string;
	items: Track[];
	limit: number;
	next: string | null;
	offset: number;
	previous: string | null;
	total: number;
}

export interface SpotifyTopArtistsPayload {
	href: string;
	items: SpotifyExtendedArtist[];
	limit: number;
	next: string | null;
	offset: number;
	previous: string | null;
	total: number;
}

export interface SpotifyTopPayload {
	artists: SpotifyExtendedArtist[];
	tracks: Track[];
}
