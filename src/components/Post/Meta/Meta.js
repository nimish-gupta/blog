// @flow strict
import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

type Props = {
	date: string,
};

const Date = styled.p`
	font-style: italic;
`;

const Meta = ({ date }: Props) => (
	<div>
		<Date>Published {moment(date).format('D MMM YYYY')}</Date>
	</div>
);

export default Meta;
