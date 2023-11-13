import React from 'react';
import { render } from '@testing-library/react';
import { it } from 'vitest';
import ProgressBar from './ProgressBar';

it('renders without crashing', () => {
  render(<ProgressBar />);
});
