// @flow strict
import React from 'react';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import * as Styled from './Post.style';
import type { Node } from '../../types';

type Props = {
	post: Node,
};

const Post = ({ post }: Props) => {
	const { html } = post;
	const { tagSlugs, slug } = post.fields;
	const { tags, title, date } = post.frontmatter;

	return (
		<div>
			<Styled.HomeButton to="/">All Articles</Styled.HomeButton>

			<div>
				<Content body={html} title={title} />
			</div>

			<Styled.Footer>
				<Meta date={date} />
				{tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
				<Author />
			</Styled.Footer>

			<Styled.Comment>
				<Comments postSlug={slug} postTitle={post.frontmatter.title} />
			</Styled.Comment>
		</div>
	);
};

export default Post;
