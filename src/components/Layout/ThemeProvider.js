import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../../assets/styled-components/_variables';

const Component = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Component;
