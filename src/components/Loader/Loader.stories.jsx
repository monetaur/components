import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Sizes } from '../../prop-types/size';
import Loader from './Loader';

export default {
  title: 'Loader',
};

export const withDefaults = () => (
  <Loader
    expand={boolean('Expand', false)}
    size={select('Size', { None: null, ...Sizes })}
  >
    {text('Content', 'Loading...')}
  </Loader>
);
