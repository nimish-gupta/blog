// @flow strict
import React from 'react';
import moment from 'moment';
import { upperFirst } from 'lodash';
import type { Edges } from '../../types';
import * as Styled from './Feed.style';

type Props = {
	edges: Edges,
};

const Feed = ({ edges }: Props) => (
	<div>
		{edges.map((edge) => (
			<Styled.Item key={edge.node.fields.slug}>
				<div>
					<Styled.Time
						dateTime={moment(edge.node.frontmatter.date).format(
							'MMMM D, YYYY'
						)}>
						{moment(edge.node.frontmatter.date).format('MMMM YYYY')}
					</Styled.Time>
					<Styled.Divider />
					<span>
						<Styled.CategoryLink to={edge.node.fields.categorySlug}>
							{edge.node.frontmatter.category}
						</Styled.CategoryLink>
					</span>
				</div>
				<Styled.Title>
					<Styled.TitleLink to={edge.node.fields.slug}>
						{edge.node.frontmatter.title}
					</Styled.TitleLink>
				</Styled.Title>
				<Styled.Description>
					{edge.node.frontmatter.description}
				</Styled.Description>
				<Styled.ReadMore to={edge.node.fields.slug}>
					{edge.node.fields.readingTime.text
						.split(' ')
						.map(upperFirst)
						.join(' ')}
				</Styled.ReadMore>
			</Styled.Item>
		))}
	</div>
);

export default Feed;
