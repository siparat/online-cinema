import { ButtonHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	appearance?: 'primary' | 'dark' | 'transparent' | 'ghost';
	children: ReactNode;
}

export const Button = ({ className, appearance = 'primary', children, ...props }: Props): JSX.Element => {
	return (
		<button className={cn(className, styles['button'], styles[appearance])} {...props}>
			{children}
		</button>
	);
};
