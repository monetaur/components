import React from 'react';
import Image from './Image';

export default {
  title: 'Image',
  component: Image,
  argTypes: {
    onLoad: {
      action: 'Image Loaded',
    },
  },
};

export const withDefaults = (args) => (
  <Image {...args} />
);

withDefaults.args = {
  alt: 'Placeholder',
  avatar: false,
  block: false,
  circular: false,
  lazy: false,
  src: 'https://placehold.it/200x100',
};
