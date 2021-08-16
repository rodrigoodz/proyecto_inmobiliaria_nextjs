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
import ContactButton from "./ContactButton";

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
        <ModalHeader>
          <Text fontSize="sm">
            Tipo: {estate.tipo?.toLowerCase()} | Codigo: {estate.id}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>qweqwwqewqewqe</Text>
          <ContactButton id={estate.id} domicilio={estate.domicilio} />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="purple" onClick={onClose}>
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EstateModal;
