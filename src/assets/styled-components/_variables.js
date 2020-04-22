import { lighten } from 'polished';

const colorBase = '#222';
const typoGraphicRootFrontSize = 100;
const typeGraphicBaseLineHeight = 1.625;
const layoutPostSingleWidth = '945px';

const color = {
	base: colorBase,
	primary: '#5D93FF',
	secondary: '#F7A046',
	white: '#FFF',
	gray: lighten(0.4, colorBase),
	grayBorder: lighten(0.77, colorBase),
	grayBg: lighten(0.79, colorBase),
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
	postWidth: layoutPostSingleWidth - '305px',
	width: '1070px',
	breakPointSm: '685px',
	breakPointMd: '960px',
	breakPointLg: '1100px',
};

const theme = {
	color,
	typographic,
	button,
	layout,
};

export default theme;
