import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import defaultTheme from '../../../themes/default';

const Form = styled.form`
  padding: calc(2 * ${({ theme }) => theme.gridGutter}) 0;
`;

Form.defaultProps = {
  theme: defaultTheme,
};

const Field = styled.div`
  display: inline-block;
  vertical-align: baseline;

  ${({ block }) => block && css`
    display: block;
    margin-bottom: 1em;
  `}
`;

Field.propTypes = {
  block: PropTypes.bool,
};

Field.defaultProps = {
  block: true,
};

Form.Field = Field;

export default Form;
