import { Text, Icon, Link } from "@chakra-ui/react";

const ContactLink = ({ to, icon, text }) => {
  return (
    <Link
      href={to}
      isExternal
      display="flex"
      alignItems="center"
      _hover={{
        textDecoration: "none",
        color: "gray.300",
      }}
    >
      <Icon as={icon} />
      <Text ml={1}>{text}</Text>
    </Link>
  );
};

export default ContactLink;
