import styled from 'styled-components';
import { Link } from 'gatsby';

import { breakpointMd, marginTop } from '../../assets/styled-components/mixins';
import Toggle from '../Sidebar/Toggle';

export const Footer = styled.div`
	max-width: ${(props) => props.theme.layout.postWidth};
	margin: 0 auto;
	padding: 0 15px;
	${breakpointMd`
		padding: 0;
	`}
`;

export const Comment = styled.div`
	max-width: ${(props) => props.theme.layout.postWidth};
	margin: 0 auto;
	padding: 0 15px;
	${breakpointMd`
		padding: 0;
	`}
`;

export const HomeButton = styled(Link)`
	display: block;
	max-width: 90px;
	height: ${(props) => props.theme.button.height};
	padding: 0 24px;
	line-height: ${(props) => props.theme.button.height};
	text-align: center;
	color: ${(props) => props.theme.color.base};
	border: 1px solid ${(props) => props.theme.color.grayBorder};
	border-radius: ${(props) => props.theme.button.borderRadius};
	font-size: ${(props) => props.theme.typographic.baseFontSize};
	font-weight: normal;
	margin-left: auto;
	margin-right: auto;
	${marginTop(1)};

	&:hover,
	&:focus {
		color: ${(props) => props.theme.color.primary};
	}
	${breakpointMd`
		position: fixed;
      max-width: auto;
      margin: 0;
      top: 30px;
      left: 30px
	`}
`;

export const Switch = styled(Toggle)`
	margin-left: auto;
	margin-right: auto;
	${breakpointMd`
		position: fixed;
		margin: 0;
		top: 82px;
		left: 30px;
	`};
`;
