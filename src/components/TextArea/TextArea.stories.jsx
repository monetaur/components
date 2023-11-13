import React from 'react';
import TextArea from './TextArea';
import { Colors } from '../../prop-types/color';
import { Sizes } from '../../prop-types/size';

export default {
  title: 'TextArea',
  component: TextArea,
};

export const withDefaults = (args) => (
  <TextArea {...args} />
);

withDefaults.args = {
  autoHeight: true,
  block: false,
  placeholder: 'Enter some text...',
  raised: false,
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
