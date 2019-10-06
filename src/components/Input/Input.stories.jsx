import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';
import Input from './Input';
import { Colors } from '../../prop-types/color';
import { Sizes } from '../../prop-types/size';

export default {
  title: 'Input',
};

export const withDefaults = () => (
  <Input
    block={boolean('Block', false)}
    color={select('Color', { None: null, ...Colors })}
    placeholder={text('Placeholder', 'Enter some text...')}
    raised={boolean('Raised', false)}
    size={select('Size', { None: null, ...Sizes })}
  />
);
