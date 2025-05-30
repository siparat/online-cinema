import { ImageMovieEntity, ImageMovieType, MovieEntity } from 'km-contracts';

export const handleMovieImages = (movie: MovieEntity): Partial<Record<ImageMovieType, ImageMovieEntity[]>> =>
	movie.images.reduce((acc: Partial<Record<ImageMovieType, ImageMovieEntity[]>>, curr) => {
		const newValue = (acc[curr.type] || []).concat(curr);
		acc[curr.type] = newValue;
		return acc;
	}, {});
