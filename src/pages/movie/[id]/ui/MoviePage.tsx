import styles from './MoviePage.module.css';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MovieEntity } from 'km-contracts';
import { MoviePreview } from '@/widgets/movie-preview';
import { useEffect } from 'react';
import { useMovieStore } from '@/entities/movie';

export const MoviePage = (): JSX.Element => {
	const movie = useLoaderData<MovieEntity>();
	const setCurrentMovie = useMovieStore((state) => state.setCurrentMovie);
	const resetCurrentMovie = useMovieStore((state) => state.resetCurrentMovie);

	useEffect(() => {
		setCurrentMovie(movie.kp_id);
		return resetCurrentMovie;
	}, [movie.kp_id, resetCurrentMovie, setCurrentMovie]);

	return (
		<div className={styles['wrapper']}>
			<Helmet>
				<title>{movie.title}</title>
			</Helmet>
			<MoviePreview />
		</div>
	);
};
