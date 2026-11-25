import { useQuery } from "@tanstack/react-query";
import { useSessionStorage } from "@uidotdev/usehooks";
import axios from "axios";
import { useEffect } from "react";

import {
	SpotifyErrorPayload,
	SpotifyNowPlayingPayload,
	SpotifyTopPayload,
} from "../../types/api/spotify";
import { SpotifyWidgetStatus, viewFromStatus } from "./mock";
import { SpotifyWidgetView } from "./SpotifyWidgetView";
import { NowPlayingView, TopView } from "./view";

const toNowPlaying = (
	data: SpotifyErrorPayload | SpotifyNowPlayingPayload | undefined,
	isErrored: boolean,
	isLoading: boolean,
): NowPlayingView => {
	if (isLoading) return { status: "loading" };
	if (!data) return { status: "idle" };
	if (isErrored || "error" in data) return { status: "error" };
	return { status: "ready", track: data };
};

const toTop = (
	data: SpotifyErrorPayload | SpotifyTopPayload | undefined,
	isLoading: boolean,
): TopView => {
	if (isLoading) return { status: "loading" };
	if (!data || "error" in data) return { status: "error" };
	return { items: data, status: "ready" };
};

const SpotifyWidgetLive = () => {
	const [hasInitial, setHasInitial] = useSessionStorage(
		"animation:spotify-widget",
		true,
	);

	useEffect(() => {
		setHasInitial(false);
	}, [setHasInitial]);

	const { data, error, fetchStatus, isLoading } = useQuery({
		queryFn: async () => {
			const song = await axios.get<
				SpotifyErrorPayload | SpotifyNowPlayingPayload
			>("/api/spotify/now-playing");
			return song.data;
		},
		queryKey: ["now-playing"],
		refetchInterval: 1000,
	});

	const {
		data: topItems,
		fetchStatus: topFetchStatus,
		isLoading: topIsLoading,
	} = useQuery({
		queryFn: async () => {
			const top = await axios.get<SpotifyErrorPayload | SpotifyTopPayload>(
				"/api/spotify/monthly-best",
			);
			return top.data;
		},
		queryKey: ["top-items"],
	});

	return (
		<SpotifyWidgetView
			animateIn={hasInitial}
			nowPlaying={toNowPlaying(
				data,
				Boolean(error),
				isLoading && fetchStatus !== "idle",
			)}
			top={toTop(topItems, topIsLoading && topFetchStatus !== "idle")}
		/>
	);
};

export const SpotifyWidget = ({
	preview,
}: {
	preview?: SpotifyWidgetStatus;
}) => {
	if (preview) {
		const view = viewFromStatus(preview);
		return (
			<SpotifyWidgetView nowPlaying={view.nowPlaying} top={view.top} />
		);
	}

	return <SpotifyWidgetLive />;
};
