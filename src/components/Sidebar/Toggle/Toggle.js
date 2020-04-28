import React from 'react';
import styled from 'styled-components';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';

import { THEME } from '../../../constants';
import { useThemeContext } from '../../../context/theme-context';
import { marginBottom } from '../../../assets/styled-components/mixins';

const ToggleContainer = styled.button`
	position: relative;
	display: flex;
	justify-content: space-between;
	background: ${(props) => props.theme.color.gray};
	width: 69px;
	height: 40px;
	border-radius: 30px;
	border: 2px solid ${(props) => props.theme.color.grayBg};
	font-size: 0.5rem;
	padding: 0.5rem;
	overflow: hidden;
	cursor: pointer;
	${marginBottom(1)};

	svg {
		width: 2.5rem;
		height: auto;
		transition: all 0.3s linear;

		&:first-child {
			transform: ${(props) =>
				`${props.isLightTheme ? 'translateY(0)' : 'translateY(100px)'}`};
		}

		&:nth-child(2) {
			transform: ${(props) =>
				`${props.isLightTheme ? 'translateY(-100px)' : 'translateY(0)'}`};
		}
	}
`;

const Toggle = () => {
	const { theme, toggleTheme } = useThemeContext();
	return (
		<ToggleContainer isLightTheme={theme === THEME.Light} onClick={toggleTheme}>
			<IoMdMoon />
			<IoMdSunny />
		</ToggleContainer>
	);
};
export default Toggle;
