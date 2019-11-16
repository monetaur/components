import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';
import Autocomplete from './Autocomplete';
import { Colors } from '../../prop-types/color';
import { Sizes } from '../../prop-types/size';

export default {
  title: 'Autocomplete',
};

export const withDefaults = () => (
  <Autocomplete block={boolean('Block', false)} />
);

export const withOptions = () => (
  <Autocomplete
    block={boolean('Block', false)}
    color={select('Color', { None: null, ...Colors })}
    options={[
      'Autocomplete suggestion 1',
      'Autocomplete suggestion 2',
      'Autocomplete suggestion 3',
      'Autocomplete suggestion 4',
    ]}
    placeholder={text('Placeholder', 'Enter some text...')}
    raised={boolean('Raised', false)}
    size={select('Size', { None: null, ...Sizes })}
  />
);
