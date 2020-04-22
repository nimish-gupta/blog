// @flow strict
import React from 'react';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import { SideBar, Inner } from './style';
import { useSiteMetadata } from '../../hooks';

type Props = {
	isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
	const { author, copyright, menu } = useSiteMetadata();

	return (
		<SideBar>
			<Inner>
				<Author author={author} isIndex={isIndex} />
				<Menu menu={menu} />
				<Contacts contacts={author.contacts} />
				<Copyright copyright={copyright} />
			</Inner>
		</SideBar>
	);
};

export default Sidebar;
