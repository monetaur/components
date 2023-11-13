import React from 'react';
import { render } from '@testing-library/react';
import { it } from 'vitest';
import HorizontalScroll from './HorizontalScroll';

it('renders without crashing', () => {
  render(<HorizontalScroll />);
});
