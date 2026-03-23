import { graphql } from "./__generated__";

export const postersPage = graphql(`
	query postersPage {
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
	query poster($slug: String!) {
		poster(where: { slug: $slug }) {
			...PosterFull
		}
	}
`);
