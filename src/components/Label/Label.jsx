import styled from 'styled-components';
import defaultTheme from '../../../themes/default';

const Label = styled.label`
  color: ${({ theme }) => theme.text.colors.muted};
  display: block;
  line-height: ${({ theme }) => theme.lineHeight};
`;

Label.defaultProps = {
  theme: defaultTheme,
};

export default Label;
