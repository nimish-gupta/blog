// @flow strict
import React from 'react';

import { PAGINATION } from '../../constants';
import * as Styled from './Pagination.style';

type Props = {
	prevPagePath: string,
	nextPagePath: string,
	hasNextPage: boolean,
	hasPrevPage: boolean,
};

const Pagination = ({
	prevPagePath,
	nextPagePath,
	hasNextPage,
	hasPrevPage,
}: Props) => {
	const NextLink = hasNextPage ? Styled.NavLink : Styled.DisabledNavLink;
	const PrevLink = hasPrevPage ? Styled.NavLink : Styled.DisabledNavLink;

	return (
		<Styled.Pagination>
			<Styled.LinkContainer align="left">
				<PrevLink rel="prev" to={hasPrevPage ? prevPagePath : '/'}>
					{PAGINATION.PREV_PAGE}
				</PrevLink>
			</Styled.LinkContainer>
			<Styled.LinkContainer align="right">
				<NextLink rel="next" to={hasNextPage ? nextPagePath : '/'}>
					{PAGINATION.NEXT_PAGE}
				</NextLink>
			</Styled.LinkContainer>
		</Styled.Pagination>
	);
};

export default Pagination;
