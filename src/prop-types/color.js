import PropTypes from 'prop-types';

export const Colors = {
  Red: 'red',
  Green: 'green',
  Blue: 'blue',
  Purple: 'purple',
  Pink: 'pink',
  Yellow: 'yellow',
  Transparent: 'transparent',
};

const ColorPropType = PropTypes.oneOf(Object.values(Colors));

export default ColorPropType;
