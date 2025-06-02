import { sidebarMenu } from '../model/config';
import React, { HTMLAttributes } from 'react';
import { NavItem } from './NavItem/ui/NavItem';
import styles from './SidebarMenu.module.css';

export const SidebarMenu = (props: HTMLAttributes<HTMLElement>): JSX.Element => {
	return (
		<nav {...props}>
			<ul className={styles['links']}>
				{sidebarMenu.map((group, groupIndex) => (
					<React.Fragment key={groupIndex}>
						{group.map((item) => (
							<li key={item.path}>
								<NavItem data={item} />
							</li>
						))}
						{groupIndex < sidebarMenu.length - 1 && <span className="separator" />}
					</React.Fragment>
				))}
			</ul>
		</nav>
	);
};
