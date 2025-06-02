import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import { GlobalLoader, useGlobalLoaderStore } from '@/shared';
import { useSidebarStore } from './Sidebar/model/store';
import cn from 'classnames';
import { Sidebar } from './Sidebar/ui/Sidebar';

export const Layout = (): JSX.Element => {
	const isGlobalLoading = useGlobalLoaderStore((state) => state.isLoading);
	const sidebarIsCollapsed = useSidebarStore((state) => state.collapsed);

	return (
		<>
			{isGlobalLoading && <GlobalLoader />}
			<div className={cn(styles['layout'], { [styles['collapsed']]: sidebarIsCollapsed })}>
				<Sidebar />
				<main className={styles['content']}>
					<Outlet />
				</main>
			</div>
		</>
	);
};
