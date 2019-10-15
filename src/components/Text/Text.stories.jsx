import React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import Text from './Text';
import { Colors } from '../../prop-types/color';
import { Sizes } from '../../prop-types/size';

export default {
  title: 'Text',
};

export const withDefaults = () => (
  <Text
    block={boolean('Block', false)}
    bold={boolean('Bold', false)}
    centered={boolean('Centered', false)}
    color={select('Color', { None: null, ...Colors })}
    right={boolean('Right', false)}
    size={select('Size', { None: null, ...Sizes })}
  >
    This is some Text
  </Text>
);
