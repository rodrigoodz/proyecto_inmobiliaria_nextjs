import { Link, Button, Icon, Text } from "@chakra-ui/react";
import { ImWhatsapp } from "react-icons/im";

const ContactButton = ({ id, domicilio }) => {
  return (
    <Link
      href={`https://api.whatsapp.com/send?phone=543456450230&text=${encodeURIComponent(
        `Hola Melina, estoy interesado/a en la propiedad ID=${id} ubicada en ${domicilio}`
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
  );
};

export default ContactButton;
