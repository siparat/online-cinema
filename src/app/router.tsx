import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Layout } from '@/widgets';
import { HomePage, MoviePage } from '@/pages';
import { movieLoader } from '@/pages/movie/[id]/model';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<HomePage />} />
			<Route path="/movie/:id">
				<Route index loader={movieLoader} element={<MoviePage />} />
			</Route>
		</Route>
	)
);
