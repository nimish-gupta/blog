// @flow strict
import React from 'react';
import renderWithTheme from '../../../utils/renderWithTheme';
import Menu from './Menu';

describe('Menu', () => {
	const props = {
		menu: [
			{
				label: 'Item 0',
				path: '/#0/',
			},
			{
				label: 'Item 1',
				path: '/#1/',
			},
		],
	};

	it('renders correctly', () => {
		const tree = renderWithTheme(<Menu {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
