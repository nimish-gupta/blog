/* eslint-disable prefer-template */
import styled from 'styled-components';
import { Link } from 'gatsby';
import { math } from 'polished';

import {
	marginTop,
	marginBottom,
	lineHeight,
} from '../../assets/styled-components/mixins';

export const Item = styled.div`
	${marginBottom(1.25)};
	&:last-child {
		${marginBottom(0.5)};
	}
`;

export const Title = styled.h2`
	font-size: ${(props) =>
		math(props.theme.typographic.baseFontSize + '* 1.6875')};
	${lineHeight(1.5)};
	${marginTop(0)};
	${marginBottom(0.5)};
`;

export const TitleLink = styled(Link)`
	color: ${(props) => props.theme.color.base};

	&:hover,
	&:focus {
		color: ${(props) => props.theme.color.base};
		border-bottom: 1px solid ${(props) => props.theme.color.base};
	}
`;

export const Description = styled.div`
	font-size: ${(props) => props.theme.typographic.baseFontSize};
	${lineHeight(1)};
	${marginBottom(0.75)};
`;

export const ReadMore = styled(Link)`
	font-size: ${(props) => props.theme.typographic.baseFontSize};
	color: ${(props) => props.theme.color.primary};

	&:hover,
	&:focus {
		color: ${(props) => props.theme.color.primary};
		border-bottom: 1px solid ${(props) => props.theme.color.primary};
	}
`;

export const CategoryLink = styled(Link)`
	font-size: ${(props) => props.theme.typographic.smallFontSize};
	color: ${(props) => props.theme.color.secondary};
	font-weight: 600;
	text-transform: uppercase;

	&:hover,
	&:focus {
		color: ${(props) => props.theme.color.primary};
	}
`;

export const Divider = styled.span`
	margin: 0 5px;
`;

export const Time = styled.time`
	font-size: ${(props) => props.theme.typographic.smallFontSize};
	color: ${(props) => props.theme.color.base};
	font-weight: 600;
	text-transform: uppercase;
`;
