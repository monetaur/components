import React from 'react';
import { render } from '@testing-library/react';
import { it } from 'vitest';
import Box from './Box';

it('renders without crashing', () => {
  render(<Box />);
});
