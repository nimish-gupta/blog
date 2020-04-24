// @flow strict
import React from 'react';

import Page from './Page';
import renderWithTheme from '../../utils/renderWithTheme';

describe('Page', () => {
	const props = {
		children: 'test',
		title: 'test',
	};

	it('renders correctly', () => {
		const tree = renderWithTheme(<Page {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
