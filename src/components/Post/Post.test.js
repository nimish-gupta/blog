// @flow strict
import React from 'react';
import { useStaticQuery, StaticQuery } from 'gatsby';
import renderWithTheme from '../../utils/renderWithTheme';
import Post from './Post';
import siteMetadata from '../../../jest/__fixtures__/site-metadata';
import type { RenderCallback } from '../../types';

describe('Post', () => {
	beforeEach(() => {
		StaticQuery.mockImplementationOnce(
			({ render }: RenderCallback) => render(siteMetadata),
			useStaticQuery.mockReturnValue(siteMetadata)
		);
	});

	const props = {
		post: {
			id: 'test-123',
			html: '<p>test</p>',
			fields: {
				slug: '/test',
				categorySlug: '/test-category',
				tagSlugs: ['/test_0', '/test_1'],
				readingTime: {
					text: '1 min read',
				},
			},
			frontmatter: {
				date: '2016-09-01',
				tags: ['test_0', 'test_1'],
				title: 'test',
			},
		},
	};

	it('renders correctly', () => {
		const tree = renderWithTheme(<Post {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
