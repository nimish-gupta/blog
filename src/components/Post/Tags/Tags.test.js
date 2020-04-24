// @flow strict
import React from 'react';
import renderWithTheme from '../../../utils/renderWithTheme';
import Tags from './Tags';

describe('Tags', () => {
	it('renders correctly', () => {
		const props = {
			tags: ['test_0', 'test_1'],
			tagSlugs: ['/test_0', '/test_1'],
		};

		const tree = renderWithTheme(<Tags {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
