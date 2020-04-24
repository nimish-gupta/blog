// @flow strict
import React from 'react';

import Contacts from './Contacts';
import renderWithTheme from '../../../utils/renderWithTheme';

describe('Contacts', () => {
	const props = {
		contacts: {
			email: '#',
			twitter: '#',
			vkontakte: '#',
			github: '#',
			rss: '#',
			telegram: '#',
		},
	};

	it('renders correctly', () => {
		const tree = renderWithTheme(<Contacts {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
