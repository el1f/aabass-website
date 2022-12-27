import { graphql } from "./__generated__";

export const coffeePage = graphql(`
	query coffeePage {
		# Beans
		favoriteBeans: beans(where: { isFavorite: true }) {
			id
			...BeanCard
		}
		latestBeans: beans(first: 10) {
			id
			...BeanCard
		}
		# Places
		favoritePlaces: coffeePlaces(where: { isFavorite: true }) {
			id
			...CoffeePlaceCard
		}
		latestPlaces: coffeePlaces(orderBy: visits_ASC) {
			id
			...CoffeePlaceCard
		}
	}
`);
