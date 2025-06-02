import { Highlight, NavItem as INavItem } from '@/shared';
import styles from './NavItem.module.css';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { useSidebarStore } from '@/widgets/layout/ui/Sidebar/model/store';

interface Props {
	data: INavItem;
}

export const NavItem = ({ data: { path, Icon, label } }: Props): JSX.Element => {
	const sidebarIsCollapsed = useSidebarStore((state) => state.collapsed);

	return (
		<NavLink
			className={({ isActive }) =>
				cn(styles['link'], {
					[styles['active']]: isActive,
					[styles['collapsed']]: sidebarIsCollapsed
				})
			}
			to={path}>
			{Icon && <Icon />}
			<Highlight color="gray">{label}</Highlight>
		</NavLink>
	);
};
