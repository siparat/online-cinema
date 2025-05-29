import { HTMLAttributes, ReactNode } from 'react';
import styles from './Badge.module.css';
import cn from 'classnames';
import { Highlight } from '@/shared';
import { BadgeColor } from '@/shared';

interface Props extends HTMLAttributes<HTMLSpanElement> {
	appearance?: BadgeColor;
	size?: 'l' | 's';
	children: ReactNode;
}

export const Badge = ({ appearance = BadgeColor.RED, size = 'l', className, children, ...props }: Props): JSX.Element => {
	return (
		<span className={cn(className, styles['badger'], styles[appearance], styles[size])} {...props}>
			<Highlight color={appearance == 'yellow' ? 'black' : 'white'} size={size == 's' ? 's' : 'm'}>
				{children}
			</Highlight>
		</span>
	);
};
