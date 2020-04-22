export const padding = (top, right, bottom = null, left = null) => {
	if (left === null && bottom === null) {
		return (props) => `
        padding: ${top * props.theme.typographic.leading}px ${right *
			props.theme.typographic.leading}px;
      `;
	}
	if (left === null || left === right) {
		return (props) => `
        padding: ${top * props.theme.typographic.leading}px ${right *
			props.theme.typographic.leading}px ${bottom *
			props.theme.typographic.leading}px;
       
       `;
	}
	return (props) => `
      padding: ${top * props.theme.typographic.leading}px ${right *
		props.theme.typographic.leading}px ${bottom *
		props.theme.typographic.leading}px ${left *
		props.theme.typographic.leading}px;
    `;
};

export const paddingEqual = (number) => (props) => `
   padding: ${number * props.theme.typographic.leading}px;
`;
