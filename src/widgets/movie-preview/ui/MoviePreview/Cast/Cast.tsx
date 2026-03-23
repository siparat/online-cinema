import { useMovieStore } from '@/entities/movie';
import { getTmdbImageUrl, Text, Title } from '@/shared';
import { HTMLAttributes, useState } from 'react';
import styles from './Cast.module.css';
import cn from 'classnames';

export const Cast = ({ className, ...props }: HTMLAttributes<HTMLDivElement>): JSX.Element => {
	const movie = useMovieStore((state) => state.currentMovie);

	if (!movie) {
		return <></>;
	}

	return (
		<div className={cn(className, styles['cast'])} {...props}>
			<Title color="white" tag="h2">
				Актёрский состав
			</Title>
			<div className={styles['persons']}>
				{movie.credits.map((c) => {
					return (
						<div style={{ display: 'flex', gap: 13, alignItems: 'center', flexShrink: 0 }} key={c.actor.imdb_id}>
							<div style={{ width: 72, height: 72, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
								<img
									style={{ width: '100%', height: '100%', objectFit: 'cover' }}
									src={getTmdbImageUrl(c.actor.image_path)}
									alt={c.character}
								/>
							</div>
							<div>
								<Text>{c.actor.name}</Text>
								<Text size="xs" color="primary">
									{c.character}
								</Text>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
