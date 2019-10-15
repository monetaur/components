import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Modal>test content</Modal>, div);
  ReactDOM.unmountComponentAtNode(div);
});
