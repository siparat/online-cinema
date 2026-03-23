import { BackButton } from '@/features/go-back';
import { MovieInfo } from './MovieInfo/MovieInfo';
import styles from './MoviePreview.module.css';
import { useMovieStore } from '@/entities/movie';
import { useMemo } from 'react';
import { ImageMovieType } from 'km-contracts';
import { getTmdbImageUrl } from '@/shared';
import { Actions } from './Actions/Actions';
import { Overview } from './Overview/Overview';
import { Cast } from './Cast/Cast';

export const MoviePreview = (): JSX.Element => {
	const movie = useMovieStore((state) => state.currentMovie);
	const backdrop = useMemo(() => movie?.images.find((i) => i.type == ImageMovieType.BACKDROP), [movie?.images]);

	if (!movie) {
		return <></>;
	}

	return (
		<section>
			<BackButton />
			<div className={styles['wrapper']}>
				<MovieInfo className={styles['info']} />
				{backdrop && (
					<div className={styles['backdrop-wrapper']}>
						<img
							loading="eager"
							src={getTmdbImageUrl(backdrop.path, ImageMovieType.BACKDROP)}
							alt={movie.title}
							className={styles['backdrop']}
						/>
						<div className={styles['backdrop-overlay']}></div>
					</div>
				)}
			</div>
			<Actions />
			<Overview />
			<Cast />
		</section>
	);
};
