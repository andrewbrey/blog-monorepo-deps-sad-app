# Sad App Monorepo

This repository is a monorepo which contains 2 workspaces, one a `React` UI
library and the other a `React` App which _consumes_ the UI library.
Unfortunately, because the UI library depends on `react@^18` and the App depends
on `react@^16`, these two projects in their current state are incompatible with
each other — even worse, we don't find this out until runtime when a call to
`useId()` explodes in the `Button` [component](./packages/ui/src/Button.jsx) 😢

The only reason this incompatibility is possible is because we allow each of
these workspaces to declare their own dependencies in their respective
`package.json`, which is why this is the **Sad App Monorepo**.

There are a few ways to address this issue, each with its own tradeoffs, but the
way that I prefer is to only have **one** version of a given dependency for the
_entire_ monorepo.

To see my preferred method of resolving this issue in action, see
[the companion repository for the "Happy App Monorepo"](https://github.com/andrewbrey/blog-monorepo-deps-happy-app).

> This repository exists as a supporting demo for my blog post on the topic of
> managing dependencies in monorepos. In the blog post, you will find a more
> thorough discussion of the issue as well as discussion of the tradeoffs
> involved with solving the issue in this way.
