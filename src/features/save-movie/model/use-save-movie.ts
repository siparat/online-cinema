import { useMovieStore } from '@/entities/movie-card';
import toast from 'react-hot-toast';
import { saveMovieByTmdbId } from '../api/save-movie-by-tmdb-id';

interface UseSaveMovie {
	saveMovie: (tmdbId: number) => Promise<void>;
}

export const useSaveMovie = (): UseSaveMovie => {
	const addMovie = useMovieStore((state) => state.addMovie);

	const saveMovie = async (tmdbId: number): Promise<void> => {
		const toastId = toast.loading(`Процесс сохранения фильма`);
		try {
			const movie = await saveMovieByTmdbId(tmdbId);
			addMovie(movie);
			toast.success(`Фильм ${movie.title} успешно сохранен`, { id: toastId });
		} catch (error) {
			if (error instanceof Error) {
				toast.error(error.message, { id: toastId });
			}
		}
	};

	return { saveMovie };
};
