import React from 'react';
import Container from './Container';

export default {
  title: 'Container',
  component: Container,
};

export const withDefaults = (args) => (
  <Container {...args} />
);

withDefaults.args = {
  block: false,
  children: 'Hello World',
};
