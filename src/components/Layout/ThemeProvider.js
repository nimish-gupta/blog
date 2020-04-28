import React from 'react';
import { ThemeProvider } from 'styled-components';

import useTheme from '../../hooks/use-theme';
import getTheme from '../../assets/styled-components/_variables';
import { ThemeContext } from '../../context/theme-context';

const Component = ({ children }) => {
	const { theme, componentMounted, toggleTheme } = useTheme();
	const isTest = process.env.NODE_ENV === 'test';

	if (!isTest && !componentMounted) {
		return <div />;
	}

	return (
		<ThemeContext.Provider
			value={{
				theme,
				toggleTheme,
			}}>
			<ThemeProvider theme={getTheme(theme)}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export default Component;
