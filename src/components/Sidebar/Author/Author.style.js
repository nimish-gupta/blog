/* eslint-disable prefer-template */
import styled from 'styled-components';
import { math } from 'polished';
import { Link } from 'gatsby';

import {
	margin,
	marginBottom,
	lineHeight,
} from '../../../assets/styled-components/mixins';

export const Photo = styled.img`
	display: inline-block;
	margin-bottom: 0;
	border-radius: 50%;
	background-clip: padding-box;
`;

const Title = (comp) => styled[comp]`
	font-size: ${(props) =>
		math(props.theme.typographic.baseFontSize + ' * 1.125')};
	font-weight: 600;
	${lineHeight(1.125)};
	${margin(0.5, 0, 0.5, 0)};
`;

export const TitleLink = styled(Link)`
	color: ${(props) => props.theme.color.base};

	&:hover,
	&:focus {
		color: ${(props) => props.theme.color.base};
	}
`;

export const TitleH2 = Title('h2');
export const TitleH1 = Title('h1');

export const Subtitle = styled.p`
	color: ${(props) => props.theme.color.gray};
	${lineHeight(1)};
	${marginBottom(1)};
`;
