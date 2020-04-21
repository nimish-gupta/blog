// @flow strict
import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';

type Props = {
	isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
	const { author, copyright, menu } = useSiteMetadata();

	return (
		<div className={styles['sidebar']}>
			<div className={styles['sidebar__inner']}>
				<Author author={author} isIndex={isIndex} />
				<Menu menu={menu} />
				<Contacts contacts={author.contacts} />
				<ThemeToggler>
					{({ theme, toggleTheme }) => (
						<label>
							<input
								type="checkbox"
								onChange={(e) =>
									toggleTheme(e.target.checked ? 'dark' : 'light')
								}
								checked={theme === 'dark'}
							/>{' '}
							Dark mode
						</label>
					)}
				</ThemeToggler>
				<Copyright copyright={copyright} />
			</div>
		</div>
	);
};

export default Sidebar;
