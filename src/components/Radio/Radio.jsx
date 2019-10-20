import React, { useMemo, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
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

  ${({ block }) => block && css`
    + label {
      display: block;
    }
  `}

  + label {
    color: ${({ theme }) => theme.palette.mutedTextColor};
    line-height: ${({ theme }) => theme.lineHeight};
    margin-right: 0.5em;
  }

  + label:before {
    background-color: white;
    content: '';
    border-color: ${({ theme }) => theme.forms.borderColor};
    border-style: solid;
    border-width: 1px;
    border-radius: 50%;
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

function Radio({
  block,
  children,
  id,
  name,
  required,
  value,
}) {
  const htmlFor = useMemo(() => id || generateId(), [id]);

  return (
    <Fragment>
      <Input block={block} id={htmlFor} name={name} required={required} type="radio" value={value} />
      <label htmlFor={htmlFor}>{children}</label>
    </Fragment>
  );
}

Radio.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  required: PropTypes.bool,
};

Radio.defaultProps = {
  block: false,
  children: undefined,
  id: undefined,
  value: undefined,
  required: false,
};

export default Radio;
