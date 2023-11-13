import React from 'react';

import { render } from '@testing-library/react';
import { it } from 'vitest';
import Select from './Select';

it('renders without crashing', () => {
  render(<Select />);
});
