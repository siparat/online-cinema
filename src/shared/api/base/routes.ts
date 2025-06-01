import { MovieType } from 'km-contracts';

export const baseApi = {
	parseMovieByKpId(kpId: number): string {
		return `http://localhost:3000/parser/movie/byKpId/${kpId}`;
	},
	parseMovieByTmdbId(tmdbId: number, type: MovieType): string {
		return `http://localhost:3000/parser/movie/byTmdbId/${tmdbId}/${type}`;
	}
};
