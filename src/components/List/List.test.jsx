import React from 'react';
import { render } from '@testing-library/react';
import { it } from 'vitest';
import List from './List';

it('renders without crashing', () => {
  render(<List />);
});
