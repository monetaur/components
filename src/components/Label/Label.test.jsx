import React from 'react';
import { render } from '@testing-library/react';
import { it } from 'vitest';
import Label from './Label';

it('renders without crashing', () => {
  render(<Label />);
});
