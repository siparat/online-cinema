import { ImageMovieType, TMDBTypes } from 'km-contracts';
import { MovieCardProps } from '@/shared';

export const mapFromTmdbToMovieCard = (tmdbData: TMDBTypes.FilmShort): MovieCardProps => ({
	tmdb_id: tmdbData.id,
	title: tmdbData.title,
	release_date: new Date(tmdbData.release_date || Date.now()),
	images: [
		{ aspect_ratio: 0.7, country_code: 'ru', height: 394, width: 276, path: tmdbData.poster_path as string, type: ImageMovieType.POSTER }
	]
});
