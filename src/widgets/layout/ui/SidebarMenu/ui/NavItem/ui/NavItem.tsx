import { Highlight, NavItem as INavItem } from '@/shared';
import styles from './NavItem.module.css';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

interface Props {
	data: INavItem;
}

export const NavItem = ({ data: { path, Icon, label } }: Props): JSX.Element => {
	return (
		<NavLink
			className={({ isActive }) =>
				cn(styles['link'], {
					[styles['active']]: isActive
				})
			}
			to={path}>
			{Icon && <Icon />}
			<Highlight color="gray">{label}</Highlight>
		</NavLink>
	);
};
