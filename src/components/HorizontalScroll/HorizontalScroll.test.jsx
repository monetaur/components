import React from 'react';
import ReactDOM from 'react-dom';
import HorizontalScroll from './HorizontalScroll';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HorizontalScroll />, div);
  ReactDOM.unmountComponentAtNode(div);
});
