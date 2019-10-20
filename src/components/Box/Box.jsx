import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import ColorPropType from '../../prop-types/color';
import defaultTheme from '../../../themes/default';

const Box = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  border-style: solid;
  border-width: ${({ bordered }) => (bordered ? '1px' : 0)};
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
  overflow: hidden;

  ${({ color, filled, theme }) => color && css`
    border-color: ${theme.palette[color]};
    ${filled && css`
      background-color: ${theme.palette[color]};
      ${![theme.palette.transparent, theme.palette.yellow].includes(color) && css`
        color: white;
      `};
    `}
  `}

  ${({ raised }) => raised && css`
    box-shadow: ${({ theme }) => theme.shadows.light};
  `}

  ${({ padded }) => padded && css`
    padding: 1em;
  `}
`;

Box.propTypes = {
  block: PropTypes.bool,
  bordered: PropTypes.bool,
  color: ColorPropType,
  filled: PropTypes.bool,
  padded: PropTypes.bool,
  raised: PropTypes.bool,
};

Box.defaultProps = {
  block: false,
  bordered: true,
  color: undefined,
  filled: false,
  padded: true,
  raised: false,
  theme: defaultTheme,
};

export default Box;
