import React from 'react';
import { render } from '@testing-library/react';
import { it } from 'vitest';
import Modal from './Modal';

it('renders without crashing', () => {
  render(<Modal>test content</Modal>);
});
