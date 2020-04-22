import { css } from 'styled-components';

export const breakpointXs = (...args) => css`
	${css(...args)}
`;

export const breakpointSm = (...args) => css`
	@media screen and (min-width: ${(props) => props.theme.layout.breakPointSm}) {
		${css(...args)}
	}
`;

export const breakpointMd = (...args) => css`
	@media screen and (min-width: ${(props) => props.theme.layout.breakPointMd}) {
		${css(...args)}
	}
`;

export const breakpointLg = (...args) => css`
	@media screen and (min-width: ${(props) => props.theme.layout.breakPointLg}) {
		${css(...args)}
	}
`;
