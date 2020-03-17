import React from 'react';
import { text, number, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Image from './Image';

export default {
  title: 'Image',
};

export const withDefaults = () => (
  <Image
    alt={text('Alt', 'Placeholder')}
    avatar={boolean('Avatar', false)}
    height={number('Height', undefined)}
    onLoad={action('Image Loaded')}
    src="https://placehold.it/200x100"
    width={number('Width', undefined)}
  />
);

export const withLazyLoading = () => (
  <Image
    alt={text('Alt', 'Placeholder')}
    avatar={boolean('Avatar', false)}
    height={number('Height', undefined)}
    lazy
    onLoad={action('Image Loaded')}
    src="https://placehold.it/200x100"
    width={number('Width', undefined)}
  />
);
