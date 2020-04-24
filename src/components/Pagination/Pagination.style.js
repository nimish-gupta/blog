import styled from 'styled-components';
import { lighten } from 'polished';
import { Link } from 'gatsby';

import { marginTop } from '../../assets/styled-components/mixins';

export const Pagination = styled.div`
	${marginTop(2)};
	display: flex;
`;

export const LinkContainer = styled.div`
	width: 50%;
	text-align: ${(props) => props.align};
`;

export const NavLink = styled(Link)`
	color: ${(props) => props.theme.color.secondary};
	font-size: 26px;
	font-weight: bold;

	&:hover,
	&:focus {
		color: ${(props) => props.theme.color.primary};
	}
`;

export const DisabledNavLink = styled(NavLink)`
	pointer-events: none;
	color: ${(props) => lighten(0.2, props.theme.color.gray)};
`;
