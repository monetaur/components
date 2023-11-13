import React from 'react';
import { render } from '@testing-library/react';
import { it } from 'vitest';
import Group from './Group';

it('renders without crashing', () => {
  render(<Group />);
});
