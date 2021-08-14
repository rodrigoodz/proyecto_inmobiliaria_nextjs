import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
} from "@chakra-ui/react";

const EstateModal = ({ isOpen, onClose, estate }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      motionPreset="slideInBottom"
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Propiedad Codigo: {estate.id}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>qweqwwqewqewqe</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="purple" mr={3} onClick={onClose}>
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EstateModal;
