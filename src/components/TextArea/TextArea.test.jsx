import React from 'react';
import { render } from '@testing-library/react';
import { it } from 'vitest';
import TextArea from './TextArea';

it('renders without crashing', () => {
  render(<TextArea />);
});
