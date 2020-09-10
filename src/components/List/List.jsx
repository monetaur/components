import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import defaultTheme from '../../../themes/default';

const List = styled.ul`
  border-radius: ${({ theme }) => theme.borderRadius};
  list-style: none;
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 0;

  ${({ block }) => !block && css`
    display: inline-block;
    vertical-align: middle;
  `}

  ${({ bordered, theme }) => bordered && css`
    border: 1px solid ${theme.forms.borderColor};

    > li {
      border-bottom: 1px solid ${theme.forms.borderColor};
    }

    > li:last-child {
      border-bottom: 0;
    }
  `}
`;

List.propTypes = {
  block: PropTypes.bool,
  bordered: PropTypes.bool,
};

List.defaultProps = {
  block: false,
  bordered: false,
  theme: defaultTheme,
};

const Item = styled.li`
  line-height: ${({ theme }) => theme.lineHeight};

  ${({ padded, theme }) => padded && css`
    padding: ${theme.forms.paddingVertical} ${theme.forms.paddingHorizontal};
  `}
`;

Item.propTypes = {
  padded: PropTypes.bool,
};

Item.defaultProps = {
  padded: false,
  theme: defaultTheme,
};

List.Item = Item;

export default List;
