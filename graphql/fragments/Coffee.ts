import { graphql } from "../__generated__";

export const BeanCard = graphql(`
	fragment BeanCard on Bean {
		bagPicture {
			url
		}
		name
		roaster
		origin
		process
		espressoScore
		filterScore
	}
`);

export const CoffeePlaceCard = graphql(`
	fragment CoffeePlaceCard on CoffeePlace {
		picture {
			url
		}
		country
		name
		score
		visits
	}
`);
