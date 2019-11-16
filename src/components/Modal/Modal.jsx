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
`;

const ModalWindow = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 0 auto;
  padding: 1em;
  max-height: 90%;
  max-width: 90%;
`;

ModalWindow.defaultProps = {
  theme: defaultTheme,
};

function Modal({
  children,
  isOpen,
  onClose,
  onOpen,
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

  return (
    <ModalContext.Provider value={{ open, close }}>
      {trigger}
      {showModal && ReactDOM.createPortal(
        (
          <ModalBackground
            onClick={handleBackgroundClick}
            ref={backgroundEl}
          >
            <ModalWindow>
              {children}
            </ModalWindow>
          </ModalBackground>
        ),
        domNode,
      )}
    </ModalContext.Provider>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  trigger: PropTypes.node,
};

Modal.defaultProps = {
  isOpen: false,
  onClose: () => {},
  onOpen: () => {},
  trigger: undefined,
};

Modal.Context = ModalContext;

export default Modal;
