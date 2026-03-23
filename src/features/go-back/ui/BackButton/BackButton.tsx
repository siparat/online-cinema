import { Title } from '@/shared';
import ArrowIcon from '@/shared/assets/icons/arrow-left.svg?react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './BackButton.module.css';

export const BackButton = (): JSX.Element => {
	const navigate = useNavigate();
	const location = useLocation();

	const onClick = (): void => {
		if (location.state?.from) {
			navigate(-1);
		} else {
			navigate('/');
		}
	};

	return (
		<button className={styles['button']} onClick={onClick}>
			<ArrowIcon />
			<Title tag="h4">Назад</Title>
		</button>
	);
};
