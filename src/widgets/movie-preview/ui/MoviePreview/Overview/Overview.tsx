import { useMovieStore } from '@/entities/movie';
import { Text, Title } from '@/shared';
import { HTMLAttributes, useState } from 'react';
import styles from './Overview.module.css';
import cn from 'classnames';

export const Overview = ({ className, ...props }: HTMLAttributes<HTMLDivElement>): JSX.Element => {
	const movie = useMovieStore((state) => state.currentMovie);
	const [overviewIsOpen, setOverviewIsOpen] = useState<boolean>(false);

	const toggleOverviewSize = (): void => {
		setOverviewIsOpen((state) => !state);
	};

	if (!movie) {
		return <></>;
	}

	return (
		<div className={cn(className, styles['overview'])} {...props}>
			<Title color="white" tag="h4">
				Описание
			</Title>
			<Text className={cn(styles['text'], { [styles['fullsizeOverview']]: overviewIsOpen })} color="gray">
				{movie.overview}
			</Text>
			<button onClick={toggleOverviewSize} className={styles['openButton']}>
				<Text color="primary" size="s">
					{overviewIsOpen ? 'Скрыть полное описание' : 'Подробное описание'}
				</Text>
			</button>
		</div>
	);
};
