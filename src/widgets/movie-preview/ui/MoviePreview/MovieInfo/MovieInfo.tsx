import { COUNTRIES, GENRES, getBadgeColorByRating, useMovieStore } from '@/entities/movie';
import { Badge, BadgeColor, getTmdbImageUrl, Text, Title } from '@/shared';
import { HTMLAttributes, useMemo } from 'react';
import styles from './MovieInfo.module.css';
import { ImageMovieEntity, ImageMovieType } from 'km-contracts';
import { capitalize } from '@/shared/lib';

export const MovieInfo = ({ className, ...props }: HTMLAttributes<HTMLDivElement>): JSX.Element => {
	const movie = useMovieStore((state) => state.currentMovie);
	const logo = useMemo(() => {
		if (!movie) {
			return;
		}
		let bufferLogo: ImageMovieEntity | undefined;
		for (const image of movie.images) {
			if (image.type !== ImageMovieType.LOGO) {
				continue;
			}
			if (image.country_code == 'ru') {
				return image;
			}
			bufferLogo ??= image;
		}
		return bufferLogo;
	}, [movie]);

	if (!movie) {
		return <></>;
	}

	return (
		<div className={className} {...props}>
			<Badge appearance={BadgeColor.YELLOW}>{movie.quality}</Badge>
			{logo && <img className={styles['logo']} loading="lazy" src={getTmdbImageUrl(logo.path, ImageMovieType.LOGO)} alt={movie.title} />}
			<div className={styles['properties']}>
				<Badge appearance={getBadgeColorByRating(movie.rating_kp)}>{movie.rating_kp.toFixed(1)}</Badge>
				<Text color="gray">{new Date(movie.release_date).getFullYear()}</Text>
				<Text color="gray">{COUNTRIES.find((c) => c.iso_3166_1 == movie.countries[0])?.native_name}</Text>
				<Text color="gray">{capitalize(GENRES.find((g) => g.id == movie.genres[0])?.genre || '')}</Text>
				<Text color="gray">{movie.age_restriction}+</Text>
			</div>
			<Title className={styles['title']} tag="h1">
				Фильм {movie.title} смотреть онлайн
			</Title>
			{movie.slogan && <p className={styles['slogan']}>{movie.slogan}</p>}
		</div>
	);
};
