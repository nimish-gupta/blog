import styled from 'styled-components';

import { breakpointSm } from '../../../assets/styled-components/mixins';

export const Author = styled.div`
	border-top: 1px solid ${(props) => props.theme.color.grayBorder};
	max-width: ${(props) => props.theme.layout.postWidth};
	padding-top: 20px;
	@include line-height(1);
	@include margin-top(1);
	@include margin-bottom(2);
	${breakpointSm`
    margin-left: auto;
    margin-right: auto;
  `}
`;

export const Twitter = styled.a`
	display: block;
	text-decoration: underline;
`;
