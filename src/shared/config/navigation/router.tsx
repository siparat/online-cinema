import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Layout } from '@/widgets';
import { HomePage } from '@/pages';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<HomePage />} />
		</Route>
	)
);
