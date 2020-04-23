import styled from 'styled-components';
import { Link } from 'gatsby';

import { marginBottom } from '../../../assets/styled-components/mixins';

export const Tags = styled.div`
	${marginBottom(0.5)}
`;

export const List = styled.ul`
	list-style: none;
	margin: 0 -10px;
	padding: 0;
`;
export const Item = styled.li`
	display: inline-block;
	margin: 10px 5px;
`;

export const ItemLink = styled(Link)`
	display: inline-block;
	height: ${(props) => props.theme.button.height};
	padding: 0 24px;
	line-height: ${(props) => props.theme.button.height};
	border: 1px solid ${(props) => props.theme.color.grayBorder};
	text-decoration: none;
	border-radius: ${(props) => props.theme.button.borderRadius};
	color: ${(props) => props.theme.color.base};

	&:hover,
	&:focus {
		color: ${(props) => props.theme.color.primary};
	}
`;
