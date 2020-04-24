// @flow strict
import React from 'react';
import renderWithTheme from '../../../utils/renderWithTheme';
import Content from './Content';

describe('Content', () => {
	it('renders correctly', () => {
		const props = {
			title: 'test',
			body: '<p>test</p>',
		};

		const tree = renderWithTheme(<Content {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
