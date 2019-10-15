import React, { useContext } from 'react';
import { action } from '@storybook/addon-actions';
import Modal from './Modal';

export default {
  title: 'Modal',
};

function Trigger() {
  const { open } = useContext(Modal.Context);

  return (
    <button onClick={open} type="button">Open Modal</button>
  );
}

function ModalContent() {
  const { close } = useContext(Modal.Context);

  return (
    <div>
      <h1>Modal Content</h1>
      <p>This is the modal content.</p>
      <button onClick={close} type="button">Close Modal</button>
    </div>
  );
}

export const withATrigger = () => (
  <Modal
    onClose={action('Modal Closed')}
    onOpen={action('Modal Opened')}
    trigger={(
      <Trigger />
    )}
  >
    <ModalContent />
  </Modal>
);

export const withNoTrigger = () => (
  <Modal
    isOpen
    onClose={action('Modal Closed')}
    onOpen={action('Modal Opened')}
  >
    <ModalContent />
  </Modal>
);
