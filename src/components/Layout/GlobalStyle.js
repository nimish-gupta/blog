/* eslint-disable prefer-template */
import { createGlobalStyle } from 'styled-components';
import { math } from 'polished';

import {
	lineHeight,
	marginTop,
	marginBottom,
	padding,
	breakpointSm,
} from '../../assets/styled-components/mixins';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${(props) => props.theme.typographic.rootFontSize};
    color: ${(props) => props.theme.color.base};
    background: ${(props) => props.theme.color.background};
    
  }

  body {
    margin: 0 0 0 calc(100vw - 100%);
    font-family: ${(props) => props.theme.typographic.fontFamily};
    color: ${(props) => props.theme.typographic.baseFontColor};
    line-height: ${(props) => props.theme.typographic.baseLineHeight};
    font-size: ${(props) => props.theme.typographic.fontSize};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${(props) => props.theme.typographic.fontFamily};
    font-weight: 600;
  }

  h1 {
    font-size: ${(props) =>
			math(props.theme.typographic.baseFontSize + '* 2.5')};
    ${lineHeight(2)};
    ${marginTop(4)};
    ${marginBottom(1)};
  }

  h2 {
    font-size: ${(props) =>
			math(props.theme.typographic.baseFontSize + '* 1.6875')} ;
    ${lineHeight(1.5)};
    ${marginTop(2)};
    ${marginBottom(0.5)};
  }

  h3 {
    font-size: ${(props) =>
			math(props.theme.typographic.baseFontSize + '* 1.375')} ;
    ${lineHeight(1)};
    ${marginTop(2)};
    ${marginBottom(0.5)};
  }

  h4 {
    font-size: ${(props) =>
			math(props.theme.typographic.baseFontSize + '* 1.2')} ;
    ${lineHeight(1)};
    ${marginTop(1.5)};
    ${marginBottom(0.5)};
  }

  h5 {
    font-size: ${(props) => props.theme.typographic.baseFontSize};
    ${lineHeight(1)};
    ${marginTop(2.5)};
    ${marginBottom(0.5)};
  }

  h6 {
    font-size: ${(props) => props.theme.typographic.baseFontSize};
    ${lineHeight(1)};
    ${marginTop(2.5)};
    ${marginBottom(0.5)};
  }

  img {
    border: 0;
    max-width: 100%;
    display: block;
    margin: inherit auto;
  }

  hr {
    margin-top: 52px;
    margin-bottom: 52px;
    border: 0;
    color: ${(props) => props.theme.color.base};
    display: block;
    height: 26px;
    margin-right: auto;
    margin-left: auto;
    background-size: 100% 26px;
    background-image: linear-gradient(to bottom, transparent 1px, transparent 11px, ${(
			props
		) => props.theme.color.base} 11px, ${(props) =>
	props.theme.color.base} 15px, transparent 15px, transparent 26px);
    width: 100px;
  }

  a {
    color: ${(props) => props.theme.typographic.linkPFontColor};
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      color: ${(props) => props.theme.typographic.linkSFontColor};
    }

  }

  b,
  strong {
    font-weight: 600;
  }

  ul {
    list-style: square;
    ${marginBottom(1)};

    & li {
      padding: 0 5px;
      margin-bottom: 10px;
    }

  }

  p {
    ${lineHeight(1)};
    ${marginBottom(1)};
  }

  blockquote {
    padding: 0;
    font-style: italic;
    text-align: center;
  }

  figure {
    display: block;
    width: 100%;
    height: auto;
  }

  figcaption {
    ${lineHeight(0.75)};
    ${marginTop(0.25)};
    color: ${(props) => props.theme.color.base};
    font-size: ${(props) => props.theme.typographic.fontSize};
    font-style: italic;
    margin-bottom: 0;
    text-align: center;
  }

  .anchor {
    margin-left: -30px !important;
    padding-right: 14px !important;
  }

  ${breakpointSm`
    figure.float-left,
    figure.float-right {
      max-width: 310px;
      ${padding(0, 1, 0, 1)};
    }

    .float-right {
      float: right;
    }

    .float-left {
      float: left;
    }
  `}

`;

export default GlobalStyle;
