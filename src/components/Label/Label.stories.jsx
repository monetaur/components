import React from 'react';
import Label from './Label';

export default {
  title: 'Label',
  component: Label,
};

export const withDefaults = (args) => (
  <Label {...args} />
);

withDefaults.args = {
  children: 'Hello World',
};
