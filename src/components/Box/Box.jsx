import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import ColorPropType from '../../prop-types/color';
import defaultTheme from '../../../themes/default';

const Box = styled.div`
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

  ${({ padded }) => padded && css`
    padding: 1em;
  `}

  ${({ raised }) => raised && css`
    box-shadow: ${({ theme }) => theme.shadows.light};
  `}

  ${({ rounded }) => rounded && css`
    border-radius: ${({ theme }) => theme.borderRadius};
  `}

  ${({ stretch }) => stretch && css`
    height: 100%;
  `}
`;

Box.propTypes = {
  block: PropTypes.bool,
  bordered: PropTypes.bool,
  color: ColorPropType,
  filled: PropTypes.bool,
  padded: PropTypes.bool,
  raised: PropTypes.bool,
  rounded: PropTypes.bool,
  stretch: PropTypes.bool,
};

Box.defaultProps = {
  block: true,
  bordered: true,
  color: undefined,
  filled: false,
  padded: true,
  raised: false,
  theme: defaultTheme,
  rounded: true,
  stretch: false,
};

export default Box;
