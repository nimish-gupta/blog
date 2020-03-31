---
template: post
title: "Implementing React Life Cycles Using Reason React\_Hooks"
slug: react-cycles-to-hooks
draft: false
date: 2020-03-31T09:21:06.349Z
description: "A short and quick guide for implementing react life cycles using reason react\_hooks."
category:
  - Web
tags:
  - Web
  - Tech
  - React
---

![](/media/hooks.jpeg)

After the release of [Reason React Hooks,](https://reasonml.github.io/reason-react/blog/2019/04/10/react-hooks) most of the developers have upgraded code base to support the hooks. Reason react community has also provided the [script](https://github.com/chenglou/upgrade-reason-react#installation) for upgradation but it just wraps the existing component using `ReasonReactCompact.wrapReasonReactForReact*`_tohooks components_.\*It doesn’t add the logic for hooks as it depends on the use-case and there is no direct mapping between both the components.

As I was upgrading the repository, I found some difficulties in upgrading the lifecycles to support the hooks. Therefore I have listed a small cheat sheet as a point of reference for conversion of those lifecycles. Before diving into the implementation using hooks a brief intro on React lifecycles and React Hooks.

#### **React Hooks**

Before hooks, for sharing state logic between the components we have to depend upon some of the patterns like HOCs(Higher Order Components) or render props (function as a child). But these lead to a code which is difficult to understand as it will be wrapped with lots of other components.

With hooks, you can create a custom component and can share the logic with the help of that component. As mentioned [here](https://reactjs.org/docs/hooks-intro.html).

> **Hooks allow you to reuse stateful logic without changing your component hierarchy.** This makes it easy to share Hooks among many components or with the community.

Using hooks, you can break all the lifecycles, which are used in React classes, into a separate component and test them and re-use them without creating a giant complex class with all the lifecycles in it. From the [react](https://reactjs.org/docs/hooks-intro.html) site

> **Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data)**, rather than forcing a split based on lifecycle methods

So basically hooks are a way to create a **stateful function**with the ability to reuse and break the components to create a better abstraction of the components.

#### React Lifecycles

For every react component, there is a cycle attached to it from the creation of react component to its deletion inside the DOM. During this cycle, several methods are called according to the various stages of the component. This cycle is called React Lifecycle. React Component lifecycle is divided into 4 stages:-

- Initialization
- Mounting
- Updating
- Unmounting

For visual reference that how life cycles work in react, check out [this](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/).

#### Lifecycle methods called while initializing the component

In this stage, mostly the initial properties of the component are set. You can define the state, set default props and much more. Below are the methods that are called in this stage.

- **[constructor](https://reactjs.org/docs/react-component.html#constructor)** — This life cycle method is called before render and is used for initializing the state or to create some of the bindings for the event listener that the component will use.

  ```reason
  type state = { counter: int };

  // Assign intial state in constructor method
  let initialState = () => { counter: 0 };

  [@react.component]
  let make = () => {
    let (state, setState) => React.useState(initialState);

    "initial state is set using hooks" -> React.string;
  };
  ```

#### **Lifecycle methods called while mounting the component**

Below are the lifecycle methods which are called when the component is created or inserted inside the DOM.

- **[render](https://reactjs.org/docs/react-component.html#render)** — This lifecycle method is used for creating the HTML content for the following component. This function will return the React elements which will be converted into the DOM elements. These should be a pure function and should not change the state while returning the elements. For more info on pure functions, check out [this](https://en.wikipedia.org/wiki/Pure_function).

  ```reason
  [@react.component]
  let make = (~name) => {
    // the whole body of this method comes under render lifecycle.

    name -> React.string;
  };
  ```

- **[componentDidMount](https://reactjs.org/docs/react-component.html#componentdidmount)**— This lifecycle method is called mostly for fetching some data or manipulating the DOM after the component is rendered, you can update the state based on the computations which you have performed in this method. This is only called after the first render of the component, for successive render check other lifecycle methods.

  ```reason
  [@react.component]
  let make = (~name: string) => {
    let (counter, setCounter) = React.useState(() => 0);

    // Enter any thing you want to enter in componentDidMount.
    React.useEffect1(
      () => {
        setCounter(_ => counter + 1);
        None
      },
      [||] // This is the key as this effect will be independent of any change in props.
    );

    "counter is rendered only 1 time" -> React.string;
  }
  ```

#### **Lifecycle methods called while updating the component**

Below listed lifecycle methods are called whenever there is a change in state or props. These lifecycle methods are called on every re-render.

- **[shouldComponentUpdate](https://reactjs.org/docs/react-component.html#shouldcomponentupdate)** — This lifecycle method is called to determine whether the component will re-render when there is a change in the props or the state of the components by returning the boolean flag. By default, the component will be re-render on every state or prop change

  ```reason
  [@react.component]
  let make = (~name) => name -> React.string;

  // If you want to shallow compare the props then use React.memo
  let make = React.memo(make);

  // If you want to custom compare the nested props then use React.memoCustomCompareProps
  let deepCompare = (nextProps, currentProps) => nextProps === currentProps;

  let make = React.memoCustomCompareProps(
    make,
    (nextProps, currentProps) => {
      let result = deepCompare(nextProps, currentProps);
      result;
    }
  );
  ```

  > Note: You can also use React.useMemo to create the memoized functions so that the component will not render after if the complex computation returns the same result.

- **[componentDidUpdate](https://reactjs.org/docs/react-component.html#componentdidupdate)** — This lifecycle method is called after every re-render except for the first one. This lifecycle is generally used for doing any computation like network requests, event listener on the basis of change in props. Make sure to compare the props while updating the state, otherwise it will be stuck in infinite re-render.

  ```reason
  [@react.component]
  let make = (~name, ~) => {
    let (counter, setCounter) => React.useState(() => 0);

    // This will allow the change of the state/props only if certain props are passed or changed to.
    React.useEffect1(
      () => {
        if (name === "componentDidUpdate") {
          setCounter(_ => counter + 1);
          None
        }
      },
      [|name|] // Here we are listing dependency on which component will be re-rendered.
    );

    (name ++ "is called " ++ counter -> string_of_int ++ " times.") -> React.string;
  };
  ```

#### **Lifecycle methods called while unmounting the component**

These lifecycle methods are called when the component is removed from the DOM.

- **[componentWillUnmount](https://reactjs.org/docs/react-component.html#componentwillunmount)** — This lifecycle method is called to do all the cleanup like removing the subscriptions or event listeners on the component. This lifecycle method is just called before the component is unmounted.

  ```reason
  [@react.component]
  let make = () => {
    let (counter, setCounter) = React.useState(() => 0);

    React.useEffect(() => {
      let clearTimeout = Js.Global.setTimeout(() => setCounter(_ => counter + 1), 500);

      Some(Js.Global.clearTimeout(clearTimeout)) // This will be called when the component will be un-mounted
    });
    ("Counter is updated " ++ counter -> string_of_int ++ " times.") -> React.string;
  };
  ```

#### **Lifecycle methods called for error handling in components**

These lifecycle methods are used to handle the error whenever any lifecycle method throws an error.

Right now, react team hasn’t created any hooks for error handling, but they have listed that they will be added soon. More info [here](https://reactjs.org/docs/hooks-faq.html#how-do-lifecycle-methods-correspond-to-hooks).

#### Conclusion

Above is a quick guide for the transition from ReasonReact.reactClass (Reason React component type before hooks) to React.Element(Reason React upgraded component implementing hooks). You can read more about the hooks [here](https://reactjs.org/docs/hooks-intro.html). There are a bunch of other hooks listed [here](https://reactjs.org/docs/hooks-overview.html). Open source community has started creating a bunch of custom hooks to solve the generic issues. You can create your own custom hook (check [this](https://reactjs.org/docs/hooks-custom.html) for the custom hook)

Thanks for reading :).
