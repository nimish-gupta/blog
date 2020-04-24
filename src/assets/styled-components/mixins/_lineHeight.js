const lineHeight = (number) => (props) => `
  line-height: ${number * props.theme.typographic.leading}px;
`;

export default lineHeight;
