// @flow strict
import React from 'react';
import * as Styled from './Tags.style';

type Props = {
	tags: string[],
	tagSlugs: string[],
};

const Tags = ({ tags, tagSlugs }: Props) => (
	<Styled.Tags>
		<Styled.List>
			{tagSlugs &&
				tagSlugs.map((slug, i) => (
					<Styled.Item key={tags[i]}>
						<Styled.ItemLink to={slug}>{tags[i]}</Styled.ItemLink>
					</Styled.Item>
				))}
		</Styled.List>
	</Styled.Tags>
);

export default Tags;
