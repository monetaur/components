import React from 'react';
import List from './List';

export default {
  title: 'List',
  component: List,
};

export const withDefaults = (args) => (
  <List {...args}>
    <List.Item
      padded={args.paddedItems}
    >
      This is a list item
    </List.Item>
    <List.Item
      padded={args.paddedItems}
    >
      This is a list item
    </List.Item>
    <List.Item
      padded={args.paddedItems}
    >
      This is a list item
    </List.Item>
    <List.Item
      padded={args.paddedItems}
    >
      This is a list item
    </List.Item>
  </List>
);

withDefaults.args = {
  block: false,
  bordered: false,
  paddedItems: false,
};
