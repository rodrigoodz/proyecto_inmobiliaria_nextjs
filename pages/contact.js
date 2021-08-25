import { Box, Text } from "@chakra-ui/react";
import ContactInfo from "../components/ContactInfo";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import dynamic from "next/dynamic";
import Head from "next/head";

const Form = dynamic(() => import("../components/Form"), { ssr: false });

export default function Contact() {
  return (
    <Box
      backgroundColor="primary"
      minHeight="100vh"
      textAlign="center"
      userSelect="none"
    >
      <Head>
        <title>Contacto - Melina Roncaglia | Negocios Inmobiliarios</title>
        <meta
          name="description"
          content="Contacte directamente con nosotros y resuelva sus dudas al instante"
        />
        <meta
          property="og:title"
          content="Contacto - Melina Roncaglia | Negocios Inmobiliarios"
        />
        <meta
          property="og:description"
          content="Contacte directamente con nosotros y resuelva sus dudas al instante"
        />
        {/* <meta property="og:url" content="" /> */}
        <meta property="og:type" content="website" />
      </Head>
      <ContactInfo />
      <Navbar />
      <Box maxW="5xl" margin="auto">
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
