import React from 'react';
import Autocomplete from './Autocomplete';

export default {
  title: 'Autocomplete',
  args: {
    block: false,
    placeholder: 'Enter some text...',
    raised: false,
  },
  component: Autocomplete,
};

export const withDefaults = (args) => (
  <Autocomplete {...args} />
);

export const withOptions = withDefaults.bind({});

withOptions.args = {
  options: [
    'Autocomplete suggestion 1',
    'Autocomplete suggestion 2',
    'Autocomplete suggestion 3',
    'Autocomplete suggestion 4',
  ],
};
