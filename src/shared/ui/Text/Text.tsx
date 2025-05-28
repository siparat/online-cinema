import { HTMLAttributes, PropsWithChildren } from 'react';
import styles from './Text.module.css';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLParagraphElement> {
	size?: 'xs' | 's' | 'm' | 'l' | 'xl';
	color?: 'primary' | 'white' | 'gray' | 'gray-dark' | 'black';
}

export const Text = ({ color = 'white', size = 'm', className, children, ...props }: PropsWithChildren<Props>): JSX.Element => {
	return (
		<p {...props} className={cn(className, styles['common'], styles[color], styles[size])}>
			{children}
		</p>
	);
};
