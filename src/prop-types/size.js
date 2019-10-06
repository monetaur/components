import PropTypes from 'prop-types';

export const Sizes = {
  ExtraSmall: 'xs',
  Small: 'sm',
  Large: 'lg',
  ExtraLarge: 'xl',
};

const SizePropType = PropTypes.oneOf(Object.values(Sizes));

export default SizePropType;
