import React from 'react';
import { render } from '@testing-library/react';
import { it } from 'vitest';
import Input from './Input';

it('renders without crashing', () => {
  render(<Input />);
});
