import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import ColorPropType from '../../prop-types/color';
import { withTheme } from '../ThemeProvider';

const Box = withTheme(styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  border-style: solid;
  border-width: ${({ bordered }) => (bordered ? '1px' : 0)};
  display: ${({ block }) => (block ? 'block' : 'inline-block')};

  ${({ color, theme }) => color && css`
    border-color: ${theme.palette[color]};
  `}

  ${({ raised }) => raised && css`
    box-shadow: ${({ theme }) => theme.shadows.light};
  `}

  ${({ padded }) => padded && css`
    padding: 1em;
  `}
`);

Box.propTypes = {
  block: PropTypes.bool,
  bordered: PropTypes.bool,
  color: ColorPropType,
  padded: PropTypes.bool,
};

Box.defaultProps = {
  block: false,
  bordered: true,
  color: undefined,
  padded: true,
};

export default Box;
