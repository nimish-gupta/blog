// @flow strict
import React from 'react';
import styled from 'styled-components';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';

import { THEME } from '../../../constants';
import { useThemeContext } from '../../../context/theme-context';
import {
	marginBottom,
	marginTop,
} from '../../../assets/styled-components/mixins';

const ToggleContainer = styled.button`
	display: flex;
	justify-content: space-between;
	width: 69px;
	padding: 0.5rem;
	overflow: hidden;
	cursor: pointer;
	${marginBottom(1)};
	${marginTop(1)};
	font-size: ${(props) => props.theme.typographic.baseFontSize};
	border-radius: ${(props) => props.theme.button.borderRadius};
	background: ${(props) => props.theme.color.background};
	height: ${(props) => props.theme.button.height};
	border: 1px solid ${(props) => props.theme.color.grayBorder};
	color: ${(props) => props.theme.color.base};

	svg {
		width: 2.5rem;
		height: auto;
		transition: all 0.3s linear;

		&:nth-child(2) {
			transform: ${(props) =>
				`${props.isLightTheme ? 'translateY(0)' : 'translateY(100px)'}`};
		}

		&:first-child {
			transform: ${(props) =>
				`${props.isLightTheme ? 'translateY(-100px)' : 'translateY(0)'}`};
		}
	}
`;

type Props = {
	className?: string,
};

const Toggle = (props: Props) => {
	const { theme, toggleTheme } = useThemeContext();
	return (
		<ToggleContainer
			className={props.className}
			isLightTheme={theme === THEME.Light}
			onClick={toggleTheme}>
			<IoMdMoon />
			<IoMdSunny />
		</ToggleContainer>
	);
};
export default Toggle;
