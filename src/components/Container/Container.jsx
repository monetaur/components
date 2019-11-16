import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import defaultTheme from '../../../themes/default';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: calc(2 * ${({ theme }) => theme.gridGutter});
  padding-right: calc(2 * ${({ theme }) => theme.gridGutter});

  ${({ block, theme }) => !block && css`
    @media only screen and (min-width: ${theme.breakpoints.tablet}px) {
      width: ${theme.breakpoints.tablet}px;
    }

    @media only screen and (min-width: ${theme.breakpoints.desktop}px) {
      width: ${theme.breakpoints.desktop}px;
    }

    @media only screen and (min-width: ${theme.breakpoints.wide}px) {
      width: ${theme.breakpoints.wide}px;
    }
  `}
`;

Container.propTypes = {
  block: PropTypes.bool,
};

Container.defaultProps = {
  block: false,
  theme: defaultTheme,
};

export default Container;
