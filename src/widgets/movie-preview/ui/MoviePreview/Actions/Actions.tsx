import { Button } from '@/shared';
import { HTMLAttributes } from 'react';
import styles from './Actions.module.css';
import cn from 'classnames';
import DownloadIcon from '@/shared/assets/icons/download.svg?react';
import { useNavigate } from 'react-router-dom';

export const Actions = ({ className, ...props }: HTMLAttributes<HTMLDivElement>): JSX.Element => {
	const navigate = useNavigate();

	const navigateToPlayer = (): void => {
		navigate('player', { relative: 'path' });
	};

	return (
		<div className={cn(className, styles['actions'])} {...props}>
			<Button onClick={navigateToPlayer} className={styles['seeButton']}>
				Смотреть бесплатно
			</Button>
			<Button className={styles['ghostButton']} appearance="ghost">
				<DownloadIcon />
			</Button>
		</div>
	);
};
