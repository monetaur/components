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
