import { Flex, Wrap } from "@chakra-ui/react";
import { ImWhatsapp, ImInstagram } from "react-icons/im";
import ContactLink from "./ContactLink";

const ContactInfo = () => {
  return (
    <Flex bg="secondary" justify="flex-end" color="white" px={4} fontSize="sm">
      <Wrap>
        <ContactLink
          to={`https://api.whatsapp.com/send?phone=543456000000&text=${encodeURIComponent(
            "Hola Melina, me gustaría contactarme con vos."
          )}`}
          icon={ImWhatsapp}
          text="(3456) 000000"
        />
        <ContactLink
          to={`https://www.instagram.com/loremipsum/`}
          icon={ImInstagram}
          text="@loremipsum"
        />
      </Wrap>
    </Flex>
  );
};

export default ContactInfo;
