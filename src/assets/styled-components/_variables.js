import { lighten, math } from 'polished';
import { THEME } from '../../constants';

const typoGraphicRootFrontSize = 100;
const typeGraphicBaseLineHeight = 1.625;
const layoutPostSingleWidth = '945px';

const darkColorBase = 'rgb(191, 191, 191)';

const darkColors = {
	base: darkColorBase,
	background: 'rgb(31, 31, 31)',
	secondary: 'rgb(230, 193, 153)',
	grayBg: 'rgb(46, 46, 46)',
	primary: 'rgb(153, 179, 230)',
	gray: darkColorBase,
	copyrightColor: darkColorBase,
};

const lightColorBase = '#222';
const lightColorGray = lighten(0.4, lightColorBase);

const lightColors = {
	base: lightColorBase,
	background: '#ffffff',
	secondary: '#F7A046',
	gray: lightColorGray,
	grayBg: lighten(0.79, lightColorBase),
	copyrightColor: lighten(0.18, lightColorGray),
	primary: '#5D93FF',
};

const getTheme = (type = THEME.Light) => {
	const theme = type === THEME.Light ? lightColors : darkColors;
	const color = {
		base: theme.base,
		primary: theme.primary,
		secondary: theme.secondary,
		background: theme.background,
		gray: theme.gray,
		grayBg: theme.grayBg,
		lineBorder: theme.background,
		copyrightColor: theme.copyrightColor,
		grayBorder: lighten(0.77, theme.base),
	};

	const typographic = {
		fontFamily:
			'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
		rootFontSize: typoGraphicRootFrontSize,
		baseFontSize: '16px',
		smallFontSize: '14px',
		baseLineHeight: typeGraphicBaseLineHeight,
		baseFontColor: color.base,
		linkPFontColor: color.primary,
		linkSFontColor: color.secondary,
		leading: Math.round(
			16 * (typoGraphicRootFrontSize / 100) * typeGraphicBaseLineHeight
		),
	};

	const button = {
		height: '35px',
		borderRadius: '20px',
	};

	const layout = {
		postSingleWidth: layoutPostSingleWidth,
		postWidth: math(`${layoutPostSingleWidth} - 305px`),
		width: '1070px',
		breakPointSm: '685px',
		breakPointMd: '960px',
		breakPointLg: '1100px',
	};
	return {
		color,
		typographic,
		button,
		layout,
	};
};

export default getTheme;
