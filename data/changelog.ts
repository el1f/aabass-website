export const CHANGELOG: {
	date?: string;
	description: string;
	features: {
		date?: string;
		title: string;
		type: "add" | "edit" | "remove" | "fix";
	}[];
	summary: string;
	version: string;
}[] = [
	{
		description:
			"GF made me notice having my portrait move on mobile would be nice. It is nice indeed!",
		features: [
			{
				date: "2025-04-30",
				title: "Portrait tilting based on device accelerometer",
				type: "add",
			},
			{
				date: "2025-04-30",
				title: "Tweaks to the about me page paddings etc.",
				type: "edit",
			},
		],
		summary: "Tilt it!",
		version: "1.5.1",
	},
	{
		description:
			"Just a routine cleanup to make sure I cn keep maintaining this website moving forward. Some bug fixes as well.",
		features: [
			{
				date: "2025-04-25",
				title:
					"Remove more features such as polls, the empty footer pages etc.",
				type: "remove",
			},
			{
				date: "2025-04-25",
				title: "Cleanup Spotify widget",
				type: "edit",
			},
			{
				date: "2025-04-25",
				title: "Remove thoughts, 'cause I don't really write any",
				type: "remove",
			},
			{
				date: "2025-04-25",
				title: "Update to the hero section content in the homepage",
				type: "edit",
			},
			{
				date: "2025-04-25",
				title:
					"Cute placeholder for case studies... instead of actually adding case studies.",
				type: "add",
			},
			{
				date: "2025-04-25",
				title: "Remove useless TW plugins",
				type: "remove",
			},
			{
				date: "2025-04-25",
				title: "Update CV and Print mode cleanup",
				type: "edit",
			},
			{
				date: "2025-04-25",
				title: "Upgrade to NextJS 15 (no app folder still yet)",
				type: "edit",
			},
			{
				date: "2024-04-25",
				title: "Light mode fixes",
				type: "fix",
			},
		],
		summary: "A much needed makeover",
		version: "1.5.0",
	},
	{
		description:
			"Added a widget to the navbar linking to my music profiles and showing what I'm currently listening to. I eventually have to use it to add some metrics similar to the spotify wrapped stuff.",
		features: [
			{
				date: "2024-08-12",
				title:
					"Added a widget to the navbar linking to my music profiles and showing what I'm currently listening to.",
				type: "add",
			},
			{
				date: "2024-08-12",
				title: "Fixed the buttons color on light theme",
				type: "fix",
			},
		],
		summary: "Stalk my ears",
		version: "1.4.1",
	},
	{
		description:
			"Working on websites is so freaking hard, especially when they're yours. I was planning a little bit of a complete overhaul of this site only to then look at myself in the mirror and remember I've been redesigning this thing for ages and I still don't have any shred of actual CONTENT in it. This next update is gonna be fully focused on getting some actual content in here. I swear.",
		features: [
			{
				date: "2024-08-08",
				title: "Merged About me and Curriculum pages into a single page.",
				type: "edit",
			},
			{
				date: "2024-08-08",
				title: "Tweaks to the CV layout and content + parallax portrait",
				type: "edit",
			},
		],
		summary: "Back in business",
		version: "1.4.0",
	},
	{
		description:
			"I want to become a better writer in general, I also love coffee as you might have noticed. This next stage is all about giving me a place write about things I like and hopefully get better at it. Also, I'm going to write about coffee. A lot.",
		features: [
			{
				date: "2022-12-20",
				title:
					"Updated the branding on the website to reflect the new palette, logos and fonts.",
				type: "edit",
			},
			{
				date: "2022-12-20",
				title:
					"The navbar now has a nice sleek animation when back-scrolling that animates the logo.",
				type: "edit",
			},
			{
				date: "2022-12-24",
				title:
					"A new little page for all of my thoughts have been added! Now I can finally bother all of the internet with what's currently running through my little noggin'!",
				type: "add",
			},
			{
				date: "2022-12-26",
				title:
					"The posters have been moved to the CMS. Now I can update them without having to push a whole new version of the website. How cool is that? Also, there is now a lightBox to check them out in their full-sized glory!",
				type: "add",
			},
			{
				date: "2022-12-27",
				title:
					"Coffee up! The coffee page is now up and running, ready to welcome a collection of the beans I consume in the coming months and of the places I go to have those cups at!",
				type: "add",
			},
			{
				date: "2023-01-09",
				title:
					"The website now actually uses the desired font instead of whatever your browser wants to load. Kinda handy huh? One would think this would be something that would have been worked out 3 months ago or smth.",
				type: "fix",
			},
			{
				date: "2023-01-09",
				title:
					"This site is now powered by NextJS 13 because why the heck not.",
				type: "edit",
			},
		],
		summary: "Thinking of Coffee",
		version: "1.3.0",
	},
	{
		description:
			"Guess that my work site needs a little more work related information right? Booooring but guess it won't take too long to fill out. Right?",
		features: [
			{
				date: "2022-11-24",
				title: "Ideas page powered by Hygraph CMS",
				type: "add",
			},
			{
				date: "2022-12-04",
				title: "Curriculum page. So bland. So boring. So effective.",
				type: "add",
			},
			{
				date: "2022-12-08",
				title:
					'Case studies page. Just the page. No content. What, thought you could see some of my work? Haha, nope. Gotta first figure out whether I can show them or not with my business daddies. Swear the next contracts will have a "I can show this to the world at my conditions" clause. Maybe followed by a little "Pretty please daddy?"',
				type: "add",
			},
			{
				date: "2022-12-08",
				title:
					"Polls, absolutely unnecessary, they drove me down a rabbit hole of utmost proportions and I ended up adding them in a way simpler way but yeah. Polls. Was it worth it?",
				type: "add",
			},
			{
				date: "2022-12-08",
				title: "Some smaller visual tweaks",
				type: "edit",
			},
		],
		summary: "Down to business",
		version: "1.2.0",
	},
	{
		date: "2022-11-22",
		description:
			"The website basics are all there, I got updates in the oven, guess it makes sense to track what I'm going to add here as I do it :D",
		features: [
			{
				title: "Changelog page and indicator",
				type: "add",
			},
			{
				title:
					"Analytics so that I can spy on y'all and use your usage stats of my site to conquer the worl... I mean make my site better.",
				type: "add",
			},
			{
				title:
					"Added language switching support, not the actual translations though. I will at some point go ahead and add italian translations but it's not like anyone needs them anyway. English mofo do you speak it?",
				type: "add",
			},
			{
				title:
					"Light theme because some of y'all like to see the world (and your eyes) burn.",
				type: "add",
			},
			{
				title:
					"Small tweaks to the theme. This is not going to be the last time :)",
				type: "edit",
			},
		],
		summary: "Stylish update!",
		version: "1.1.0",
	},
	{
		date: "2022-11-21",
		description:
			"All great things start small and grow over time. Or at least this is what I am telling myself in order to actually ship something after so many iterations of this website.",
		features: [
			{
				title: "Landing page with some basic information about me",
				type: "add",
			},
			{
				title: "Posters page with some of the posters I have designed",
				type: "add",
			},
		],
		summary: "Genesis",
		version: "1.0.0",
	},
];
