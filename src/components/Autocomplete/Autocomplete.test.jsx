import React from 'react';
import { render } from '@testing-library/react';
import Autocomplete from './Autocomplete';

it('renders without crashing', () => {
  render(<Autocomplete />);
});
