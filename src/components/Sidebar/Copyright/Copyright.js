import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

type Props = {
	copyright: string,
};

const StyledDiv = styled.div`
	color: ${(props) => lighten(0.18, props.theme.color.gray)};
	font-size: ${(props) => props.theme.typographic.smallFontSize};
`;

const Copyright = ({ copyright }: Props) => <StyledDiv>{copyright}</StyledDiv>;

export default Copyright;
