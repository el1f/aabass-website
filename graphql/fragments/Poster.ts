import { graphql } from "../__generated__";

export const PosterThumbnail = graphql(`
	fragment PosterThumbnail on Poster {
		slug
		name
		poster {
			url(transformation: { image: { resize: { width: 640 } } })
		}
	}
`);

export const PosterFull = graphql(`
	fragment PosterFull on Poster {
		id
		slug
		name
		description
		format
		poster {
			url
			width
			height
		}
	}
`);
