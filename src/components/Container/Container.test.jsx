import React from 'react';
import { render } from '@testing-library/react';
import { it } from 'vitest';
import Container from './Container';

it('renders without crashing', () => {
  render(<Container />);
});
