import React from 'react';
import { render } from '@testing-library/react';
import Image from './Image';

it('renders without crashing', () => {
  render(<Image alt="test image" src="https://placehold.it/1" />);
});
