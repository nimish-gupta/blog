import React from 'react';
import styled from 'styled-components';

type Props = {
	copyright: string,
};

const StyledDiv = styled.div`
	color: ${(props) => props.theme.color.copyrightColor};
	font-size: ${(props) => props.theme.typographic.smallFontSize};
`;

const Copyright = ({ copyright }: Props) => <StyledDiv>{copyright}</StyledDiv>;

export default Copyright;
