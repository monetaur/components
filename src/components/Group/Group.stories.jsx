import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Group from './Group';

export default {
  title: 'Group',
};

export const withDefaults = () => (
  <Group
    bordered={boolean('Bordered', false)}
    padded={boolean('Padded', false)}
  >
    <Group.Item>Hello</Group.Item>
    <Group.Item>World</Group.Item>
  </Group>
);

export const withStaticItems = () => (
  <Group
    bordered={boolean('Bordered', false)}
    padded={boolean('Padded', false)}
  >
    <Group.Item>Hello</Group.Item>
    <Group.Item grow={false}>World</Group.Item>
  </Group>
);
