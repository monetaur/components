import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import defaultTheme from '../../../themes/default';

const List = styled.ul`
  border-radius: ${({ theme }) => theme.borderRadius};
  list-style: none;
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 0;

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
  bordered: PropTypes.bool,
};

List.defaultProps = {
  bordered: false,
  theme: defaultTheme,
};

const Item = styled.li`
  ${({ padded }) => padded && css`
    padding: 1em;
  `}
`;

Item.propTypes = {
  padded: PropTypes.bool,
};

Item.defaultProps = {
  padded: false,
};

List.Item = Item;

export default List;
