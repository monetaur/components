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
`);

Input.propTypes = {
  block: PropTypes.bool,
  color: ColorPropType,
  raised: PropTypes.bool,
  size: SizePropType,
  type: PropTypes.string,
};

Input.defaultProps = {
  block: false,
  color: undefined,
  raised: false,
  size: undefined,
  type: 'text',
};

export default Input;
