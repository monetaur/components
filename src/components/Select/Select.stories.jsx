import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';
import Select from './Select';
import { Sizes } from '../../prop-types/size';
import { Colors } from '../../prop-types/color';

export default {
  title: 'Select',
};

export const withDefaults = () => (
  <Select
    block={boolean('Block', false)}
    color={select('Color', { None: null, ...Colors })}
    raised={boolean('Raised', false)}
    required={boolean('Required', true)}
    size={select('Size', { None: null, ...Sizes })}
  >
    <option disabled hidden selected value="">{text('Placeholder', 'Select One')}</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
    <option value="5">Option 5</option>
  </Select>
);
