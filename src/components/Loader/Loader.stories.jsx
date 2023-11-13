import React from 'react';
import { Sizes } from '../../prop-types/size';
import Loader from './Loader';

export default {
  title: 'Loader',
  component: Loader,
};

export const withDefaults = (args) => (
  <Loader {...args} />
);

withDefaults.args = {
  children: 'Loading...',
  expand: false,
};

withDefaults.argTypes = {
  expand: {
    control: {
      type: 'select',
    },
    options: Object.values(Sizes),
  },
};
