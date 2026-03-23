import { ImageMovieType } from 'km-contracts';

const sizeMap: Record<ImageMovieType | 'CREDIT_LOGO', string> = {
	[ImageMovieType.BACKDROP]: 'original',
	[ImageMovieType.LOGO]: 'original',
	[ImageMovieType.POSTER]: 'original',
	CREDIT_LOGO: 'original'
};

const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/';

export const getTmdbImageUrl = (path: string, type?: keyof typeof sizeMap): string => {
	return `${TMDB_IMAGE_BASE}${type ? sizeMap[type] : 'original'}${path}`;
};
