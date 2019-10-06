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
    background-color: ${theme.palette.primaryColor};
    border-color: ${theme.palette.primaryColor};
    color: white;

    :hover {
      background-color: ${darken(0.05, theme.palette.primaryColor)};
      border-color: ${darken(0.05, theme.palette.primaryColor)};
    }

    :active {
      background-color: ${darken(0.1, theme.palette.primaryColor)};
      border-color: ${darken(0.1, theme.palette.primaryColor)};
    }
  `}

  ${({ secondary, theme }) => secondary && css`
    background-color: ${theme.palette.secondaryColor};
    border-color: ${theme.palette.secondaryColor};
    color: white;

    :hover {
      background-color: ${darken(0.05, theme.palette.secondaryColor)};
      border-color: ${darken(0.05, theme.palette.secondaryColor)};
    }

    :active {
      background-color: ${darken(0.1, theme.palette.secondaryColor)};
      border-color: ${darken(0.1, theme.palette.secondaryColor)};
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
