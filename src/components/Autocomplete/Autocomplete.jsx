import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Input from '../Input';
import List from '../List';
import SizePropType from '../../prop-types/size';
import ColorPropType from '../../prop-types/color';
import defaultTheme from '../../../themes/default';

const AutocompleteContainer = styled.div`
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
  position: relative;
`;

const OptionsContainer = styled(List)`
  margin-top: 0.5em;

  ${({ size, theme }) => size && css`
    font-size: ${theme.sizes[size]};
  `}
`;

OptionsContainer.defaultProps = {
  block: true,
  bordered: true,
  theme: defaultTheme,
};

const Option = styled(List.Item)`
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  ${({ isSelected }) => isSelected && css`
    background-color: rgba(0, 0, 0, 0.1);
  `}
`;

Option.defaultProps = {
  padded: true,
};

function Autocomplete({
  block,
  color,
  name,
  options,
  placeholder,
  raised,
  size,
  type,
  value,
}) {
  const containerElement = useRef(null);
  const [selectedValue, setSelectedValue] = useState(value);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const optionClickHandlers = options.map((option) => () => {
    setSelectedValue(option);
    setShowSuggestions(false);
  });

  const hideOptions = useCallback(() => {
    setShowSuggestions(false);
  }, []);

  const showOptions = useCallback(() => {
    setShowSuggestions(true);
  }, []);

  const handleClickOutside = useCallback((e) => {
    if (containerElement.current && !containerElement.current.contains(e.target)) {
      hideOptions();
    }
  }, [hideOptions]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  return (
    <AutocompleteContainer
      block={block}
      ref={containerElement}
    >
      <Input
        autoComplete="off"
        block
        color={color}
        name={name}
        onFocus={showOptions}
        placeholder={placeholder}
        raised={raised}
        size={size}
        type={type}
        value={selectedValue}
      />
      {showSuggestions && !!options.length && (
        <OptionsContainer size={size}>
          {options.map((option, i) => (
            <Option
              isSelected={option === selectedValue}
              onMouseDown={optionClickHandlers[i]}
            >
              {option}
            </Option>
          ))}
        </OptionsContainer>
      )}
    </AutocompleteContainer>
  );
}

Autocomplete.propTypes = {
  block: PropTypes.bool,
  color: ColorPropType,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
  raised: PropTypes.bool,
  size: SizePropType,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Autocomplete.defaultProps = {
  block: false,
  color: undefined,
  name: undefined,
  options: [],
  placeholder: undefined,
  raised: false,
  size: undefined,
  type: undefined,
  value: undefined,
};

export default Autocomplete;
