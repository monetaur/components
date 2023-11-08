import React from 'react';
import Group from './Group';

export default {
  title: 'Group',
  component: Group,
};

export const withDefaults = (args) => (
  <Group {...args}>
    <Group.Item>Hello</Group.Item>
    <Group.Item>World</Group.Item>
  </Group>
);

withDefaults.args = {
  bordered: false,
  padded: false,
};

export const withStaticItems = (args) => (
  <Group {...args}>
    <Group.Item>Hello</Group.Item>
    <Group.Item grow={false}>World</Group.Item>
  </Group>
);

withStaticItems.args = withDefaults.args;
