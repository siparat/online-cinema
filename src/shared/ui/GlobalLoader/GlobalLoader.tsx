import { Highlight } from '../Highlight/Highlight';
import styles from './GlobalLoader.module.css';

export const GlobalLoader = (): JSX.Element => {
	return (
		<div className={styles['loader']}>
			<Highlight size="l">Загрузка...</Highlight>
		</div>
	);
};
