import React from 'react';
import Text from './Text';
import { Colors } from '../../prop-types/color';
import { Sizes } from '../../prop-types/size';

export default {
  title: 'Text',
  component: Text,
};

export const withDefaults = (args) => (
  <Text {...args} />
);

withDefaults.args = {
  block: false,
  bold: false,
  centered: false,
  children: 'This is some Text',
  right: false,
};

withDefaults.argTypes = {
  color: {
    control: {
      type: 'select',
    },
    options: Object.values(Colors),
  },
  size: {
    control: {
      type: 'select',
    },
    options: Object.values(Sizes),
  },
};
