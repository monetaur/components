import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import SizePropType from '../../prop-types/size';
import styleControlInner from '../../utils/styleControlInner';
import styleControlOuter from '../../utils/styleControlOuter';
import removeUnit from '../../utils/removeUnit';
import defaultTheme from '../../../themes/default';

function getOptionValue(option) {
  const isValue = typeof option === 'string' || typeof option === 'number';
  return isValue ? option : option.value;
}

function getOptionLabel(option) {
  const isValue = typeof option === 'string' || typeof option === 'number';
  return isValue ? option : option.label;
}

const DropdownContainer = styled.div`
  ${(props) => styleControlOuter(props)}
`;

DropdownContainer.defaultProps = {
  theme: defaultTheme,
};

const DropdownTrigger = styled.button`
  ${(props) => styleControlInner({ ...props, clickable: true })}
  color: ${({ hasValue, theme }) => (hasValue ? theme.palette.gray : theme.palette.placeholder)};
  display: block;
  padding-right: ${({ theme }) => 2 * removeUnit(theme.forms.paddingHorizontal)}em;
  text-align: inherit;
  width: 100%;

  :after {
    content: '\u25BE';
    position: absolute;
    top: ${({ theme }) => theme.forms.paddingVertical};
    right: ${({ theme }) => theme.forms.paddingHorizontal};
    transform: scaleX(2)${({ isExpanded }) => isExpanded && ' rotate(180deg)'};
  }
`;

DropdownTrigger.propTypes = {
  isExpanded: PropTypes.bool,
  hasValue: PropTypes.bool,
};

DropdownTrigger.defaultProps = {
  isExpanded: false,
  hasValue: false,
  theme: defaultTheme,
};

const DropdownList = styled.ul`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.forms.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: inset 0 -10px 10px -10px rgba(0, 0, 0, 0.2);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  list-style: none;
  margin-top: 0.5em;
  margin-bottom: 0;
  max-height: 10em;
  overflow: scroll;
  padding-left: 0;
  position: absolute;
  width: 100%;
  z-index: 1;

  :focus {
    box-shadow: ${({ theme }) => theme.shadows.focus};
    outline: none;
  }
`;

DropdownList.propTypes = {
  isOpen: PropTypes.bool,
};

DropdownList.defaultProps = {
  isOpen: false,
  theme: defaultTheme,
};

const DropdownOption = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.forms.borderColor};
  color: ${({ theme }) => theme.palette.gray};
  cursor: pointer;
  padding: 0.8em 1.4em;

  ${({ highlighted }) => highlighted && css`
    background-color: rgba(0, 0, 0, 0.05);
  `}

  :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  :active {
    background-color: rgba(0, 0, 0, 0.1);
  }

  :last-child {
    border-bottom: 0;
  }
`;

DropdownOption.defaultProps = {
  theme: defaultTheme,
};

function Dropdown({
  block,
  options,
  placeholder,
  raised,
  size,
  value: initialValue,
}) {
  const [value, setValue] = useState(initialValue);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const containerElement = useRef(null);
  const triggerElement = useRef(null);
  const selectedOption = options.find((option) => getOptionValue(option) === value);
  const triggerLabel = (selectedOption && getOptionLabel(selectedOption)) || placeholder;

  const handleTriggerClick = useCallback((e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  }, [isOpen]);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
    setHighlightedIndex(-1);
  }, []);

  const optionClickHandlers = useMemo(() => options.map((option) => (e) => {
    e.preventDefault();
    setValue(getOptionValue(option));
    closeDropdown();
    triggerElement.current.focus();
  }), [closeDropdown, options.length]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (highlightedIndex < (options.length - 1)) {
        setHighlightedIndex(highlightedIndex + 1);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (highlightedIndex > 0) {
        setHighlightedIndex(highlightedIndex - 1);
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const highlightedOption = options[highlightedIndex];
      if (highlightedOption) {
        setValue(getOptionValue(highlightedOption));
        closeDropdown();
        triggerElement.current.focus();
      }
    }
  }, [closeDropdown, highlightedIndex, options]);

  const handleClickOutside = useCallback((e) => {
    if (containerElement.current && !containerElement.current.contains(e.target)) {
      closeDropdown();
    }
  }, [closeDropdown]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <DropdownContainer block={block} ref={containerElement} size={size}>
      <DropdownTrigger
        isExpanded={isOpen}
        onClick={handleTriggerClick}
        hasValue={!!value}
        raised={raised}
        ref={triggerElement}
        type="button"
      >
        {triggerLabel}
      </DropdownTrigger>
      <DropdownList
        isOpen={isOpen}
        onKeyDown={handleKeyDown}
        role="listbox"
        tabIndex="0"
      >
        {options.map((option, i) => (
          <DropdownOption
            highlighted={getOptionValue(option) === value || i === highlightedIndex}
            key={getOptionValue(option)}
            onClick={optionClickHandlers[i]}
          >
            {getOptionLabel(option)}
          </DropdownOption>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
}

Dropdown.propTypes = {
  block: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOf([
      PropTypes.string,
      PropTypes.number,
    ]),
    value: PropTypes.oneOf([
      PropTypes.string,
      PropTypes.number,
    ]),
  })),
  placeholder: PropTypes.string,
  raised: PropTypes.bool,
  size: SizePropType,
  value: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Dropdown.defaultProps = {
  block: false,
  options: [],
  placeholder: undefined,
  raised: false,
  size: undefined,
  value: undefined,
};

export default Dropdown;
