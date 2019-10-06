import React from 'react';
import { text } from '@storybook/addon-knobs';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
};

export const withDefaults = () => (
  <Checkbox>{text('Label', 'I pledge allegiance')}</Checkbox>
);
