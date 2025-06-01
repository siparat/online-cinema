import { forwardRef, InputHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Input.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	type: Extract<InputHTMLAttributes<HTMLInputElement>['type'], 'text' | 'number' | 'password'>;
}

export const Input = forwardRef<HTMLInputElement, Props>(({ className, ...props }: Props, ref): JSX.Element => {
	return <input ref={ref} className={cn(className, styles['input'])} {...props} />;
});
