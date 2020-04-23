import React, { useRef, useEffect } from 'react';
import * as Styled from './Page.style';

type Props = {
	title?: string,
	children: React.Node,
};

const Page = ({ title, children }: Props) => {
	const pageRef = useRef();

	useEffect(() => {
		pageRef.current.scrollIntoView();
	});

	return (
		<Styled.Page ref={pageRef}>
			<Styled.Inner>
				{title && <Styled.Title>{title}</Styled.Title>}
				<Styled.Body>{children}</Styled.Body>
			</Styled.Inner>
		</Styled.Page>
	);
};

export default Page;
