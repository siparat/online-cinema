import { ChangeEvent, useState } from 'react';
import { useDebounce } from '@/shared';
import { searchMovies } from '../api/search-movies';
import { TMDBTypes } from 'km-contracts';
import toast from 'react-hot-toast';

interface UseSearchMovies {
	query: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	results: TMDBTypes.FilmShort[];
}

export const useSearchMovies = (): UseSearchMovies => {
	const [query, setQuery] = useState('');
	const [results, setResults] = useState<TMDBTypes.FilmShort[]>([]);

	const debouncedSearch = useDebounce(async () => {
		if (!query.trim()) return;

		const toastId = toast.loading('Поиск фильмов в TMDB');
		try {
			const data = await searchMovies(query);
			setResults(data);
			if (!data.length) {
				return toast.error('Фильмы отсутствуют по данному запросу', { id: toastId });
			}
			toast.success(`Найдено: ${data.length} результатов`, { id: toastId });
		} catch (error) {
			if (error instanceof Error) {
				toast.error(error.message, { id: toastId });
			}
		}
	}, 1000);

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const value = e.target.value;
		setQuery(value);
		debouncedSearch();
	};

	return {
		query,
		onChange: handleChange,
		results
	};
};
