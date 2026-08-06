"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { useCallback, useEffect, useState } from "react";

import { Button } from "../components";
import * as ga from "../lib/ga";

export const Providers = ({ children }: { children: React.ReactNode }) => {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 60 * 1000,
					},
				},
			}),
	);

	const shouldInjectDevtools = process.env.NODE_ENV === "development";
	const pathname = usePathname();

	// Devtool state
	const [showGrid, setShowGrid] = useState(false);

	const setHoverGradients = useCallback(() => {
		for (const card of document.getElementsByClassName("hover-gradient")) {
			const safeCard = card as HTMLElement;
			safeCard.onmousemove = (e) => {
				const rect = safeCard.getBoundingClientRect(),
					x = e.clientX - rect.left,
					y = e.clientY - rect.top;

				safeCard.style.setProperty("--mouse-x", `${x}px`);
				safeCard.style.setProperty("--mouse-y", `${y}px`);
			};
		}
	}, []);

	useEffect(() => {
		ga.pageView(pathname ?? "/");

		// TODO: move this into a component
		setHoverGradients();
	}, [pathname, setHoverGradients]);

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider attribute="class">{children}</ThemeProvider>

			{/* Custom Devtools */}
			{shouldInjectDevtools && (
				<div className="fixed flex p-1 -translate-x-1/2 rounded-lg bottom-20 left-1/2 bg-bgRaised">
					<Button
						onClick={() => setShowGrid(!showGrid)}
						size="sm"
						variant="ghost"
					>
						{showGrid ? "Disable" : "Enable"} grid
					</Button>
				</div>
			)}

			<ReactQueryDevtools initialIsOpen={false} />

			{/* Grid */}
			{showGrid && (
				<div className="fixed top-0 left-0 w-full h-screen px-6 pointer-events-none bg-blue-100/10">
					<div className="fixed top-0 w-full h-screen max-w-2xl px-6 -translate-x-1/2 left-1/2 bg-red-400/10">
						<div className="w-full h-full border-dashed border-text opacity-30 border-x" />
					</div>
					<div className="fixed top-0 w-full h-screen max-w-5xl px-6 -translate-x-1/2 left-1/2 bg-red-400/10">
						<div className="w-full h-full border-dashed border-text opacity-30 border-x" />
					</div>
				</div>
			)}
		</QueryClientProvider>
	);
};
