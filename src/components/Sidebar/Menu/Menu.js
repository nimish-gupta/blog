// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';

type Props = {
	menu: {
		label: string,
		path?: string,
		href?: string,
	}[],
};

const Menu = ({ menu }: Props) =>
	console.log(menu) || (
		<nav className={styles['menu']}>
			<ul className={styles['menu__list']}>
				{menu.map((item) => (
					<li className={styles['menu__list-item']} key={item.path}>
						{item.path !== undefined ? (
							<Link
								to={item.path}
								className={styles['menu__list-item-link']}
								activeClassName={styles['menu__list-item-link--active']}>
								{item.label}
							</Link>
						) : (
							<a
								className={styles['menu__list-item-link']}
								target="_blank"
								rel="noreferer noopener"
								href={item.href}>
								{item.label}
							</a>
						)}
					</li>
				))}
			</ul>
		</nav>
	);

export default Menu;
