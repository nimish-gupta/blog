import React from 'react';
import styled from 'styled-components';

import { THEME, ICONS } from '../../../constants';
import { useThemeContext } from '../../../context/theme-context';
import Icon from '../../Icon';

const ToggleContainer = styled.button`
	position: relative;
	display: flex;
	justify-content: space-between;
	background: ${(props) => props.theme.color.gray};
	width: 80px;
	height: 40px;
	border-radius: 30px;
	border: 2px solid ${(props) => props.theme.color.grayBg};
	font-size: 0.5rem;
	padding: 0.5rem;
	overflow: hidden;
	cursor: pointer;

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
			<Icon icon={ICONS.TWITTER} />
			<Icon icon={ICONS.RSS} />
		</ToggleContainer>
	);
};
export default Toggle;
