import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import List from './List';

export default {
  title: 'List',
};

export const withDefaults = () => (
  <List
    block={boolean('Block', false)}
    bordered={boolean('Bordered', false)}
  >
    <List.Item
      padded={boolean('Padded', false)}
    >
      This is a list item
    </List.Item>
    <List.Item
      padded={boolean('Padded', false)}
    >
      This is a list item
    </List.Item>
    <List.Item
      padded={boolean('Padded', false)}
    >
      This is a list item
    </List.Item>
    <List.Item
      padded={boolean('Padded', false)}
    >
      This is a list item
    </List.Item>
  </List>
);
