import styled from 'styled-components';
import defaultTheme from '../../../themes/default';

const Label = styled.label`
  color: ${({ theme }) => theme.palette.mutedTextColor};
  display: block;
  line-height: ${({ theme }) => theme.lineHeight};
`;

Label.defaultProps = {
  theme: defaultTheme,
};

export default Label;
