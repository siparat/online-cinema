import cn from 'classnames';
import styles from './ToggleButton.module.css';
import { useSidebarStore } from '@/widgets/layout/ui/Sidebar/model/store';
import ArrowIcon from './icons/arrow.svg?react';
import { ButtonHTMLAttributes } from 'react';

export const ToggleButton = ({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
	const isCollapsed = useSidebarStore((state) => state.collapsed);
	const toggle = useSidebarStore((state) => state.toggle);

	return (
		<button onClick={toggle} className={cn(className, styles['button'], { [styles['rotate']]: !isCollapsed })} {...props}>
			<ArrowIcon />
		</button>
	);
};
