/* eslint-disable prefer-template */
import styled from 'styled-components';
import { math } from 'polished';

import {
	breakpointSm,
	breakpointMd,
	lineHeight,
	marginTop,
	marginBottom,
	margin,
} from '../../assets/styled-components/mixins';

export const Page = styled.div`
	${marginBottom(2)};
	${breakpointSm`
    float:right;
    width: 59%;
  `};
	${breakpointMd`
    float:right;
    width: 65.59%;
  `};
`;

export const Inner = styled.div`
	padding: 25px 20px;
	${breakpointSm`
    padding: 30px 20px;
  `};
	${breakpointMd`
    padding: 40px 35px;
  `};
`;

export const Title = styled.h1`
	font-size: ${(props) => math(props.theme.typographic.baseFontSize + '2.5')};
	font-weight: 600;
	${lineHeight(2)};
	${marginTop(0)};
	${marginBottom(1.45)};
`;

export const Body = styled.div`
	font-size: ${(props) => props.theme.typographic.baseFontSize};
	${lineHeight(1)};
	${margin(0, 0, 1)};
`;
