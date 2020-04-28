import React from 'react';
import renderer from 'react-test-renderer';

import ThemeProvider from '../components/Layout/ThemeProvider';

export default function renderWithTheme(component) {
	return renderer.create(
		<ThemeProvider forceMount={true}>{component}</ThemeProvider>
	);
}
