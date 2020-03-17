import React from 'react';
import { ThemeProvider as RawThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../../themes/default';

function ThemeProvider({ children, theme }) {
  return (
    <RawThemeProvider theme={theme}>{children}</RawThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.shape(),
};

ThemeProvider.defaultProps = {
  children: undefined,
  theme: defaultTheme,
};

export default ThemeProvider;
