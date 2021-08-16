import { Flex, Wrap } from "@chakra-ui/react";
import { ImWhatsapp, ImInstagram } from "react-icons/im";
import ContactLink from "./ContactLink";

const ContactInfo = () => {
  return (
    <Flex bg="secondary" justify="flex-end" color="white" px={4} fontSize="sm">
      <Wrap>
        <ContactLink
          to={`https://api.whatsapp.com/send?phone=543456450230&text=${encodeURIComponent(
            "Hola Melina, me gustaría contactarme con vos."
          )}`}
          icon={ImWhatsapp}
          text="(3456) 6450230"
        />
        <ContactLink
          to={`https://www.instagram.com/roncaglianegociosinmobiliarios/`}
          icon={ImInstagram}
          text="@roncaglianegociosinmobiliarios"
        />
      </Wrap>
    </Flex>
  );
};

export default ContactInfo;
