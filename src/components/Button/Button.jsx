import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import SizePropType from '../../prop-types/size';
import styleControlOuter from '../../utils/styleControlOuter';
import styleControlInner from '../../utils/styleControlInner';
import defaultTheme from '../../../themes/default';

const Button = styled.button`
  ${(props) => styleControlInner({ ...props, clickable: true, input: false })}
  ${(props) => styleControlOuter(props)}
  appearance: none;
  min-width: 90px;
  text-align: center;
  text-decoration: none;

  ${({ primary, theme }) => primary && css`
    background-color: ${theme.palette.primary};
    border-color: ${theme.palette.primary};
    color: white;

    :hover {
      background-color: ${darken(0.05, theme.palette.primary)};
      border-color: ${darken(0.05, theme.palette.primary)};
      color: white;
    }

    :active {
      background-color: ${darken(0.1, theme.palette.primary)};
      border-color: ${darken(0.1, theme.palette.primary)};
    }
  `}

  ${({ secondary, theme }) => secondary && css`
    background-color: ${theme.palette.secondary};
    border-color: ${theme.palette.secondary};
    color: white;

    :hover {
      background-color: ${darken(0.05, theme.palette.secondary)};
      border-color: ${darken(0.05, theme.palette.secondary)};
      color: white;
    }

    :active {
      background-color: ${darken(0.1, theme.palette.secondary)};
      border-color: ${darken(0.1, theme.palette.secondary)};
    }
  `}

  ${({ danger, theme }) => danger && css`
    background-color: ${theme.palette.red};
    border-color: ${theme.palette.red};
    color: white;

    :hover {
      background-color: ${darken(0.05, theme.palette.red)};
      border-color: ${darken(0.05, theme.palette.red)};
      color: white;
    }

    :active {
      background-color: ${darken(0.1, theme.palette.red)};
      border-color: ${darken(0.1, theme.palette.red)};
    }
  `}
`;

Button.propTypes = {
  block: PropTypes.bool,
  primary: PropTypes.bool,
  raised: PropTypes.bool,
  size: SizePropType,
  type: PropTypes.string,
};

Button.defaultProps = {
  block: false,
  primary: false,
  raised: false,
  size: undefined,
  theme: defaultTheme,
  type: 'button',
};

export default Button;
