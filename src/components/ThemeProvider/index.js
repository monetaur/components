import { createTheming } from '@callstack/react-theme-provider';
import defaultTheme from '../../../themes/default';

export const { ThemeProvider, withTheme, useTheme } = createTheming(defaultTheme);

export default ThemeProvider;
