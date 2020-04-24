// @flow strict
import React from 'react';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import * as Styled from './Sidebar.style';
import { useSiteMetadata } from '../../hooks';

type Props = {
	isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
	const { author, copyright, menu } = useSiteMetadata();

	return (
		<Styled.SideBar>
			<Styled.Inner>
				<Author author={author} isIndex={isIndex} />
				<Menu menu={menu} />
				<Contacts contacts={author.contacts} />
				<Copyright copyright={copyright} />
			</Styled.Inner>
		</Styled.SideBar>
	);
};

export default Sidebar;
