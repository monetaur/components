import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Dropdown from './Dropdown';
import { Sizes } from '../../prop-types/size';

export default {
  title: 'Dropdown',
};

export const withComplexOptions = () => (
  <Dropdown
    block={boolean('Block', false)}
    onChange={action('Dropdown Value Changed')}
    options={[
      { label: 'Option 1', value: 1 },
      { label: 'Option 2', value: 2 },
      { label: 'Option 3', value: 3 },
      { label: 'Option 4', value: 4 },
      { label: 'Option 5', value: 5 },
    ]}
    placeholder={text('Placeholder', 'Select One')}
    raised={boolean('Raised', false)}
    size={select('Size', { None: null, ...Sizes })}
  />
);

export const withSimpleOptions = () => (
  <Dropdown
    block={boolean('Block', false)}
    onChange={action('Dropdown Value Changed')}
    options={['Option 1', 'Option 2', 'Option 3']}
    placeholder={text('Placeholder', 'Select One')}
    raised={boolean('Raised', false)}
  />
);
