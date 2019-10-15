import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { withTheme } from '../ThemeProvider';

function getWidth(size, columns) {
  return size === 'auto' ? size : `${size * (100 / columns)}%`;
}

const ColumnSizePropType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.oneOf(['auto']),
]);

const Column = withTheme(styled.div`
  width: 100%;

  ${({ xs, theme }) => xs && css`
    flex: ${xs === 'auto' ? 1 : 0} 0 ${getWidth(xs, theme.gridColumns)};
    width: ${getWidth(xs, theme.gridColumns)};
  `}

  ${({ sm, theme }) => theme.breakpoints.tablet && sm && css`
    @media only screen and (min-width: ${theme.breakpoints.tablet}px) {
      flex: ${sm === 'auto' ? 1 : 0} 0 ${getWidth(sm, theme.gridColumns)};
      width: ${getWidth(sm, theme.gridColumns)};
    }
  `}

  ${({ lg, theme }) => theme.breakpoints.desktop && lg && css`
    @media only screen and (min-width: ${theme.breakpoints.desktop}px) {
      flex: ${lg === 'auto' ? 1 : 0} 0 ${getWidth(lg, theme.gridColumns)};
      width: ${getWidth(lg, theme.gridColumns)};
    }
  `}

  ${({ xl, theme }) => theme.breakpoints.wide && xl && css`
    @media only screen and (min-width: ${theme.breakpoints.wide}px) {
      flex: ${xl === 'auto' ? 1 : 0} 0 ${getWidth(xl, theme.gridColumns)};
      width: ${getWidth(xl, theme.gridColumns)};
    }
  `}
`);

Column.propTypes = {
  xs: ColumnSizePropType,
  sm: ColumnSizePropType,
  lg: ColumnSizePropType,
  xl: ColumnSizePropType,
};

Column.defaultProps = {
  xs: undefined,
  sm: undefined,
  lg: undefined,
  xl: undefined,
};

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${({ padded }) => padded && css`
    margin-left: -1em;
    margin-right: -1em;

    > ${Column} {
      padding: 1em;
    }
  `}
`;

Grid.propTypes = {
  padded: PropTypes.bool,
};

Grid.defaultProps = {
  padded: false,
};

Grid.Column = Column;

export default Grid;
