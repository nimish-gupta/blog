// @flow strict
import React from 'react';
import * as Styled from './Content.style';

type Props = {
	body: string,
	title: string,
};

const Content = ({ body, title }: Props) => (
	<Styled.Content>
		<Styled.Title>{title}</Styled.Title>
		<Styled.Body dangerouslySetInnerHTML={{ __html: body }} />
	</Styled.Content>
);

export default Content;
