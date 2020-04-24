// @flow strict
import React from 'react';
import renderWithTheme from '../../../utils/renderWithTheme';
import Author from './Author';

describe('Author', () => {
	const props = {
		author: {
			name: 'test',
			photo: '/photo.jpeg',
			bio: 'test',
		},
		isIndex: false,
	};

	it('renders correctly', () => {
		const tree = renderWithTheme(<Author {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
