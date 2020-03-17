import React from 'react';
import Media from './Media';

export default {
  title: 'Media',
};

export const withImageOnTheLeft = () => (
  <Media>
    <img alt="placeholder" src="https://placehold.it/100" />
    <p>This is the body. This is the body. This is the body. This is the body. This is the body.</p>
  </Media>
);

export const withImageOnTheRight = () => (
  <Media>
    <p>This is the body. This is the body. This is the body. This is the body. This is the body.</p>
    <img alt="placeholder" src="https://placehold.it/100" />
  </Media>
);
