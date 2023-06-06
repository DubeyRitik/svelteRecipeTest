import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const result = await fetch(
		`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${params.topic}&apiKey=279925372bab43d28538c44a31f0a3e5&`
	);
	const data = await result.json();

	return {
		rec: data
	};
}) satisfies PageLoad;
