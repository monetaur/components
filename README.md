# @monetaur/components

A set of React components used to build the Monetaur platform

[![Storybook](https://img.shields.io/badge/docs-storybook-pink.svg?style=for-the-badge)](https://zakariaharti.github.io/react-awesome-notifications/)
[![style: styled-components](https://img.shields.io/badge/style-styled--components-%23d1a05c.svg?style=for-the-badge)](https://github.com/styled-components/styled-components)
[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fmonetaur%2Fcomponents%2Fbadge%3Fref%3Dmaster&style=flat)](https://actions-badge.atrox.dev/monetaur/components/goto?ref=master)

## Install
`npm install @monetaur/components`

## Implement
```javascript
import React from 'react';
import { Button } from '@monetaur/components';

export default function LoginButton() {
  return (
    <Button as="a" href="/login" primary>Log In</Button>
  );
}
```

## Theme
```javascript
import React from 'react';
import { ThemeProvider } from '@monetaur/components';
import theme from './customTheme';

export default function Application({ children}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
```

## Components
Check back soon for a dedicated README for each component.

## Continuous Integration
This package uses GitHub Actions. When a pull request is created, the codebase will automatically be checked for linter errors and test failures.

### Releases
This package uses [`semantic-release`](https://semantic-release.gitbook.io). By default, the package expects commits to follow the [Angular Commit Message Conventions](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines). That means that commits intended to trigger a new release should look like these:

Logged Non-Release Commits
* docs: Add documentation for useLocalStorage
* docs(useLocalStorage): Add documentation for useLocalStorage
* style: Change indentation from 4 to 2 spaces
* style(spaces): Change indentation from 4 to 2 spaces
* refactor: Clean up Webpack config file
* refactor(webpack config): Clean up Webpack config file
* perf: Replace react-helmet to resolve memory issues
* perf(react-helmet): Replace react-helmet to resolve memory issues
* test: Add tests for Page component
* test(Page): Add tests for Page component
* chore: 1.0.0
* chore(release): 1.0.0

Minor/Feature Release Commits
* feat: Add useAnotherOne hook for DJ Khaled quotes
* feat(useAnotherOne): Add useAnotherOne hook for DJ Khaled quotes

Patch Release Commits
* fix: Resolve equality issue in useDeepState
* fix(useDeepState): Resolve equality issue in useDeepState

Major/Breaking Release Commits
* BREAKING CHANGE: Button props have changed to align with ever-changing style guide

## Continuous Delivery
When a commit is pushed to the master branch, the following steps will occur:
1. Run linters and tests
2. Run build
3. Run `semantic-release` command
