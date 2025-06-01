import { useMovieStore } from '@/entities/movie-card';
import { MovieCardPipeline, Title } from '@/shared';
import { HTMLAttributes } from 'react';

export const SavedMoviesList = (props: HTMLAttributes<HTMLDivElement>): JSX.Element => {
	const movies = useMovieStore((state) => state.movies);

	return (
		<div {...props}>
			<Title tag="h1" color="primary">
				Список загруженных фильмов
			</Title>
			<MovieCardPipeline movies={movies} />
		</div>
	);
};
