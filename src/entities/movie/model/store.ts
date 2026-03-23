import { LocalStorageKeys } from '@/shared';
import { MovieEntity } from 'km-contracts';
import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

export interface MovieStoreState {
	movies: MovieEntity[];
	currentMovie?: MovieEntity;
}

interface MovieStoreActions {
	addMovie: (movie: MovieEntity) => void;
	setCurrentMovie: (movieKpId: number) => void;
	resetCurrentMovie: () => void;
}

const movieStoreInitialState: MovieStoreState = {
	movies: []
};

const movieStore: StateCreator<MovieStoreActions & MovieStoreState, [], [['zustand/persist', never]]> = persist(
	(set, get) => ({
		...movieStoreInitialState,
		addMovie: (movie: MovieEntity): void => {
			const allMovies = get().movies;
			if (allMovies.some((m) => m.kp_id == movie.kp_id)) {
				return;
			}
			set({ movies: allMovies.concat(movie) });
		},
		setCurrentMovie: (movieKpId: number): void => {
			const movie = get().movies.find((m) => m.kp_id == movieKpId);
			if (!movie) {
				return;
			}
			set({ currentMovie: movie });
		},
		resetCurrentMovie: () => set({ currentMovie: undefined })
	}),
	{
		name: LocalStorageKeys.MOVIES
	}
);

export const useMovieStore = create(movieStore);
