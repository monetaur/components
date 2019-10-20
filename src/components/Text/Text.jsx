import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import SizePropType from '../../prop-types/size';
import ColorPropType from '../../prop-types/color';
import defaultTheme from '../../../themes/default';

const Text = styled.span`
  color: ${({ theme }) => theme.palette.textColor};

  ${({ bold }) => bold && css`
    font-weight: bold;
  `}

  ${({ block }) => block && css`
    display: block;
    width: 100%;
  `}

  ${({ centered, right }) => (centered || right) && css`
    text-align: ${centered ? 'center' : 'right'};
  `}

  ${({ color, theme }) => color && css`
    color: ${theme.palette[color]};
  `}

  ${({ size, theme }) => size && css`
    font-size: ${theme.textSizes[size]};
  `}

  ${({ uppercase }) => uppercase && css`
    text-transform: uppercase;
  `}
`;

Text.propTypes = {
  block: PropTypes.bool,
  bold: PropTypes.bool,
  centered: PropTypes.bool,
  color: ColorPropType,
  right: PropTypes.bool,
  size: SizePropType,
  uppercase: PropTypes.bool,
};

Text.defaultProps = {
  block: false,
  bold: false,
  centered: false,
  color: undefined,
  right: undefined,
  size: undefined,
  theme: defaultTheme,
  uppercase: false,
};

export default Text;
