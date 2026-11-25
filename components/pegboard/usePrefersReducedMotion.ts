import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Platform reduced-motion flag. Starts false so the server render matches,
 * then follows the media query, including changes while the page is open.
 */
export function usePrefersReducedMotion(): boolean {
	const [reduced, setReduced] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(QUERY);
		const update = () => setReduced(media.matches);
		update();
		media.addEventListener("change", update);
		return () => media.removeEventListener("change", update);
	}, []);

	return reduced;
}
