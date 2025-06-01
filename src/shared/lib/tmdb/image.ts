import { ImageMovieType } from 'km-contracts';

const sizeMap: Record<ImageMovieType | 'CREDIT_LOGO', string> = {
	[ImageMovieType.BACKDROP]: 'w1280',
	[ImageMovieType.LOGO]: 'w500',
	[ImageMovieType.POSTER]: 'h632',
	CREDIT_LOGO: 'w185'
};

const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/';

export const getTmdbImageUrl = (path: string, type?: keyof typeof sizeMap): string => {
	return `${TMDB_IMAGE_BASE}${type ? sizeMap[type] : 'original'}${path}`;
};
