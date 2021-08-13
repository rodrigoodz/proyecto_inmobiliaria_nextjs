import { Box } from "@chakra-ui/react";
import ContactInfo from "../components/ContactInfo";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <Box backgroundColor="gray.50" height="100vh">
      <ContactInfo />
      <Navbar />
    </Box>
  );
}
