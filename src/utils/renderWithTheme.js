import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import getTheme from '../assets/styled-components/_variables';

export default function renderWithTheme(component) {
	return renderer.create(
		<ThemeProvider theme={getTheme('light')}>{component}</ThemeProvider>
	);
}
