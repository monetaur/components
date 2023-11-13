import React, { useMemo, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from '../Label';
import defaultTheme from '../../../themes/default';

function generateId(chars = 5) {
  let text = '';
  let remainingChars = chars;
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  while (remainingChars) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    remainingChars -= 1;
  }

  return text;
}

const Input = styled.input`
  display: none;

  + label {
    margin-right: 0.5em;
  }

  + label:before {
    background-color: white;
    content: '';
    border-color: ${({ theme }) => theme.forms.borderColor};
    border-style: solid;
    border-width: 1px;
    border-radius: ${({ theme }) => theme.borderRadius};
    display: inline-block;
    height: 1em;
    margin-right: 0.5em;
    width: 1em;
  }

  :checked + label:before {
    background-color: ${({ theme }) => theme.palette.secondary};
  }
`;

Input.defaultProps = {
  theme: defaultTheme,
};

function Checkbox({
  children,
  id,
  name,
  required,
  value,
}) {
  const htmlFor = useMemo(() => id || generateId(), [id]);

  return (
    <Fragment>
      <Input id={htmlFor} name={name} required={required} type="checkbox" value={value} />
      <Label htmlFor={htmlFor}>{children}</Label>
    </Fragment>
  );
}

Checkbox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

Checkbox.defaultProps = {
  children: undefined,
  id: undefined,
  name: undefined,
  required: undefined,
  value: undefined,
};

export default Checkbox;
