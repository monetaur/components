import PropTypes from 'prop-types';
import styled from 'styled-components';
import ColorPropType from '../../prop-types/color';
import SizePropType from '../../prop-types/size';
import styleControlOuter from '../../utils/styleControlOuter';
import styleControlInner from '../../utils/styleControlInner';
import { withTheme } from '../ThemeProvider';

const Input = withTheme(styled.input`
  ${(props) => styleControlInner(props)}
  ${(props) => styleControlOuter(props)}

  ::placeholder {
    color: ${({ theme }) => theme.palette.placeholderColor};
  }
`);

Input.propTypes = {
  block: PropTypes.bool,
  color: ColorPropType,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  raised: PropTypes.bool,
  required: PropTypes.bool,
  size: SizePropType,
  type: PropTypes.string,
};

Input.defaultProps = {
  block: false,
  color: undefined,
  name: undefined,
  placeholder: undefined,
  raised: false,
  required: undefined,
  size: undefined,
  type: 'text',
};

export default Input;
