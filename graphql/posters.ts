import { graphql } from "./__generated__";

export const allPosters = graphql(`
	query Posters {
		standard: posters(where: { format: A3 }, first: 50) {
			slug
			name
			poster {
				url
			}
		}
		vinyl: posters(where: { format: VINYL }, first: 50) {
			slug
			name
			poster {
				url
			}
		}
	}
`);

export const poster = graphql(`
	query Poster($slug: String!) {
		poster(where: { slug: $slug }) {
			...PosterFull
		}
	}
`);
