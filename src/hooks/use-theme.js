import { useEffect, useState } from 'react';

import { THEME } from '../constants';

const systemDarkMode = () =>
	window.matchMedia &&
	window.matchMedia('(prefers-color-scheme: dark)').matches;

const isValidTheme = (type) => type === THEME.Dark || type === THEME.Light;

const storeThemeInLocalStorage = (type) =>
	window.localStorage.setItem('theme', type);

const useTheme = () => {
	const [theme, setTheme] = useState(THEME.Light);
	const [componentMounted, setComponentMounted] = useState(false);

	const toggleTheme = () => {
		const newTheme = theme === THEME.Light ? THEME.Dark : THEME.Light;
		setTheme(newTheme);
		storeThemeInLocalStorage(newTheme);
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme');

		if (typeof localTheme === 'string' && isValidTheme(localTheme)) {
			setTheme(localTheme);
		} else if (systemDarkMode()) {
			setTheme(THEME.Dark);
		} else {
			setTheme(THEME.Light);
		}

		setComponentMounted(true);
	}, []);

	return { theme, componentMounted, toggleTheme };
};

export default useTheme;
