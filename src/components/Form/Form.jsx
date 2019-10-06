import styled, { css } from 'styled-components';

const Form = styled.form`

`;

const Field = styled.div`
  display: inline-block;
  vertical-align: baseline;

  ${({ block }) => block && css`
    display: block;
    margin-bottom: 1em;
  `}
`;

Form.Field = Field;

export default Form;
