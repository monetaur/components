import React from 'react';
import styled from 'styled-components';

function omit(obj, fields) {
  const shallowCopy = {
    ...obj,
  };
  for (let i = 0; i < fields.length; i += 1) {
    const key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}

/**
 * Enhances the styled-components styled() constructor by allowing you to
 * blacklist props that should not be rendered in the DOM. The styled-components
 * package allows certain props through, like 'color', which we don't want to
 * appear in the DOM.
 *
 * See https://github.com/styled-components/styled-components/issues/439
 *
 * @param {String|Component} Element A React Element
 * @param {Array<String>} blacklist Props that should not be rendred to the DOM
 */
export default function styledWithoutProps(Element, blacklist) {
  return styled(React.forwardRef((props, ref) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Element ref={ref} {...omit(props, ['theme', ...blacklist])} />
  )));
}
