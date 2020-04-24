// @flow strict
import React from 'react';

import Pagination from './Pagination';
import renderWithTheme from '../../utils/renderWithTheme';

describe('Pagination', () => {
	const props = {
		prevPagePath: '/page/1',
		nextPagePath: '/page/3',
		hasNextPage: true,
		hasPrevPage: true,
	};

	it('renders correctly', () => {
		const tree = renderWithTheme(<Pagination {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
