import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import Button from './Button';
import { Sizes } from '../../prop-types/size';

export default {
  title: 'Button',
};

export const withDefaults = () => (
  <Button
    block={boolean('Block', false)}
    disabled={boolean('Disabled', false)}
    onClick={action('clicked')}
    primary={boolean('Primary', false)}
    raised={boolean('Raised', false)}
    secondary={boolean('Secondary', false)}
    size={select('Size', { None: null, ...Sizes })}
  >
    {text('Label', 'Hello Button')}
  </Button>
);
