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
  Icon,
  Link,
} from "@chakra-ui/react";
import { ImWhatsapp } from "react-icons/im";

const EstateModal = ({ isOpen, onClose, estate }) => {
  console.log(estate);
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
          <Link
            href={`https://api.whatsapp.com/send?phone=543456450230&text=${encodeURIComponent(
              `Hola Melina, estoy interesado/a en la propiedad ID=${estate.id} ubicada en ${estate.domicilio}`
            )}`}
            isExternal
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{
              textDecoration: "none",
            }}
          >
            <Button colorScheme="green">
              <Icon as={ImWhatsapp} />
              <Text mt={1} ml={2} fontWeight="light">
                Consulta esta propiedad por Whatsapp
              </Text>
            </Button>
          </Link>
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
