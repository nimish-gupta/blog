import { createContext, useContext } from 'react';

import { THEME } from '../constants';

const data = {
	theme: THEME.Light,
	toggleTheme: () => {},
};

export const ThemeContext = createContext(data);

export const useThemeContext = () => useContext(ThemeContext);
