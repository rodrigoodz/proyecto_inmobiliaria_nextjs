import { Box, Text } from "@chakra-ui/react";
import ContactInfo from "../components/ContactInfo";
import Navbar from "../components/Navbar";

export default function Assessment() {
  return (
    <Box
      backgroundColor="primary"
      minHeight="100vh"
      textAlign="center"
      userSelect="none"
    >
      <ContactInfo />
      <Navbar />
      <Box maxW="5xl" margin="auto" p={5}>
        <Text>tasacion</Text>
      </Box>
    </Box>
  );
}
