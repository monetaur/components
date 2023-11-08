import React from 'react';
import ProgressBar from './ProgressBar';

export default {
  title: 'ProgressBar',
  component: ProgressBar,
};

export const withDefaults = (args) => (
  <ProgressBar {...args} />
);

withDefaults.args = {
  children: '',
  percent: 10,
};
