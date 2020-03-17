import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../../../themes/default';
import SizePropType from '../../prop-types/size';

const ModalContext = React.createContext({
  close: () => {},
  open: () => {},
});

const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
`;

const Sizes = {
  xs: '300px',
  sm: '500px',
  md: '700px',
  lg: '900px',
  xl: '1100px',
};

const ModalWindow = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 0 auto;
  overflow: auto;
  padding: 1em 2em;
  max-height: 90%;
  width: 90%;
  max-width: ${({ size }) => Sizes[size] || Sizes.md};
`;

ModalWindow.defaultProps = {
  theme: defaultTheme,
};

function Modal({
  children,
  isOpen,
  onClose,
  onOpen,
  size,
  trigger,
}) {
  const backgroundEl = useRef(null);
  const isFirstRender = useRef(true);
  const [showModal, setShowModal] = useState(isOpen);
  const domNode = document.body;

  const open = useCallback(() => {
    setShowModal(true);
  }, []);

  const close = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleBackgroundClick = useCallback((e) => {
    if (e.target === backgroundEl.current) {
      close();
    }
  }, [close]);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (showModal) {
      onOpen();
    } else {
      onClose();
    }
  }, [onClose, onOpen, showModal]);

  const context = { open, close };

  return (
    <ModalContext.Provider value={context}>
      {typeof trigger === 'function' ? trigger(context) : trigger}
      {showModal && ReactDOM.createPortal(
        (
          <ModalBackground
            onClick={handleBackgroundClick}
            ref={backgroundEl}
          >
            <ModalWindow size={size}>
              {typeof children === 'function' ? children(context) : children}
            </ModalWindow>
          </ModalBackground>
        ),
        domNode,
      )}
    </ModalContext.Provider>
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  size: SizePropType,
  trigger: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]),
};

Modal.defaultProps = {
  isOpen: false,
  onClose: () => {},
  onOpen: () => {},
  size: undefined,
  trigger: undefined,
};

Modal.Context = ModalContext;

export default Modal;
