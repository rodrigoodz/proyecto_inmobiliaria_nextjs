import {
  Box,
  Text,
  Center,
  SimpleGrid,
  Divider,
  Button,
} from "@chakra-ui/react";
import ContactInfo from "../components/ContactInfo";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Us() {
  const router = useRouter();
  return (
    <Box
      backgroundColor="primary"
      minHeight="100vh"
      textAlign="center"
      userSelect="none"
    >
      <Head>
        <title>Nosotros - Melina Roncaglia | Negocios Inmobiliarios</title>
        <meta
          name="description"
          content="Le ayudamos a encontrar su vivienda, ya sea para alquiler o compra, contamos con un extenso listado de propiedades y podemos ayudarte a encontrar lo que buscas."
        />
        <meta
          property="og:title"
          content="Nosotros - Melina Roncaglia | Negocios Inmobiliarios"
        />
        <meta
          property="og:description"
          content="Le ayudamos a encontrar su vivienda, ya sea para alquiler o compra, contamos con un extenso listado de propiedades y podemos ayudarte a encontrar lo que buscas."
        />
        {/* <meta property="og:url" content="" /> */}
        <meta property="og:type" content="website" />
      </Head>
      <ContactInfo />
      <Navbar />
      <Box maxW="5xl" margin="auto">
        <Title text="Nosotros" />
        <Box px={50}>
          <Box bg="white" boxShadow="xl" rounded="md" h="full" p={6}>
            <Image
              src="/assets/images/logo.png"
              width={200}
              height={200}
              alt="logo without text"
            />
            <SimpleGrid columns={[1, 1, 2, 2]} alignItems="center" px={2}>
              <Text as="em" textAlign="left">
                Somos una empresa consolidada en el mercado inmobiliario de
                Entre Rios y Santa Fe. Nuestro principal objetivo es acercarles
                a nuestros clientes las mejores oportunidades de inversión,
                brindándole un asesoramiento integral y personalizado. Somos
                personas responsables y te ayudaremos a tomar una bueno decision
                en este proceso complejo e intenso. <Divider />
                <Text as="em" fontWeight="bold" color="gray.600">
                  Melina Roncaglia | Corredora Inmobiliaria Matricula 1366
                </Text>
              </Text>
              <Center>
                <Image
                  src="/assets/illustrations/us_illus.svg"
                  width={300}
                  height={200}
                  alt="us_illustration"
                  border="1px solid red"
                />
              </Center>
            </SimpleGrid>
          </Box>
          <Button
            colorScheme="purple"
            my={50}
            onClick={() => router.replace("/contact")}
          >
            Contactanos
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
