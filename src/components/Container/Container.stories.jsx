import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Container from './Container';

export default {
  title: 'Container',
};

export const withDefaults = () => (
  <Container block={boolean('Block', false)}>Hello World</Container>
);
