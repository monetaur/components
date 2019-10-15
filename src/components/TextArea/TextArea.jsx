import React, { useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styleControlInner from '../../utils/styleControlInner';
import styleControlOuter from '../../utils/styleControlOuter';
import { withTheme } from '../ThemeProvider';
import ColorPropType from '../../prop-types/color';
import SizePropType from '../../prop-types/size';

const StyledTextArea = withTheme(styled.textarea`
  ${(props) => styleControlInner(props)}
  ${(props) => styleControlOuter(props)}
`);

function TextArea({
  autoHeight,
  block,
  color,
  name,
  placeholder,
  raised,
  required,
  size,
}) {
  const textAreaElement = useRef(null);

  const updateHeight = useCallback(() => {
    const el = textAreaElement.current;

    if (autoHeight) {
      const {
        minHeight,
        borderBottomWidth,
        borderTopWidth,
      } = window.getComputedStyle(el);
      const minHeightNum = parseFloat(minHeight);
      const borders = parseFloat(borderTopWidth) + parseFloat(borderBottomWidth);

      el.style.height = 'auto';
      el.style.height = `${Math.max(minHeightNum, el.scrollHeight + borders)}px`;
      el.style.resize = 'none';
    } else {
      el.style.height = null;
      el.style.resize = null;
    }
  }, [autoHeight]);

  useEffect(() => {
    updateHeight();
  }, [updateHeight]);

  return (
    <StyledTextArea
      block={block}
      color={color}
      name={name}
      onChange={updateHeight}
      placeholder={placeholder}
      raised={raised}
      ref={textAreaElement}
      required={required}
      size={size}
    />
  );
}

TextArea.propTypes = {
  autoHeight: PropTypes.bool,
  block: PropTypes.bool,
  color: ColorPropType,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  raised: PropTypes.bool,
  required: PropTypes.bool,
  size: SizePropType,
};

TextArea.defaultProps = {
  autoHeight: true,
  block: false,
  color: undefined,
  name: undefined,
  placeholder: undefined,
  raised: false,
  required: undefined,
  size: undefined,
};

export default TextArea;
