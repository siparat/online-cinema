import { HTMLAttributes, PropsWithChildren } from 'react';
import styles from './Highlight.module.css';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLSpanElement> {
	size?: 's' | 'm' | 'l';
	color?: 'primary' | 'white' | 'gray' | 'gray-dark' | 'black';
}

export const Highlight = ({ color = 'primary', size = 'm', className, children, ...props }: PropsWithChildren<Props>): JSX.Element => {
	return (
		<span {...props} className={cn(className, styles[color], styles[size])}>
			{children}
		</span>
	);
};
