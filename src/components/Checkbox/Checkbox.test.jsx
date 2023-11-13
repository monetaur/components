import React from 'react';
import { render } from '@testing-library/react';
import { it } from 'vitest';
import Checkbox from './Checkbox';

it('renders without crashing', () => {
  render(<Checkbox />);
});
