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
  Box,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import ContactButton from "./ContactButton";
import Image from "next/image";

const EstateModal = ({ isOpen, onClose, estate }) => {
  const images = [estate.img1, estate.img2, estate.img2];

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontSize="sm">
            Tipo: {estate.tipo?.toLowerCase()} | Codigo: {estate.id}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody backgroundColor="primary">
          <SimpleGrid columns={[1, 1, 2, 3]} spacing={4}>
            {images.map(
              (image, idx) =>
                image !== undefined &&
                image !== "null" && (
                  <Image
                    key={idx}
                    src={image}
                    width={500}
                    height={500}
                    alt={image}
                  />
                )
            )}
          </SimpleGrid>
          <Text>{estate.descripcion}</Text>
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
