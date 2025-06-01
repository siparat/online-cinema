import { RouterProvider } from 'react-router-dom';
import './styles/index.css';
import { router } from './router';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { TOAST_DEFAULT_CONFIG } from '@/shared';

function App(): JSX.Element {
	return (
		<HelmetProvider>
			<Helmet>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap" rel="stylesheet" />
			</Helmet>
			<Toaster toastOptions={TOAST_DEFAULT_CONFIG} />
			<RouterProvider router={router} />
		</HelmetProvider>
	);
}

export default App;
