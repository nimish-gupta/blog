import styled from 'styled-components';

import {
	breakpointSm,
	lineHeight,
	marginTop,
	marginBottom,
} from '../../../assets/styled-components/mixins';

export const Author = styled.div`
	border-top: 1px solid ${(props) => props.theme.color.grayBorder};
	max-width: ${(props) => props.theme.layout.postWidth};
	padding-top: 20px;
	${lineHeight(1)}
	${marginTop(1)}
	${marginBottom(1)}
	${breakpointSm`
    margin-left: auto;
    margin-right: auto;
  `}
`;

export const Twitter = styled.a`
	display: block;
	text-decoration: underline;
`;
