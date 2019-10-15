import React from 'react';
import { text, boolean, select } from '@storybook/addon-knobs';
import TextArea from './TextArea';
import { Colors } from '../../prop-types/color';
import { Sizes } from '../../prop-types/size';

export default {
  title: 'TextArea',
};

export const withDefaults = () => (
  <TextArea
    autoHeight={boolean('AutoHeight', true)}
    block={boolean('Block', false)}
    color={select('Color', { None: null, ...Colors })}
    placeholder={text('Placeholder', 'Enter some text...')}
    raised={boolean('Raised', false)}
    size={select('Size', { None: null, ...Sizes })}
  />
);
