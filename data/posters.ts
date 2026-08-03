export interface Poster {
	description?: string;
	format: "poster" | "disc";
	height: number;
	name: string;
	slug: string;
	src: string;
	width: number;
}

export const POSTERS: Poster[] = [
	{
		format: "disc",
		height: 2560,
		name: "Scoop",
		slug: "scoop",
		src: "/posters/disc_1.jpg",
		width: 2560,
	},
	{
		format: "disc",
		height: 2560,
		name: "Moo",
		slug: "moo",
		src: "/posters/disc_2.jpg",
		width: 2560,
	},
	{
		format: "disc",
		height: 2560,
		name: "Irrequieto",
		slug: "irrequieto",
		src: "/posters/disc_3.jpg",
		width: 2560,
	},
	{
		format: "disc",
		height: 2560,
		name: "Hippy Ludens",
		slug: "hippy-ludens",
		src: "/posters/disc_4.jpg",
		width: 2560,
	},
	{
		format: "poster",
		height: 3620,
		name: "Brosexual",
		slug: "brosexual",
		src: "/posters/poster_brosexual.jpg",
		width: 2560,
	},
	{
		format: "poster",
		height: 3620,
		name: "Dafne",
		slug: "dafne",
		src: "/posters/poster_1.jpg",
		width: 2560,
	},
	{
		format: "poster",
		height: 3620,
		name: "Doing Business",
		slug: "doing-business",
		src: "/posters/poster_2.jpg",
		width: 2560,
	},
	{
		format: "poster",
		height: 3620,
		name: "Dolce far niente",
		slug: "dolce-far-niente",
		src: "/posters/poster_3.jpg",
		width: 2560,
	},
	{
		format: "poster",
		height: 3620,
		name: "Free speech?",
		slug: "free-speech",
		src: "/posters/poster_4.jpg",
		width: 2560,
	},
	{
		format: "poster",
		height: 3620,
		name: "Hardship",
		slug: "hardship",
		src: "/posters/poster_5.jpg",
		width: 2560,
	},
	{
		format: "poster",
		height: 3620,
		name: "Hush",
		slug: "hush",
		src: "/posters/poster_6.jpg",
		width: 2560,
	},
	{
		format: "disc",
		height: 2560,
		name: "The Planner",
		slug: "the-planner",
		src: "/posters/disc_the_planner.jpg",
		width: 2560,
	},
	{
		format: "poster",
		height: 3620,
		name: "Museumpark",
		slug: "museumpark",
		src: "/posters/poster_8.jpg",
		width: 2560,
	},
	{
		format: "poster",
		height: 3620,
		name: "Pasticciotto ergo Sum",
		slug: "pasticciotto-ergo-sum",
		src: "/posters/poster_9.jpg",
		width: 2560,
	},
	{
		format: "poster",
		height: 3620,
		name: "The Portal",
		slug: "the-portal",
		src: "/posters/poster_10.jpg",
		width: 2560,
	},
	{
		format: "poster",
		height: 3620,
		name: "Session",
		slug: "session",
		src: "/posters/poster_11.jpg",
		width: 2560,
	},
	{
		format: "poster",
		height: 3620,
		name: "Final Frontier",
		slug: "final-frontier",
		src: "/posters/poster_12.jpg",
		width: 2560,
	},
	{
		format: "poster",
		height: 3620,
		name: "I can hear my thoughts",
		slug: "my-thoughts",
		src: "/posters/poster_my_thoughts.jpg",
		width: 2560,
	},
	{
		description:
			"This is the first graphic I've ever made in this busy and confusing style, trying to get a clean yet confused *grunge* aesthetic with heavy street inspirations. My girlfriend has taken the photo used in this graphic while I was skating in one of the best spots for longboarding in the Netherlands: the famed **Museumpark**.\nI've really enjoyed creating this little piece and it kickstarted my habit of creating graphics just for the fun of it to unwind from client work and experiment with new tools that I wouldn't be able to use in my normal day-to-day activities.\n\n> Hey man, do a Big Spin!",
		format: "disc",
		height: 1920,
		name: "Big Spin",
		slug: "big-spin",
		src: "/posters/disc_big_spin.jpg",
		width: 1920,
	},
];

export const STANDARD_POSTERS = POSTERS.filter((p) => p.format === "poster");
export const VINYL_POSTERS = POSTERS.filter((p) => p.format === "disc");
