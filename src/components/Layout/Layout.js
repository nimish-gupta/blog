// @flow strict
import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';
import type { Node as ReactNode } from 'react';

import { useSiteMetadata } from '../../hooks';
import styles from './Layout.module.scss';
import ThemeProvider from './ThemeProvider';
import GlobalStyle from './GlobalStyle';

type Props = {
	children: ReactNode,
	title: string,
	description?: string,
	socialImage?: string,
};

const Layout = ({ children, title, description, socialImage }: Props) => {
	const { author, url } = useSiteMetadata();
	const metaImage = socialImage != null ? socialImage : author.photo;
	const metaImageUrl = url + withPrefix(metaImage);

	return (
		<ThemeProvider>
			<div className={styles.layout}>
				<Helmet>
					<html lang="en" />
					<title>{title}</title>
					<meta name="description" content={description} />
					<meta property="og:site_name" content={title} />
					<meta property="og:image" content={metaImageUrl} />
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:title" content={title} />
					<meta name="twitter:description" content={description} />
					<meta name="twitter:image" content={metaImageUrl} />
				</Helmet>
				<GlobalStyle />
				{children}
			</div>
		</ThemeProvider>
	);
};

export default Layout;
