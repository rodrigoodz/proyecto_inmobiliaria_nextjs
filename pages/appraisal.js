import { Box, Text } from "@chakra-ui/react";
import ContactInfo from "../components/ContactInfo";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import dynamic from "next/dynamic";

const Form = dynamic(() => import("../components/AppraisalForm"), {
  ssr: false,
});

export default function Appraisal() {
  return (
    <Box
      backgroundColor="primary"
      minHeight="100vh"
      textAlign="center"
      userSelect="none"
    >
      <ContactInfo />
      <Navbar />
      <Box maxW="5xl" margin="auto">
        <Title text="Tasación" />
        <Box px={50}>
          <Box bg="white" boxShadow="xl" rounded="md" h="full" p={6}>
            <Form />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}