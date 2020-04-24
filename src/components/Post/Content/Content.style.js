/* eslint-disable prefer-template */
import styled from 'styled-components';
import { math } from 'polished';

import {
	lineHeight,
	marginTop,
	marginBottom,
	padding,
	breakpointMd,
} from '../../../assets/styled-components/mixins';

export const Content = styled.div`
	max-width: ${(props) => props.theme.layout.postSingleWidth};
	padding: 0 15px;
	margin: 0 auto;
	${breakpointMd`
    padding: 0;
  `}
`;

export const Title = styled.h1`
	font-size: ${(props) => math(props.theme.typographic.baseFontSize + ' * 2')};
	max-width: ${(props) => props.theme.layout.postWidth};
	margin-left: auto;
	margin-right: auto;
	font-weight: 600;
	text-align: center;
	${lineHeight(1.65)};
	${marginTop(1)};
	${marginBottom(0)};
	${breakpointMd`
    font-size: ${(props) =>
			math(props.theme.typographic.baseFontSize + ' * 3')};
    ${lineHeight(2.25)};
    ${marginTop(2.25)};
    ${marginBottom(1.5)});
  `}
`;

export const Body = styled.div`
	& figure {
		${marginBottom(1)};

		& blockquote {
			font-style: italic;
			text-align: center;
			margin-top: 0;
			${padding(1, 0)};

			& p {
				max-width: ${(props) => props.theme.layout.postWidth};
				font-size: ${(props) =>
					math(props.theme.typographic.baseFontSize + ' * 1.6817')};
				margin-top: 0;
				${marginBottom(1)};
				${lineHeight(1.5)}
			}
		}
	}

	& a {
		text-decoration: underline;
	}

	& * {
		max-width: ${(props) => props.theme.layout.postWidth};
		margin-left: auto;
		margin-right: auto;
	}

	& img {
		max-width: 100%;
	}
	${breakpointMd`
      font-size: ${(props) =>
				math(props.theme.typographic.baseFontSize + ' * 1.125')};
      ${lineHeight(1.125)};
      ${marginBottom(1.125)};

      & p {
        font-size: ${(props) =>
					math(props.theme.typographic.baseFontSize + ' * 1.125')};
        ${lineHeight(1.125)};
        ${marginBottom(1.125)};
      }
    `}
`;
