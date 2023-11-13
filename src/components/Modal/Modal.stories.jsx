import React, { useContext } from 'react';
import Modal from './Modal';
import { Sizes } from '../../prop-types/size';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    onClose: {
      action: 'Modal Closed',
    },
    onOpen: {
      action: 'Modal Opened',
    },
  },
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

export const withATrigger = (args) => (
  <Modal trigger={<Trigger />} {...args}>
    <ModalContent />
  </Modal>
);

withATrigger.argTypes = {
  size: {
    control: {
      type: 'select',
    },
    options: Object.values(Sizes),
  },
};

export const withNoTrigger = (args) => (
  <Modal {...args}>
    <ModalContent />
  </Modal>
);

withNoTrigger.argTypes = withATrigger.argTypes;
