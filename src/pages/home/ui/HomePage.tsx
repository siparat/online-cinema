import styles from './HomePage.module.css';
import { SavedMoviesList } from '@/widgets';
import { SaveMovieForm } from '@/features/save-movie';

export const HomePage = (): JSX.Element => {
	return (
		<div className={styles['wrapper']}>
			<SavedMoviesList />
			<SaveMovieForm />
		</div>
	);
};
