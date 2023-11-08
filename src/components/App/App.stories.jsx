import React from 'react';
import App from './App';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default {
  title: 'App',
  component: App,
};

export const withASimpleLayout = (args) => (
  <App>
    <App.Body>
      <App.Header
        primary={args.primaryHeader}
      />
      <App.Content>
        Site Content
      </App.Content>
    </App.Body>
  </App>
);

withASimpleLayout.args = {
  primaryHeader: false,
};

export const withAModerateLayout = (args) => (
  <App>
    <App.Sidebar
      primary={args.primarySidebar}
      raised={args.raisedSidebar}
    >
      {args.sidebarContent}
    </App.Sidebar>
    <App.Body>
      <App.Header
        mobileOnly
        primary={args.primaryHeader}
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

withAModerateLayout.args = {
  primaryHeader: false,
  primarySidebar: false,
  raisedSidebar: false,
  sidebarContent: 'Sidebar Content',
};

export const withAComplexLayout = (args) => (
  <App>
    <App.Sidebar
      primary={args.primaryLeftSidebar}
      raised={args.raisedLeftSidebar}
      side="left"
    >
      {args.leftSidebarContent}
    </App.Sidebar>
    <App.Body>
      <App.Layout>
        <App.Sidebar
          side="right"
          primary={args.primaryRightSidebar}
          raised={args.raisedRightSidebar}
        >
          {args.rightSidebarContent}
        </App.Sidebar>
        <App.Content>
          <App.Header
            mobileOnly
            primary={args.primaryHeader}
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

withAComplexLayout.args = {
  leftSidebarContent: 'Left Sidebar Content',
  primaryHeader: false,
  primaryLeftSidebar: false,
  primaryRightSidebar: false,
  raisedLeftSidebar: false,
  raisedRightSidebar: false,
  rightSidebarContent: 'Right Sidebar Content',
};
