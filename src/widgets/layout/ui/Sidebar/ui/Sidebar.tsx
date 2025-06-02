import styles from './Sidebar.module.css';
import cn from 'classnames';
import { ToggleButton } from './ToggleButton/ui/ToggleButton';
import { Link } from 'react-router-dom';
import { SidebarMenu } from './SidebarMenu/ui/SidebarMenu';
import { useSidebarStore } from '@/widgets/layout/ui/Sidebar/model/store';
import { Routes } from '@/shared';
import { CollapsedLogo } from './CollapsedLogo/ui/CollapsedLogo';

export const Sidebar = (): JSX.Element => {
	const sidebarIsCollapsed = useSidebarStore((state) => state.collapsed);

	return (
		<aside className={cn(styles['sidebar'], { [styles['collapsed']]: sidebarIsCollapsed })}>
			<ToggleButton className={styles['toggle-button']} />
			<Link to={Routes.MAIN}>
				<CollapsedLogo />
			</Link>
			<SidebarMenu className={styles['sidebar-menu']} />
		</aside>
	);
};
