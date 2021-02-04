import React from 'react';
import { render } from '@testing-library/react';
import List from './List';

it('renders without crashing', () => {
  render(<List />);
});
