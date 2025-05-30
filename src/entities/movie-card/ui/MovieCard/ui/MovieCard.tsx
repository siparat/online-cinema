import { ImageMovieType, MovieEntity } from 'km-contracts';
import cn from 'classnames';
import styles from './MovieCard.module.css';
import { HTMLAttributes, useMemo } from 'react';
import { Badge, BadgeColor, getTmdbImageUrl, Routes, Text, Title } from '@/shared';
import { getBadgeColorByRating, handleMovieImages } from '@/entities/movie';
import { Link } from 'react-router-dom';

interface Props extends HTMLAttributes<HTMLAnchorElement> {
	data: MovieEntity;
}

export const MovieCard = ({ data, className, ...props }: Props): JSX.Element => {
	const image = useMemo(() => handleMovieImages(data), [data]).POSTER![0];

	return (
		<Link to={Routes.MOVIE.replace(':kpId', data.kp_id.toString())} className={cn(className, styles['card'])} {...props}>
			<div className={styles['badges']}>
				<Badge appearance={getBadgeColorByRating(data.rating_kp)}>{data.rating_kp.toFixed(1)}</Badge>
				<Badge appearance={BadgeColor.YELLOW}>{data.quality}</Badge>
			</div>
			<img className={styles['poster']} loading="lazy" src={getTmdbImageUrl(image.path, ImageMovieType.POSTER)} alt={image.path} />
			<Title tag="h3" className={styles['title']}>
				{data.title}
			</Title>
			<Text className={styles['year']} color="gray">
				{new Date(data.release_date).getFullYear()}
			</Text>
		</Link>
	);
};
