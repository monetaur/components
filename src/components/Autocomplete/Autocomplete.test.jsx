import React from 'react';
import { render } from '@testing-library/react';
import { it } from 'vitest';
import Autocomplete from './Autocomplete';

it('renders without crashing', () => {
  render(<Autocomplete />);
});
