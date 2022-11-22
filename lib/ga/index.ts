export const pageView = (url: string) => {
	window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? "", {
		page_path: url,
	});
};

export const event = ({
	action,
	params,
}: {
	action: Gtag.EventNames | (string & {});
	params: Gtag.ControlParams | Gtag.EventParams | Gtag.CustomParams;
}) => {
	window.gtag("event", action, params);
};

export const contactPress = (origin: string) => {
	event({
		action: "contact_press",
		params: {
			event_category: "engagement",
			origin,
		},
	});
};

export const posterPress = (posterId: string) => {
	event({
		action: "poster_press",
		params: {
			event_category: "engagement",
			poster_id: posterId,
		},
	});
};
