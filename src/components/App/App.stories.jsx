import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import App from './App';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default {
  title: 'App',
};

export const withASimpleLayout = () => (
  <App>
    <App.Body>
      <App.Header
        primary={boolean('Primary Header')}
      />
      <App.Content>
        Site Content
      </App.Content>
    </App.Body>
  </App>
);

export const withAModerateLayout = () => (
  <App>
    <App.Sidebar
      primary={boolean('Primary Sidebar')}
      raised={boolean('Raised Sidebar')}
    >
      {text('Content', 'Sidebar Content')}
    </App.Sidebar>
    <App.Body>
      <App.Header
        mobileOnly
        primary={boolean('Primary Header')}
      >
        <App.MenuToggle />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          Site Title
        </div>
      </App.Header>
      <h1>{loremIpsum}</h1>
      <h1>{loremIpsum}</h1>
    </App.Body>
  </App>
);

export const withAComplexLayout = () => (
  <App>
    <App.Sidebar
      primary={boolean('Primary Left Sidebar')}
      raised={boolean('Raised Left Sidebar')}
      side="left"
    >
      {text('Left Sidebar Content', 'Left Sidebar Content')}
    </App.Sidebar>
    <App.Body>
      <App.Layout>
        <App.Sidebar
          side="right"
          primary={boolean('Primary Right Sidebar')}
          raised={boolean('Raised Right Sidebar')}
        >
          {text('Right Sidebar Content', 'Right Sidebar Content')}
        </App.Sidebar>
        <App.Content>
          <App.Header
            mobileOnly
            primary={boolean('Primary Header')}
          >
            <App.MenuToggle side="left" />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              Site Title
            </div>
            <App.MenuToggle side="right" />
          </App.Header>
          <h1>{loremIpsum}</h1>
          <h1>{loremIpsum}</h1>
        </App.Content>
      </App.Layout>
    </App.Body>
  </App>
);
