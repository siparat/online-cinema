import { MovieEntity } from 'km-contracts';
import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

interface MovieStoreState {
	movies: MovieEntity[];
}

interface MovieStoreActions {
	addMovie: (movie: MovieEntity) => void;
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
		}
	}),
	{
		name: 'movies'
	}
);

export const useMovieStore = create(movieStore);
