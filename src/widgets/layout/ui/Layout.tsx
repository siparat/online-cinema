import { Link, Outlet } from 'react-router-dom';
import { SidebarMenu } from './SidebarMenu/ui/SidebarMenu';
// import cn from 'classnames';
import styles from './Layout.module.css';
import LogoIcon from '@/shared/assets/icons/logo.svg?react';
import { Routes } from '@/shared';

export const Layout = (): JSX.Element => {
	return (
		<div className={styles['layout']}>
			<aside className={styles['sidebar']}>
				<Link to={Routes.MAIN}>
					<LogoIcon />
				</Link>
				<SidebarMenu className={styles['sidebar-menu']} />
			</aside>
			<main className={styles['content']}>
				<Outlet />
			</main>
		</div>
	);
};
