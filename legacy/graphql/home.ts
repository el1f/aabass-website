import { graphql } from "./__generated__";

export const homePage = graphql(`
	query homePage {
		posters(first: 8, where: { format: A3 }) {
			slug
			name
			poster {
				url
			}
		}

		beans(first: 8) {
			id
			...BeanCard
		}

		coffeePlaces(first: 8, orderBy: visits_DESC) {
			id
			...CoffeePlaceCard
		}
	}
`);
