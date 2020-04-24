// @flow strict
import React from 'react';
import renderWithTheme from '../../../utils/renderWithTheme';
import Copyright from './Copyright';

describe('Copyright', () => {
	it('renders correctly', () => {
		const props = {
			copyright: 'copyright',
		};

		const tree = renderWithTheme(<Copyright {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
