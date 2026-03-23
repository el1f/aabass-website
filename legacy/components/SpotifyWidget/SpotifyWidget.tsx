import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo } from "react";
import { useSessionStorage } from "@uidotdev/usehooks";

import { cn } from "../../lib/cn";
import {
	SpotifyErrorPayload,
	SpotifyNowPlayingPayload,
	SpotifyTopPayload,
} from "../../types/api/spotify";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Icon } from "../Icon";
import { Skeleton } from "../Skeleton";
import { Text } from "../Text";

export const SpotifyWidget: React.FC = () => {
	const [hasInitial, setHasInitial] = useSessionStorage(
		"animation:spotify-widget",
		true,
	);

	useEffect(() => {
		setHasInitial(false);
	}, []);

	const {
		data: currentlyPlayingSong,
		error,
		fetchStatus,
		isLoading,
	} = useQuery({
		queryFn: async () => {
			const song = await axios.get<
				SpotifyNowPlayingPayload | SpotifyErrorPayload
			>("/api/spotify/now-playing");
			return song.data;
		},
		queryKey: ["now-playing"],
		refetchInterval: 1000,
	});

	const {
		data: topItems,
		error: topError,
		fetchStatus: topFetchStatus,
		isLoading: topIsLoading,
	} = useQuery({
		queryFn: async () => {
			const top = await axios.get<SpotifyTopPayload | SpotifyErrorPayload>(
				"/api/spotify/monthly-best",
			);
			return top.data;
		},
		queryKey: ["top-items"],
	});

	const musicLinks = (
		<div className="flex flex-col gap-2">
			<Button asChild startIcon="spotify" variant="outline">
				<Link
					href="https://open.spotify.com/user/11170893355?si=ebb8a9d89ad947bf"
					target="_blank"
				>
					Profile
				</Link>
			</Button>
			<Button asChild startIcon="lastfm" variant="outline">
				<Link href="https://www.last.fm/user/yami4529" target="_blank">
					Scrobbles
				</Link>
			</Button>
		</div>
	);

	const widgetContent = useMemo(() => {
		if (isLoading && fetchStatus !== "idle")
			return (
				<div className="p-3 mb-4 rounded-md bg-bgRaised">
					<Text size="sm">Loading</Text>
				</div>
			);

		if (!currentlyPlayingSong)
			return (
				<>
					<motion.figure
						className={cn(
							"w-64 mb-4 overflow-hidden rounded-full bg-textDimmed aspect-square relative",
							"after:content-[attr(data-icon)] after:w-4 after:h-4 after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:bg-bgRaised after:rounded-full",
							"before:content-[attr(data-icon)] before:w-20 before:h-20 before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:bg-black/30 before:rounded-full before:z-10",
						)}
						transition={{
							ease: "easeOut",
						}}
						variants={{
							hidden: { opacity: 0, scale: 1.2 },
							visible: { opacity: 1, scale: 1 },
						}}
					></motion.figure>
					<Text className="mb-2">
						My streaming is idle right now and I'm probably listening to my
						thoughts.
					</Text>
				</>
			);

		if (error || "error" in currentlyPlayingSong) return <p>Error</p>;

		const artists = currentlyPlayingSong.item.artists.map((artist) => (
			<span
				className="[&:not(:last-child)]:after:content-[','] [&:not(:last-child)]:after:mr-1"
				key={artist.id}
			>
				<Link
					className="hover:underline underline-offset-2"
					href={artist.external_urls.spotify}
					target="_blank"
				>
					{artist.name}
				</Link>
			</span>
		));

		return (
			<>
				<Icon className="absolute top-4 left-4 " name="spotify" />
				<motion.figure
					className={cn(
						"w-64 mb-4 overflow-hidden rounded-full bg-textDimmed aspect-square relative",
						"after:content-[attr(data-icon)] after:w-4 after:h-4 after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:bg-bgRaised after:rounded-full",
						"before:content-[attr(data-icon)] before:w-20 before:h-20 before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:bg-black/30 before:rounded-full before:z-10",
					)}
					transition={{
						ease: "easeOut",
					}}
					variants={{
						hidden: { opacity: 0, scale: 1.2 },
						visible: { opacity: 1, scale: 1 },
					}}
				>
					<Image
						alt="Album cover"
						className={cn(
							{ pause: !currentlyPlayingSong.is_playing },
							"animate-spin-slow",
						)}
						height={256}
						src={currentlyPlayingSong.item.album.images[0].url}
						width={256}
					/>
				</motion.figure>
				<Text className="break-all line-clamp-1">
					<Link
						className="hover:underline underline-offset-2"
						href={currentlyPlayingSong.item.external_urls.spotify}
						target="_blank"
					>
						{currentlyPlayingSong.item.name}
					</Link>
				</Text>
				<Text size="sm" className="break-all line-clamp-1">
					<Link
						className="hover:underline underline-offset-2"
						href={currentlyPlayingSong.item.album.external_urls.spotify}
						target="_blank"
					>
						{currentlyPlayingSong.item.album.name}
					</Link>
				</Text>
				<Text className="mb-2 break-all line-clamp-1" size="sm">
					<Link
						className="hover:underline underline-offset-2"
						href={currentlyPlayingSong.item.album.external_urls.spotify}
						target="_blank"
					>
						{artists}
					</Link>
				</Text>

				{/* Play progress */}
				<div className="w-full h-0.5 pointer-events-none relative bg-textDimmedDark/50 rounded overflow-hidden mb-4">
					<motion.span
						animate={{
							width:
								(currentlyPlayingSong.progress_ms /
									currentlyPlayingSong.item.duration_ms) *
									100 +
								"%",
						}}
						className="absolute bottom-0 left-0 h-0.5 bg-primary-400"
					/>
				</div>
			</>
		);
	}, [currentlyPlayingSong, error, fetchStatus, isLoading]);

	const topTracks = useMemo(() => {
		if (topIsLoading && topFetchStatus !== "idle")
			// if (!topIsLoading)
			return (
				<div className="flex flex-col gap-2">
					{[0, 1, 2].map((i) => (
						<div className="flex items-center gap-2" key={i}>
							<Skeleton className="h-12 aspect-square" />
							<div className="flex flex-col w-full gap-1">
								<Skeleton className="w-2/3 h-3" />
								<Skeleton className="w-1/3 h-2 " />
							</div>
						</div>
					))}
				</div>
			);

		if (!topItems || "error" in topItems) return <p>Error</p>;

		return (
			<div className="flex flex-col gap-2">
				{topItems.tracks.map((track) => {
					const trackArtists = track.artists.map((artist) => (
						<span
							className="[&:not(:last-child)]:after:content-[','] [&:not(:last-child)]:after:mr-1"
							key={artist.id}
						>
							<Link
								className="hover:underline underline-offset-2"
								href={artist.external_urls.spotify}
								target="_blank"
							>
								{artist.name}
							</Link>
						</span>
					));

					return (
						<div className="flex gap-2" key={track.id}>
							<figure className="h-12 overflow-hidden rounded bg-textDimmed aspect-square">
								<Image
									alt=""
									height={128}
									src={track.album.images[0].url}
									width={128}
								/>
							</figure>
							<div className="flex flex-col">
								<Link
									className="hover:underline underline-offset-2"
									href={track.external_urls.spotify}
									target="_blank"
								>
									<Text className="line-clamp-1">{track.name}</Text>
								</Link>
								<div className="text-sm line-clamp-1">{trackArtists}</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	}, [topFetchStatus, topIsLoading, topItems]);

	const topArtists = useMemo(() => {
		if (topIsLoading && topFetchStatus !== "idle")
			return (
				<div className="flex flex-col gap-2">
					{[0, 1, 2].map((i) => (
						<div className="flex items-center gap-2 max-w-[20rem]" key={i}>
							<Skeleton className="h-12 rounded-full aspect-square" />
							<Skeleton className="w-1/3 h-3" />
						</div>
					))}
				</div>
			);

		if (!topItems || "error" in topItems) return <p>Error</p>;

		return (
			<div className="flex flex-col gap-2">
				{topItems.artists.map((artist) => {
					return (
						<div
							className="flex items-center gap-2 max-w-[20rem]"
							key={artist.id}
						>
							<figure className="flex-shrink-0 h-12 overflow-hidden rounded-full bg-textDimmed aspect-square">
								<Image
									alt=""
									height={128}
									src={artist.images[0].url}
									width={128}
								/>
							</figure>

							<Link
								className="hover:underline underline-offset-2"
								href={artist.external_urls.spotify}
								target="_blank"
							>
								<Text className="line-clamp-1">{artist.name}</Text>
							</Link>
						</div>
					);
				})}
			</div>
		);
	}, [topFetchStatus, topIsLoading, topItems]);

	return (
		<motion.div
			animate="visible"
			className="p-4 overflow-hidden border rounded-lg bg-bgRaisedLight/50 dark:bg-bgRaisedDark/50 backdrop-blur-md dark:border-textLight/10 border-textDark/10"
			exit="hidden"
			initial={hasInitial ? "hidden" : false}
			style={{
				perspective: 500,
			}}
			variants={{
				hidden: { opacity: 0, scale: 0.9, y: -32 },
				visible: {
					opacity: 1,
					scale: 1,
					transition: {
						delayChildren: 0.3,
					},
					y: 0,
				},
			}}
		>
			<div className="flex gap-8">
				<div className="flex flex-col w-64">
					{widgetContent}
					{musicLinks}
				</div>

				<div className="flex-col justify-between hidden w-full md:flex max-w-[20rem]">
					<section>
						<Heading className="mb-3" level={6}>
							My anthems this month
						</Heading>
						{topTracks}
					</section>
					<section>
						<Heading className="mb-3" level={6}>
							This month&apos;s muses
						</Heading>
						{topArtists}
					</section>
				</div>
			</div>
		</motion.div>
	);
};
