/* eslint-disable prefer-template */
import styled from 'styled-components';

import { marginBottom } from '../../../assets/styled-components/mixins';

export const Contacts = styled.div`
	${marginBottom(1)};
`;

export const List = styled.ul`
	display: flex;
	flex-flow: row wrap;
	flex-grow: 0;
	flex-shrink: 0;
	list-style: none;
	padding: 0;
	margin: 10px -3px;
	width: 140px;
`;

export const Item = styled.li`
	padding: 0;
	margin: 4px;
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: center;
	height: ${(props) => props.theme.button.height};
	width: ${(props) => props.theme.button.height};
	line-height: ${(props) => props.theme.button.height};
	border-radius: 50%;
	text-align: center;
	border: 1px solid ${(props) => props.theme.color.grayBg};
`;

export const ItemLink = styled.a`
	border: 0;
	display: flex;
	color: ${(props) => props.theme.color.base};

	&:hover,
	&:focus {
		color: ${(props) => props.theme.color.primary};
	}
`;
