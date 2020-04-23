// @flow strict
import React from 'react';

import { getContactHref } from '../../../utils';
import * as Styled from './Author.style';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
	const { author } = useSiteMetadata();

	return (
		<Styled.Author>
			<p>
				{author.bio}
				<Styled.Twitter
					href={getContactHref('twitter', author.contacts.twitter)}
					rel="noopener noreferrer"
					target="_blank">
					<strong>{author.name}</strong> on Twitter
				</Styled.Twitter>
			</p>
		</Styled.Author>
	);
};

export default Author;
