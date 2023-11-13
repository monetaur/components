import React from 'react';
import { render } from '@testing-library/react';
import { it } from 'vitest';
import Media from './Media';

it('renders without crashing', () => {
  render(<Media />);
});
