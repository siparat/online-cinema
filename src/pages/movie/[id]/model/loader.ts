import { LoaderFunctionArgs } from 'react-router-dom';
import { MovieEntity } from 'km-contracts';
import { LocalStorageKeys } from '@/shared';
import { StorageValue } from 'zustand/middleware';
import { MovieStoreState } from '@/entities/movie';

export const movieLoader = async ({ params }: LoaderFunctionArgs): Promise<MovieEntity> => {
	const kpId = Number(params.id);
	const notFoundResponse = new Response('Not Found', { status: 404 });
	const localstorageResult: string | null = localStorage.getItem(LocalStorageKeys.MOVIES);
	if (Number.isNaN(kpId) || !localstorageResult) {
		throw notFoundResponse;
	}

	const storage: StorageValue<MovieStoreState> = JSON.parse(localstorageResult);
	const movies = storage.state.movies;

	const movie = movies.find((m) => m.kp_id == kpId);
	if (!movie) {
		throw notFoundResponse;
	}

	return movie;
};
