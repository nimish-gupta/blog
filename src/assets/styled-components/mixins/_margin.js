export const marginTop = (number) => (props) => `
  margin-top: ${number * props.theme.typographic.leading}px;
`;

export const marginBottom = (number) => (props) => `
  margin-bottom: ${number * props.theme.typographic.leading}px;
`;

export const margin = (top, right, bottom = null, left = null) => {
	if (left === null && bottom === null) {
		return (props) => `
      margin: ${top * props.theme.typographic.leading}px ${right *
			props.theme.typographic.leading}px
    `;
	}
	if (left === null || left === right) {
		return (props) => `
      margin: ${top * props.theme.typographic.leading}px ${right *
			props.theme.typographic.leading}px ${bottom *
			props.theme.typographic.leading}px
    `;
	}
	return (props) => `
    margin: ${top * props.theme.typographic.leading}px ${right *
		props.theme.typographic.leading}px ${bottom *
		props.theme.typographic.leading}px ${left *
		props.theme.typographic.leading}px;
  `;
};
