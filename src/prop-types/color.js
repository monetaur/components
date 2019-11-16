import PropTypes from 'prop-types';

export const Colors = {
  Blue: 'blue',
  Gray: 'gray',
  Green: 'green',
  Pink: 'pink',
  Primary: 'primary',
  Purple: 'purple',
  Red: 'red',
  Secondary: 'secondary',
  Transparent: 'transparent',
  White: 'white',
  Yellow: 'yellow',
};

const ColorPropType = PropTypes.oneOf(Object.values(Colors));

export default ColorPropType;
