import { MovieEntity } from 'km-contracts';

export type MovieCardProps = Pick<MovieEntity, 'title' | 'release_date' | 'images' | 'tmdb_id'> &
	Partial<Pick<MovieEntity, 'rating_kp' | 'kp_id' | 'quality'>>;
