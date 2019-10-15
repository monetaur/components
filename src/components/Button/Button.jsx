import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import SizePropType from '../../prop-types/size';
import styleControlOuter from '../../utils/styleControlOuter';
import styleControlInner from '../../utils/styleControlInner';
import { withTheme } from '../ThemeProvider';

const Button = withTheme(styled.button`
  ${(props) => styleControlInner({ ...props, clickable: true })}
  ${(props) => styleControlOuter(props)}

  ${({ primary, theme }) => primary && css`
    background-color: ${theme.palette.primary};
    border-color: ${theme.palette.primary};
    color: white;

    :hover {
      background-color: ${darken(0.05, theme.palette.primary)};
      border-color: ${darken(0.05, theme.palette.primary)};
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
    }

    :active {
      background-color: ${darken(0.1, theme.palette.secondary)};
      border-color: ${darken(0.1, theme.palette.secondary)};
    }
  `}
`);

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
  type: 'button',
};

export default Button;
