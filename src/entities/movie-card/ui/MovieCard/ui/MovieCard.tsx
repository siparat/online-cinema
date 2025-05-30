import { ImageMovieType } from 'km-contracts';
import cn from 'classnames';
import styles from './MovieCard.module.css';
import { HTMLAttributes, useMemo } from 'react';
import { Badge, BadgeColor, getTmdbImageUrl, Routes, Text, Title } from '@/shared';
import { getBadgeColorByRating } from '@/entities/movie';
import { Link } from 'react-router-dom';
import { MovieCardProps } from '@/shared';

interface Props extends HTMLAttributes<HTMLElement> {
	data: MovieCardProps;
	isLink?: boolean;
}

export const MovieCard = ({ data, isLink = true, className, ...props }: Props): JSX.Element => {
	const image = useMemo(() => data.images.find((i) => i.type == ImageMovieType.POSTER && i.country_code == 'ru'), [data.images])!;
	const commonProps = { className: cn(className, styles['card']), ...props };

	const cardContent = (
		<>
			<div className={styles['badges']}>
				{data.rating_kp && <Badge appearance={getBadgeColorByRating(data.rating_kp)}>{data.rating_kp.toFixed(1)}</Badge>}
				{data.quality && <Badge appearance={BadgeColor.YELLOW}>{data.quality}</Badge>}
			</div>
			<img className={styles['poster']} loading="lazy" src={getTmdbImageUrl(image.path, ImageMovieType.POSTER)} alt={image.path} />
			<Title tag="h3" className={styles['title']}>
				{data.title}
			</Title>
			<Text className={styles['year']} color="gray">
				{new Date(data.release_date).getFullYear()}
			</Text>
		</>
	);

	if (isLink && data.kp_id) {
		return (
			<Link to={Routes.MOVIE.replace(':kpId', data.kp_id.toString())} {...commonProps}>
				{cardContent}
			</Link>
		);
	}

	return <div {...commonProps}>{cardContent}</div>;
};
