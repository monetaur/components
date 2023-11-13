import React from 'react';
import { render } from '@testing-library/react';
import { it } from 'vitest';
import Dropdown from './Dropdown';

it('renders without crashing', () => {
  render(<Dropdown />);
});
