import { HTMLAttributes, PropsWithChildren } from 'react';
import styles from './Title.module.css';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLHeadingElement> {
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
	color?: 'primary' | 'white' | 'gray' | 'gray-dark' | 'black';
}

export const Title = ({ color = 'white', tag, className, children, ...props }: PropsWithChildren<Props>): JSX.Element => {
	const allProps: HTMLAttributes<HTMLHeadingElement> = { className: cn(className, styles['common'], styles[color], styles[tag]), ...props };
	switch (tag) {
		case 'h1':
			return <h1 {...allProps}>{children}</h1>;
		case 'h2':
			return <h2 {...allProps}>{children}</h2>;
		case 'h3':
			return <h3 {...allProps}>{children}</h3>;
		case 'h4':
			return <h4 {...allProps}>{children}</h4>;
		case 'h5':
			return <h5 {...allProps}>{children}</h5>;
		default:
			throw new Error('Данный тег недоступен');
	}
};
