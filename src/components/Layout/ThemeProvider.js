import React from 'react';
import { ThemeProvider } from 'styled-components';

import getTheme from '../../assets/styled-components/_variables';

const Component = ({ children }) => (
	<ThemeProvider theme={getTheme('dark')}>{children}</ThemeProvider>
);

export default Component;
