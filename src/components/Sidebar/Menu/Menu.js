// @flow strict
import React from 'react';

import * as Styled from './Menu.style';

type Props = {
	menu: {
		label: string,
		path?: string,
		href?: string,
	}[],
};

const Menu = ({ menu }: Props) => (
	<Styled.Menu>
		<Styled.List>
			{menu.map((item) => (
				<Styled.Item key={item.path}>
					{item.path !== undefined && item.path !== null ? (
						<Styled.ItemLink to={item.path} activeClassName={'active'}>
							{item.label}
						</Styled.ItemLink>
					) : (
						<Styled.ItemAnchor
							target="_blank"
							rel="noreferer noopener"
							href={item.href || ''}>
							{item.label}
						</Styled.ItemAnchor>
					)}
				</Styled.Item>
			))}
		</Styled.List>
	</Styled.Menu>
);

export default Menu;
