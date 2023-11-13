import React from 'react';
import { render } from '@testing-library/react';
import { it } from 'vitest';
import Grid from './Grid';

it('renders without crashing', () => {
  render(<Grid />);
});
