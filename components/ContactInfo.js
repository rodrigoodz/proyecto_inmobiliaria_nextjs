import { Text, Flex, Icon, Link, Wrap } from "@chakra-ui/react";
import { ImWhatsapp, ImInstagram } from "react-icons/im";

const ContactInfo = () => {
  return (
    <Flex bg="secondary" justify="flex-end" color="white" px={4} fontSize="sm">
      <Wrap>
        <Link
          href={`https://api.whatsapp.com/send?phone=543456450230&text=${encodeURIComponent(
            "Hola Melina, me gustaría contactarme con vos."
          )}`}
          isExternal
          display="flex"
          alignItems="center"
          _hover={{
            textDecoration: "none",
          }}
        >
          <Icon as={ImWhatsapp} />
          <Text ml={1}>(3456) 6450230</Text>
        </Link>
        <Link
          href="https://www.instagram.com/roncaglianegociosinmobiliarios/"
          isExternal
          display="flex"
          alignItems="center"
          _hover={{
            textDecoration: "none",
          }}
        >
          <Icon as={ImInstagram} ml={[0, 4]} />
          <Text ml={1}>@roncaglianegociosinmobiliarios</Text>
        </Link>
      </Wrap>
    </Flex>
  );
};

export default ContactInfo;
