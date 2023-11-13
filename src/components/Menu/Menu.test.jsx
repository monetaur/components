import React from 'react';
import { render } from '@testing-library/react';
import { it } from 'vitest';
import Menu from './Menu';

it('renders without crashing', () => {
  render(<Menu />);
});
