import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const withDefaults = (args) => (
  <Checkbox {...args} />
);

withDefaults.args = {
  children: 'I pledge allegiance',
};
