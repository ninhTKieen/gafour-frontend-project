import React from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader w="100%" textAlign="center">
            Unblock
          </ModalHeader>
          <ModalBody>Are you sure want to unblock this person ?</ModalBody>

          <ModalFooter w="100%" justifyContent="center">
            <Button onClick={onClose} marginRight="10px" w="45%">
              Close
            </Button>
            <Button bg="#6fbe44" color="#fff" onClick={onClose} w="45%">
              Unblock
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal;
