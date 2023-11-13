import React from 'react';
import { render } from '@testing-library/react';
import { it } from 'vitest';
import Button from './Button';

it('renders without crashing', () => {
  render(<Button />);
});
