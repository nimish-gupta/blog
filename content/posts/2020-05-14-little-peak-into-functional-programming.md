---
template: post
title: Little peak into Functional Programming
slug: funtional-programming-peak
draft: false
date: 2020-05-14T11:00:24.041Z
description: >-
  This blog consists of simple learning in laws for various functional
  programming data structures. This blog will also contain a graph which shows
  the various dependencies between data structures. This blog can be used as a
  cheat sheet.
category:
  - Functional Programming
  - Cheatsheet
tags:
  - Functional Programming
  - Cheatsheet
---
This sheet consists of following data structures/ transformations:

* [Functor](#functor)
* [Monad](#monad)
* [Applicative Functor](#applicative-functor)
* [Semigroup](#sesmigroup)
* [Monoid](#monoid)
* [Natural Transformation](#natural-transformation)

### Dependencies between various data structures:

![Functional Programming Dependencies](/media/fpds.png "Functional Programming Dependencies")

### Data Structures

* #### Functor

  A Functor is a type that implements `map`.

  ```javascript
  Methods

  - fmap :: (a -> b) -> f a -> f b

  Laws
  // identity
  - map(id) === id;

  // composition
  - compose(map(f), map(g)) === map(compose(f, g));
  ```

  ![Functor Composition Law](/media/functor_laws.png "Functor Composition Law")
* #### Monad

  Monads are pointed functors that can flatten. Any functor which defines a `join` method, has an `of` method, and obeys some laws is a monad. Monads are also called Kleisli composition.

  ```javascript
  Methods
  - join :: Monad m => m (m a) -> m a

  Laws

  const mcompose = (f, g) => compose(chain(f), g);

  // left identity
  - mcompose(M, f) === f;

  // right identity
  - mcompose(f, M) === f;

  // associativity
  - mcompose(mcompose(f, g), h) === mcompose(f, mcompose(g, h));
  ```

  ![Monad Identity Law](/media/monad-identity.png "Monad Identity Law")

  ![Monad Composition Law](/media/monad-law.png "Monad Composition Law")
* #### Applicative Functor

  An applicative functor is a pointed functor with an `ap` method.

  ```javascript
  Properties

  - F.of(x).map(f) === F.of(f).ap(F.of(x));

  Laws

  // identity
  A.of(id).ap(v) === v;

  // homomorphism
  A.of(f).ap(A.of(x)) === A.of(f(x));

  // interchange
  v.ap(A.of(x)) === A.of(f => f(x)).ap(v);

  // composition
  A.of(compose).ap(u).ap(v).ap(w) === u.ap(v.ap(w));
  ```
* #### Semigroup

  A Semigroup’s `concat` method must take another value of the same type, and return a third value of the same type.

  ```javascript
  Method

  - concat :: Semigroup a => a -> a -> a

  Laws

  // associativity
  - concat(concat(x, y), z) = concat(x, concat(y, z))
  ```
* #### Monoid

  Monoids are semigroups with a single *identity element* (also known as empty or *neutral* element)

  ```javascript
  Laws

  // right identity
  - m.concat(M.empty()) = m

  // left identity
  - M.empty().concat(m) = m
  ```
* #### Natural Transformation

  A Natural Transformation is a "morphism between functors", that is, a function which operates on the containers themselves. For every element `a`, and the functors `F` and `G`, the natural transformation `nt` between `F` and `G` is a morphism (i.e., `mapping`) from `F a` to `G a`.

  ```javascript
  Method

  - nt :: (Functor f, Functor g) => f a -> g a

  Laws

  - compose(map(f), nt) === compose(nt, map(f));
  ```

  ![NT Composition Law](/media/ntlaws.png "NT Composition Law")

### References

Above laws/definitions/diagrams are taken from below listed resources.

* [Mostly Adequate Guide](https://mostly-adequate.gitbooks.io/mostly-adequate-guide). 
* [Egghead Professor Frisby Course](https://egghead.io/courses/professor-frisby-introduces-composable-functional-javascript).
* [Eric Elliott Functional Programming Medium Series](https://medium.com/javascript-scene/composing-software-an-introduction-27b72500d6ea).
* [Principal Typed Conversion with Natural Transformation](https://medium.com/@kelleyalex/principled-type-conversions-with-natural-transformations-37cdb31d8ede).
* [Functional Programming (Javascript Fantasy Land Specification)](<* https://sanderv1992.github.io/fp/monoid/>).

#### Source Code

If you want to convert your code from imperative paradigm to functional paradigm then you can check out [this pull request](https://github.com/nimish-gupta/get-oss/pull/4). I have mostly converted the code into functional paradigm. Feel free to reach out to me, in case of any other issue, happy to help :)