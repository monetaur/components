import React from 'react';
import { text } from '@storybook/addon-knobs';
import Label from './Label';

export default {
  title: 'Label',
};

export const withDefaults = () => (
  <Label>{text('Content', 'Hello World')}</Label>
);
