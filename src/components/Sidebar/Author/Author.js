// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import * as Styled from './Author.style';

type Props = {
	author: {
		name: string,
		bio: string,
		photo: string,
	},
	isIndex: ?boolean,
};

const Author = ({ author, isIndex }: Props) => (
	<div>
		<Link to="/">
			<Styled.Photo
				src={withPrefix(author.photo)}
				width="75"
				height="75"
				alt={author.name}
			/>
		</Link>

		{isIndex === true ? (
			<Styled.TitleH1>
				<Styled.TitleLink to="/">{author.name}</Styled.TitleLink>
			</Styled.TitleH1>
		) : (
			<Styled.TitleH2>
				<Styled.TitleLink to="/">{author.name}</Styled.TitleLink>
			</Styled.TitleH2>
		)}
		<Styled.Subtitle>{author.bio}</Styled.Subtitle>
	</div>
);

export default Author;
