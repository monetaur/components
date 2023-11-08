import React from 'react';
import { action } from '@storybook/addon-actions';
import Image from './Image';

export default {
  title: 'Image',
  component: Image,
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
  onLoad: action('Image Loaded'),
  src: 'https://placehold.it/200x100',
};
