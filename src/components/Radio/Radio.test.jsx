import React from 'react';
import { render } from '@testing-library/react';
import Radio from './Radio';

it('renders without crashing', () => {
  render(<Radio name="test" />);
});
