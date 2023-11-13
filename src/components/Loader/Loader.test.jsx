import React from 'react';
import { render } from '@testing-library/react';
import { it } from 'vitest';
import Loader from './Loader';

it('renders without crashing', () => {
  render(<Loader />);
});
