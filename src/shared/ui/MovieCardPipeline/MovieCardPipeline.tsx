import { HTMLAttributes, MouseEvent, PropsWithChildren } from 'react';
import styles from './MovieCardPipeline.module.css';
import cn from 'classnames';
import { MovieCardProps } from '@/shared/types';
import { MovieCard } from '@/entities/movie-card';

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
	movies: MovieCardProps[];
	onClick?: (e: MouseEvent<HTMLElement>, tmdbId: number) => unknown;
}

export const MovieCardPipeline = ({ onClick, movies, className, ...props }: PropsWithChildren<Props>): JSX.Element => {
	return (
		<div className={cn(className, styles['pipeline'])} {...props}>
			{movies.map((m) => (
				<MovieCard onClick={onClick && ((e): unknown => onClick(e, m.tmdb_id))} key={m.tmdb_id} data={m} />
			))}
		</div>
	);
};
