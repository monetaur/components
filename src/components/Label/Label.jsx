import styled from 'styled-components';
import { withTheme } from '../ThemeProvider';

const Label = withTheme(styled.label`
  color: ${({ theme }) => theme.palette.mutedTextColor};
  display: block;
  line-height: ${({ theme }) => theme.lineHeight};
`);

export default Label;
