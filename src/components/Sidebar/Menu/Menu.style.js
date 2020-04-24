import styled from 'styled-components';
import { Link } from 'gatsby';

import { marginBottom } from '../../../assets/styled-components/mixins';

export const Menu = styled.nav`
	${marginBottom(1)};
`;

export const List = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const Item = styled.li`
	padding: 0;
	margin: 10px 0;
`;

const ItemNav = (comp) => (comp === 'a' ? styled.a : styled(comp))`
  font-size: ${(props) => props.theme.typographic.baseFontSize};
  color: ${(props) => props.theme.typographic.baseFontColor};
  font-weight: normal;
  border: 0;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.color.primary};
    border-bottom: 1px solid ${(props) => props.theme.color.primary};
  }
  &.${(props) => props.activeClassName} {
    color: ${(props) => props.theme.color.base};
    border-bottom: 1px solid ${(props) => props.theme.color.base};
  }
`;

export const ItemAnchor = ItemNav('a');

export const ItemLink = ItemNav(Link);
