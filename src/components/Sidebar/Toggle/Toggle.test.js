// @flow strict
import React from 'react';
import renderWithTheme from '../../../utils/renderWithTheme';
import Toggle from './Toggle';

describe('Toggle', () => {
	it('renders correctly', () => {
		const tree = renderWithTheme(<Toggle />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
