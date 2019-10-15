import { css } from 'styled-components';
import { darken } from 'polished';
import removeUnit from './removeUnit';

function calculateFormControlHeight(theme) {
  const paddingVertical = removeUnit(theme.forms.paddingVertical);
  return theme.lineHeight + (2 * paddingVertical);
}

const styleControlInner = ({
  clickable,
  color,
  raised,
  theme,
}) => css`
  background-color: white;
  border-color: ${theme.forms.borderColor};
  border-style: solid;
  border-width: 1px;
  border-radius: ${theme.borderRadius};
  font-family: inherit;
  font-size: inherit;
  line-height: ${theme.lineHeight};
  min-height: calc(${calculateFormControlHeight(theme)}em + 2px);
  min-width: 200px;
  padding: ${`${theme.forms.paddingVertical} ${theme.forms.paddingHorizontal}`};
  transition: all 200ms;

  ${clickable && css`
    cursor: pointer;

    :active {
      box-shadow: inset ${theme.shadows.light};
    }
  `}

  ${color && css`
    border-color: ${theme.palette[color]};

    :hover {
      border-color: ${darken(0.2, theme.palette[color])};
    }
  `}

  ${raised && css`
    box-shadow: ${theme.shadows.light};
  `}

  :disabled {
    pointer-events: none;
    opacity: 0.6;
  }

  :focus {
    box-shadow: ${theme.shadows.focus};
    outline: none;
  }

  :hover {
    border-color: ${darken(0.2, theme.forms.borderColor)};
  }

  ::placeholder {
    color: ${theme.palette.placeholderColor};
  }
`;

export default styleControlInner;
