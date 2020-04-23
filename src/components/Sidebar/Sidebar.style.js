import styled from 'styled-components';
import {
	breakpointSm,
	breakpointMd,
	margin,
} from '../../assets/styled-components/mixins';

export const SideBar = styled.div`
	width: 100%;
	float: left;
	${breakpointSm`
     width: 41%
    `} ${breakpointMd`
    width: 31.41%;
    ${margin(0, 1, 0, 0)}
  `};
`;

export const Inner = styled.div`
	position: relative;
	padding: 25px 20px 0;
	${breakpointSm`
    padding: 30px 20px 0;
    &:after {
      background: ${(props) => props.theme.color.grayBorder};
      background: linear-gradient(
        to bottom,
        ${(props) => props.theme.color.grayBorder} 0%,
        ${(props) => props.theme.color.grayBorder} 48%,
        ${(props) => props.theme.color.white} 100%);
      position: absolute;
      content: '';
      width: 1px;
      height: 540px;
      top: 30px;
      right: -10px;
      bottom: 0;
    }
  `}
	${breakpointMd`
    padding: 40px;
  `}
`;
