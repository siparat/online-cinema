export const tmdbApi = {
	searchFilms(query: string): string {
		return 'search/movie?' + new URLSearchParams({ query, language: 'ru' }).toString();
	}
};
