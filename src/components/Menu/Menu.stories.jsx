import React from 'react';
import Menu from './Menu';

export default {
  title: 'Menu',
  component: Menu,
};

export const withDefaults = (args) => (
  <Menu {...args}>
    <Menu.Item>
      <a href="/">Menu Item</a>
    </Menu.Item>
    <Menu.Item>
      <a href="/">Menu Item</a>
    </Menu.Item>
    <Menu.Item>
      <a href="/">Menu Item</a>
    </Menu.Item>
  </Menu>
);

withDefaults.args = {
  horizontal: false,
};
