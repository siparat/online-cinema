import { baseApiClient } from '@/shared/api/base/client';
import { baseApi } from '@/shared/api/base/routes';
import { BaseApiError } from '@/shared/api/base/types';
import { MovieEntity, MovieType } from 'km-contracts';

export const saveMovieByTmdbId = async (tmdbId: number): Promise<MovieEntity> => {
	const response = await baseApiClient.get(baseApi.parseMovieByTmdbId(tmdbId, MovieType.FILM)).json<MovieEntity | BaseApiError>();
	if ('message' in response) {
		throw new Error('Ошибка при сохранении фильма: ' + response.message);
	}
	return response;
};
