---
template: post
title: A Journey To Styled Components
slug: journey-to-syled-components
draft: false
date: 2020-04-24T16:59:43.951Z
description: >-
  This one is about how to move from sass to styled-components. This one will
  contain some gotchas which I faced while going from SASS to Styled-components.
category:
  - Web
  - Gatsby
tags:
  - CSS
  - Styled-components
  - SCSS
---
Hello friends, hope you doing well during this pandemic :)

So this blog is about how I moved my entire [blog](https://github.com/nimish-gupta/blog) codebase from [SASS](https://sass-lang.com) to [Styled-Components](https://styled-components.com). 

![Github PR Screenshot](/media/screenshot-2020-04-24-22.38.42-copy.png "Github PR Screenshot")

This blog will consist of

* [What](#what)
* [Why](#why)
* [How](#how)

You can skip both what and why part if you want to know how to make the change.

## What

[`Styled-Components`](https://www.styled-components.com/) - This is CSS-in-JS kind of library which is getting more and more common among the front-end world. According to their documentation

> Utilizing tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!

This basically helps in creating [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/). It helps in creating atom level reusable components which helps in maintaining the consistency of our codebase/site.

[`SASS`](https://sass-lang.com/) - Sass (Syntactically Awesome StyleSheets) is an extension of CSS which adds tons of awesome features  such as variables, nested rules and mixins. According to its documentation

> Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.

Sass is a CSS preprocessor, which helps the developer to write code in one file(typically .scss file) and compiles them to CSS. Its goal is to easily maintain/share the CSS among different components of an app.

## Why

I was trying to add a toggle button which can help in changing the theme of my blog from black to white and vice-versa. I thought it would be pretty simple as it will require just changing the variables of the colors mention under the `variables.scss` file and then I can toggle it with the button and that's it. 

But it was not that simple because Sass is a CSS preprocessor language that’s compiled to CSS which means you can't do anything dynamic e.g if you want to add the theming then you have to create two separate styles for both of your colors and then you have to render separate file on the basis of your current color of your theme.

### Pre-requisite

Here I have assumed that you guys knew basics of `React`, `styled-components` and `SASS`.

## How

The list below shows some of the challenges which I faced and how I resolve them. Think of this as a cheatsheet for converting `SASS` to `styled-components`.

1. **Handling Variables** - In `SASS` you can declare variables and import those variables in other `SASS` files and use them. These are very useful for keeping consistency in the theme such as font-color, sizes, margins etc. 

   ```sass
   // Colors
   $color-base: #222;

   p {
       background-color: $color-base
   }
   ```

   To add variables in the \`styled-components\`, you can use a component called \`ThemeProvider\` which takes theme as a prop and in that prop you can add a object consisting of various variables.

   ```javascript
   import styled, { ThemeProvider } from 'styled-components';

   const theme = {
     colorBase: '#222'
   };

   const StyledP = `
     background-color: ${props => props.theme.colorBase};
   `;

   const Layout = () => (
     <ThemeProvider theme={theme}>
       <StyledP>With Theme<StyledP/>
     </ThemeProvider>
   );
   ```

   To know more about theming in `styled-components` check out official Styled theming blog [here](https://styled-components.com/docs/tooling#styled-theming).
2. **Generic Style** - In `SASS` you can add generic styling which can be applied to all the tags like `a`, `p` or `div`.  This can be useful if you want to add some colors to all the anchors or set the font family for the entire theme.

   ```sass
   /*
   * import this file in the root of your project and it will
   * add all the generic styles.
   */

   body {
       font-size: 1rem;
       background-color: #FFF;
   }
   ```

   For adding generic style in the `styled-components`, you can use a component called `GlobalStyle` and include that component in the root element and there you will have a generic style applied to all the components.

   ```javascript
   import { createGlobalStyle } from 'styled-components';

   const GenericCSS = createGlobalStyle`
     font-size: 1rem;
     background-color: '#FFF';
   `;

   const Layout = () => (
     <GenericCSS />
     <p>Generic CSS applied.</p>
   );
   ```

   To know more about `createGlobalStyle`, checkout [here](https://styled-components.com/docs/api#createglobalstyle).
3. **@include Directive** - In `SASS` you can call mixins(functions) using a directive called `@include`. Mixins can be called at multiple places and can be used if you want to add same changes(such as styling) to multiple elements or tags. `@include` has following syntax

   `@include <mixin-name>(args) {...}`

   ```sass
   @mixin line-height($number) {
       line-height: #{ $number * 1.2 + "px"};
   }

   p {
       @include line-height(1);
   }
   ```

   We can replace `@include` directive by actually calling functions in `styled-components`. Below is the example how

   ```javascript
   import styled, { css } from 'styled-components';

   const lineHeight = (numbser) => (props) => `
     line-height: ${number * 1.2}px;
   `;

   const StyledP = styled.p`
     ${lineHeight(1)};
   `
   ```
4. **@content directive** -  A mixin can take an entire block of styles, known as a *content block*. A mixin can declare that it takes a content block by including the `@content` at-rule in its body. The content block is passed in using curly braces like any other block in Sass, and it’s injected in place of the `@content` rule. E.g.

   ```sass
   @mixin breakpoint-sm {
       @media screen and (min-width: $layout-breakpoint-sm) {
           @content;
       }
   }

   @include breakpoint-sm {
        width: 33%;
        background-color: blue;
   }  
   ```

   To make these type of mixins in the styled-components we have to use css helper. Below is the example of above SASS in styled-components.

   ```javascript
   import styled, { css } from 'styled-components';

   const breakpointSm = (...args) => css`
   	@media screen and (min-width: ${(props) => props.theme.layout.breakPointSm}) {
   		${css(...args)}
   	}
   `;

   const StyledDiv = styled.div`
     ${breakpoint-sm`
       width: 33%;
       background-color: blue;
     `}
   `;
   ```

   For more info about code check [this](<1. https://tobbelindstrom.com/blog/how-to-create-a-breakpoint-mixin-with-styled-components/>) blog. To know more about the css helper, checkout their official API [here](https://styled-components.com/docs/api#css).
5. **StyleLint** - [Stylelint](https://stylelint.io/) is a linter which helps in linting your css. It checks whether you have used css in your entire code base by following the rules which you have turned on in stylelint config file.

   For implementing Stylelint in stylelint, you have to run the following command for installing certain dependencies.

   ```powershell
   yarn add -D stylelint \
     stylelint-processor-styled-components \
     stylelint-config-styled-components \
     stylelint-config-recommended
     
     // or if you are using npm
     npm install --save stylelint \
       stylelint-processor-styled-components \
       stylelint-config-styled-components \
       stylelint-config-recommended
   ```

   After installing above dependencies you have to setup the config file which consists of all the rules which you want to follow. Some of the rules which I follow are

   ```json
   {
   	"processors": ["stylelint-processor-styled-components"],
   	"rules": {
   		"color-named": "never",
   		"font-family-name-quotes": "always-where-required",
   		"font-weight-notation": "named-where-possible",
   		"function-url-no-scheme-relative": true,
   		"function-url-quotes": "always",
   		"string-quotes": "single",
   		"unit-blacklist": [],
   		"max-empty-lines": 2,
   		"no-descending-specificity": true,
   		"no-duplicate-selectors": true,
   		"font-family-no-missing-generic-family-keyword": null,
   		"property-no-unknown": [true]
   	},
   	"ignoreFiles": ["node_modules/*", "src/assets/**"],
   	"defaultSeverity": "error",
   	"extends": [
   		"stylelint-config-recommended",
   		"stylelint-config-styled-components"
   	]
   }
   ```

   After this just you to setup a npm/yarn command for running the Stylelint. For more info on using Stylelint, checkout [this](https://styled-components.com/docs/tooling#stylelint).
6. **Testing** - For testing react components, Snapshot testing is recommended as it will tell you when any of the components will change. If you already have snapshots build for your `SASS` codebase, I am really sorry to say but you to delete those snapshots and recreate them because all of the classes which will be added on the components will be different when those components will be created through `Styled-components`.

   There is one more kind of error you might get while testing `Styled-components` if you have done theming using \`ThemeProvider\` because the them variables will not be acessible at the time of testing.

   ![error-while-testing](/media/error-snapshot-testing.gif "error-while-testing")

   To resolve this I created a HOC which will take a component as argument and wrap that component with \`ThemeProvider\`. So

   ```javascript
   import React from 'react';
   import renderer from 'react-test-renderer';
   import { ThemeProvider } from 'styled-components';
   import theme from '../assets/styled-components/_variables';

   export default function renderWithTheme(component) {
   	return renderer.create(
   		<ThemeProvider theme={theme}>{component}</ThemeProvider>
   	);
   }
   ```

   Now you just have to call this function wherever you want to test your component. Like 

   ```javascript
   import React from 'react';
   import renderWithTheme from '../../utils/renderWithTheme';
   import Feed from './Feed';

   describe('Feed', () => {
   	it('renders correctly', () => {
   		const tree = renderWithTheme(<Feed />).toJSON();
   		expect(tree).toMatchSnapshot();
   	});
   });
   ```

   And hopefully your tests will pass. For more information about `jest` integeration with `styled-components`, checkout [here](﻿﻿https://styled-components.com/docs/tooling#jest-integration). 

   ![success-snapshot-testing](/media/success-snapshot-testing.gif "success-snapshot-testing")

So above were most of my issues which I faced while mapping over from `SASS` to `Styled-components`. And finally I have a PR for my mapping. Hope you guys found this blog helpful. If you guys have any issue porting over or have some other issues/cases/challenges which you want to discuss, please post them in comments, I will be glad to take a look.

Happy Coding :)