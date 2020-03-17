import React, {
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import defaultTheme from '../../../themes/default';

const MenuContext = React.createContext({
  close: () => {},
  isOpen: false,
  open: () => {},
  toggle: () => {},
});

const MenuButton = styled.div`
  position: absolute;
  left: ${({ side }) => (side === 'left' ? '1em' : 'auto')};
  right: ${({ side }) => (side === 'right' ? '1em' : 'auto')};
  top: 10px;
  width: 40px;
`;

const SidebarContainer = styled.div`
  background-color: white;
  flex-grow: 0;
  flex-shrink: 0;
  height: 100%;
  overflow: auto;
  position: fixed;
  top: 0;
  width: ${({ width }) => width};
  z-index: ${({ theme }) => theme.zIndexes.top};

  ${({ side, width }) => (side === 'left' ? css`
    left: -${width};
    transition: left 200ms;
  ` : css`
    right: -${width};
    transition: right 200ms;
  `)}

  ${({ primary }) => primary && css`
    background-color: ${({ theme }) => theme.palette.primary};
  `}

  ${({ isOpen, side }) => isOpen && (side === 'left' ? css`
    left: 0;
  ` : css`
    right: 0;
  `)}

  ${({ raised }) => raised && css`
    box-shadow: ${({ theme }) => theme.shadows.light};
  `}

  ${({ theme }) => theme.breakpoints.tablet && css`
    @media only screen and (min-width: ${theme.breakpoints.tablet}px) {
      left: 0;
      right: 0;
      position: relative;
      z-index: ${theme.zIndexes.bottom};
    }
  `}
  }
`;

SidebarContainer.propTypes = {
  isOpen: PropTypes.bool,
  primary: PropTypes.bool,
  side: PropTypes.oneOf(['left', 'right']),
  width: PropTypes.string,
};

SidebarContainer.defaultProps = {
  isOpen: false,
  primary: false,
  side: 'left',
  theme: defaultTheme,
  width: '350px',
};

function Sidebar({ isOpen: initialIsOpen, side, ...rest }) {
  const { isOpen } = useContext(MenuContext);

  return (
    <SidebarContainer isOpen={isOpen === side} side={side} {...rest} />
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  side: PropTypes.oneOf(['left', 'right']),
};

Sidebar.defaultProps = {
  isOpen: false,
  side: 'left',
};

const Header = styled.div`
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows.light};
  flex-shrink: 0;
  height: 49px;
  overflow: auto;
  padding-left: calc(2 * ${({ theme }) => theme.gridGutter});
  padding-right: calc(2 * ${({ theme }) => theme.gridGutter});
  z-index: ${({ theme }) => theme.zIndexes.bottom};

  ${({ primary }) => primary && css`
    background-color: ${({ theme }) => theme.palette.primary};
    color: white;
  `}

  ${({ sticky }) => sticky && css`
    position: sticky;
    top: 0;
  `}

  ${({ mobileOnly, theme }) => theme.breakpoints.tablet && css`
    @media only screen and (min-width: ${theme.breakpoints.tablet}px) {
      ${mobileOnly && css`
        display: none;
      `}
      z-index: ${theme.zIndexes.middle};
    }
  `}
`;

Header.defaultProps = {
  theme: defaultTheme,
};

const Content = styled.div`
  background-color: #f5f5f5;
  flex-grow: 1;
  overflow: auto;

  ${({ root }) => root && css`
    display: flex;
    flex-direction: column;
    height: 100%;
  `}
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  display: ${({ active }) => (active ? 'block' : 'none')};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndexes.middle};

  ${({ theme }) => theme.breakpoints.tablet && css`
    @media only screen and (min-width: ${theme.breakpoints.tablet}px) {
      display: none;
    }
  `}
`;

Overlay.defaultProps = {
  theme: defaultTheme,
};

function Body({ children, ...rest }) {
  const { isOpen, toggle } = useContext(MenuContext);

  return (
    <Content root {...rest}>
      <Overlay active={isOpen} onClick={toggle} />
      {children}
    </Content>
  );
}

Body.propTypes = {
  children: PropTypes.node,
};

Body.defaultProps = {
  children: undefined,
};

const Bar = styled.div`
  display: block;
  width: 100%;
  height: 5px;
  border-radius: 2px;
  background-color: currentColor;

  & + & {
    margin-top: 5px;
  }
`;

function MenuToggle({ side }) {
  const { toggle } = useContext(MenuContext);

  const handleButtonClick = useCallback(() => {
    toggle(side);
  }, [side, toggle]);

  return (
    <MenuButton onClick={handleButtonClick} side={side}>
      <Bar />
      <Bar />
      <Bar />
    </MenuButton>
  );
}

MenuToggle.propTypes = {
  side: PropTypes.oneOf(['left', 'right']),
};

MenuToggle.defaultProps = {
  side: 'left',
};

const Layout = styled.div`
  display: flex;
  height: ${({ root }) => (root ? '100%' : 'auto')};
  flex-grow: 1;
  overflow: auto;
`;

Layout.defaultProps = {
  theme: defaultTheme,
};

function App({ location, ...rest }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openMenu = useCallback((side) => {
    setIsOpen(side);
  }, []);

  const toggleMenu = useCallback((side) => {
    setIsOpen(isOpen ? false : side);
  }, [isOpen]);

  useEffect(() => {
    if (location) {
      closeMenu();
    }
  }, [closeMenu, location]);

  return (
    <MenuContext.Provider
      value={{
        close: closeMenu,
        isOpen,
        open: openMenu,
        toggle: toggleMenu,
      }}
    >
      <Layout root {...rest} />
    </MenuContext.Provider>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.shape(),
  }),
};

App.defaultProps = {
  location: undefined,
};

App.Content = Content;

App.Sidebar = Sidebar;

App.Body = Body;

App.Header = Header;

App.Layout = Layout;

App.MenuToggle = MenuToggle;

export default App;
