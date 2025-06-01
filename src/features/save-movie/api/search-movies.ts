import { tmdbApiClient } from '@/shared/api/tmdb/client';
import { tmdbApi } from '@/shared/api/tmdb/routes';
import { TmdbApiError } from '@/shared/api/tmdb/types';
import { TMDBTypes, TMDBSearchListResponse } from 'km-contracts';

export const searchMovies = async (query: string): Promise<TMDBTypes.FilmShort[]> => {
	const response = await tmdbApiClient.get(tmdbApi.searchFilms(query)).json<TMDBSearchListResponse<TMDBTypes.Film> | TmdbApiError>();
	if ('status_message' in response) {
		throw new Error('Произошла ошибка при запросе к TMDB. Попробуйте позже');
	}
	return response.results;
};
