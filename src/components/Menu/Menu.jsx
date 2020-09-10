import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import List from '../List';
import defaultTheme from '../../../themes/default';

const MenuLink = styled.a`
  color: ${({ theme }) => theme.text.colors.base};
  display: block;
  padding: 0.5em 1em;

  &.active {
    background-color: rgba(0, 0, 0, 0.05);
  }

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: ${({ theme }) => theme.text.colors.base};
  }
`;

MenuLink.defaultProps = {
  theme: defaultTheme,
};

function MenuItem(props) {
  return (
    <List.Item>
      <MenuLink {...props} />
    </List.Item>
  );
}

const Menu = styled(List)`
  ${({ horizontal }) => horizontal && css`
    > ${List.Item} {
      display: inline-block;
      vertical-align: middle;
    }
  `}
`;

Menu.propTypes = {
  horizontal: PropTypes.bool,
};

Menu.defaultProps = {
  horizontal: false,
};

Menu.Item = MenuItem;

export default Menu;
