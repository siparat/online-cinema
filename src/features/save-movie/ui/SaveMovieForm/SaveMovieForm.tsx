import { Input, MovieCardPipeline, Title } from '@/shared';
import { useSearchMovies } from '../../model/use-search-movies';
import { mapFromTmdbToMovieCard } from '@/entities/movie-card/lib';
import { useMovieStore } from '@/entities/movie-card';
import { useMemo } from 'react';
import styles from './SaveMovieForm.module.css';
import { useSaveMovie } from '../../model/use-save-movie';

export const SaveMovieForm = (): JSX.Element => {
	const { query, onChange, results } = useSearchMovies();
	const { saveMovie } = useSaveMovie();
	const movies = useMovieStore((state) => state.movies);

	const filteredMovies = useMemo(() => results.filter((r) => !movies.some((m) => m.tmdb_id == r.id)), [movies, results]);

	return (
		<div>
			<Title tag="h1" color="white">
				Загрузка фильмов
			</Title>
			<Input className={styles['input']} placeholder="Название фильма" type="text" value={query} onChange={onChange} />

			<MovieCardPipeline
				className={styles['movies-pipeline']}
				onClick={(_, tmdbId) => saveMovie(tmdbId)}
				movies={filteredMovies.map(mapFromTmdbToMovieCard)}
			/>
		</div>
	);
};
