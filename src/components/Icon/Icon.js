// @flow strict
import React from 'react';
import StyledIcon from './Icon.style';

type Props = {
	name: string,
	icon: {
		viewBox?: string,
		path?: string,
	},
};

const Icon = ({ name, icon }: Props) => (
	<StyledIcon viewBox={icon.viewBox}>
		<title>{name}</title>
		<path d={icon.path} />
	</StyledIcon>
);

export default Icon;
