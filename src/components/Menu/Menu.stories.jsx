import React from 'react';
import Menu from './Menu';

export default {
  title: 'Menu',
};

export const withDefaults = () => (
  <Menu>
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
