const defaultTheme = {
  borderRadius: '0.3em',
  breakpoints: {
    tablet: 768,
    desktop: 922,
    wide: 1200,
    extraWide: 1441,
  },
  forms: {
    borderColor: '#ced4da',
    minWidth: '260px',
    paddingVertical: '0.4em',
    paddingHorizontal: '1.2em',
  },
  gridColumns: 12,
  gridGutter: '0.5em',
  lineHeight: 1.5,
  palette: {
    primary: '#21C5B4',
    secondary: '#7B94B1',
    black: 'rgba(0, 0, 0, 0.87)',
    gray: '#666',
    red: '#c52132',
    green: '#21c562',
    blue: '#2184c5',
    purple: '#7c4dff',
    pink: '#ff4081',
    white: 'white',
    yellow: 'yellow',
    transparent: 'transparent',
  },
  text: {
    colors: {
      base: 'rgba(0, 0, 0, 0.87)',
      muted: '#666',
      placeholder: '#aaa',
    },
    sizes: {
      xs: '0.6em',
      sm: '0.8em',
      lg: '1.3em',
      xl: '1.8em',
    },
  },
  sizes: {
    xs: '0.6em',
    sm: '0.8em',
    lg: '1.4em',
    xl: '1.8em',
  },
  shadows: {
    focus: '0 0 0 3px rgba(0, 123, 255, 0.25)',
    light: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
    heavy: '0 4px 16px 0 rgba(0, 0, 0, 0.14)',
  },
  zIndexes: {
    bottom: 20,
    middle: 30,
    top: 40,
  },
};

module.exports = defaultTheme;