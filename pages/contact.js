import { Box, Text } from "@chakra-ui/react";
import ContactInfo from "../components/ContactInfo";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

export default function Contact() {
  // TODO forrmulario, Nombre (obligatorio), Email (obligatorio) <- "para ponernos en contacto", Telefono, asunto, Mensaje
  // ver si podria agregar una comprobacion por captcha
  //chakra-ui.com/docs/form/form-control
  // https://chakra-templates.dev/forms/authentication
  // https://medium.com/nerd-for-tech/coding-a-contact-form-with-next-js-and-nodemailer-d3a8dc6cd645
  https: return (
    <Box backgroundColor="primary" minHeight="100vh" textAlign="center">
      <ContactInfo />
      <Navbar />
      <Box maxW="5xl" margin="auto" p={5}>
        <Title text="Contactanos" />
        <Box px={50}>
          <Box bg="white" boxShadow="xl" rounded="md" h="full" p={6}>
            <Form />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
