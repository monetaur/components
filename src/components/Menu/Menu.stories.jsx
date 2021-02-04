import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Menu from './Menu';

export default {
  title: 'Menu',
};

export const withDefaults = () => (
  <Menu horizontal={boolean('Horizontal', false)}>
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
