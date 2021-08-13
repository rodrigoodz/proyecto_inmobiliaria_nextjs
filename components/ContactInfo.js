import { Text, Flex, Icon, Link, Wrap } from "@chakra-ui/react";
import { ImWhatsapp, ImInstagram } from "react-icons/im";

const ContactInfo = () => {
  return (
    <Flex bg="purple.900" justify="flex-end" color="white" px={4} fontSize="sm">
      <Wrap>
        <Link
          href="https://api.whatsapp.com/send?phone=543456450230&text=Hola,%20te%20estoy%20contactando%20desde%20tu%20sitio%20web"
          isExternal
          display="flex"
          alignItems="center"
        >
          <Icon as={ImWhatsapp} />
          <Text ml={1}>(3456) 659938</Text>
        </Link>
        <Link
          href="https://www.instagram.com/roncaglianegociosinmobiliarios/"
          isExternal
          display="flex"
          alignItems="center"
        >
          <Icon as={ImInstagram} ml={[0, 4]} />
          <Text ml={1}>@roncaglianegociosinmobiliarios</Text>
        </Link>
      </Wrap>
    </Flex>
  );
};

export default ContactInfo;
