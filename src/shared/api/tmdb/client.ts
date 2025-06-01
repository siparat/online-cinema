import ky from 'ky';

export const tmdbApiClient = ky.create({
	headers: { accept: 'application/json', Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_TOKEN },
	prefixUrl: 'https://api.themoviedb.org/3',
	throwHttpErrors: false
});
