import PropTypes from 'prop-types';
import styled from 'styled-components';
import ColorPropType from '../../prop-types/color';
import SizePropType from '../../prop-types/size';
import styleControlOuter from '../../utils/styleControlOuter';
import styleControlInner from '../../utils/styleControlInner';
import defaultTheme from '../../../themes/default';

function calculateFormControlHeight(theme) {
  const paddingVertical = theme.forms.paddingVertical.replace('em', '');
  return theme.lineHeight + (2 * paddingVertical);
}

const Select = styled.select`
  ${(props) => styleControlInner(props)}
  ${(props) => styleControlOuter(props)}
  cursor: pointer;
  height: calc(${({ theme }) => calculateFormControlHeight(theme)}em + 2px);
  text-align: inherit;

  :invalid {
    color: ${({ theme }) => theme.palette.placeholderColor}
  }
`;

Select.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.node,
  color: ColorPropType,
  name: PropTypes.string,
  raised: PropTypes.bool,
  required: PropTypes.bool,
  size: SizePropType,
};

Select.defaultProps = {
  block: false,
  children: undefined,
  color: undefined,
  name: undefined,
  raised: false,
  required: undefined,
  size: undefined,
  theme: defaultTheme,
};

export default Select;
