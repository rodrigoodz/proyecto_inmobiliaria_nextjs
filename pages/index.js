import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import Card from "../components/Card";
import ContactInfo from "../components/ContactInfo";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Home() {
  const router = useRouter();
  return (
    <Box
      backgroundColor="primary"
      minHeight="100vh"
      textAlign="center"
      userSelect="none"
    >
      <Head>
        <title>Melina Roncaglia | Negocios Inmobiliarios</title>
        <meta
          name="description"
          content="Somos una empresa consolidada en el mercado inmobiliario de Entre Rios y Santa Fe. Nuestro principal objetivo es acercarles a nuestros clientes las mejores oportunidades de inversión, brindándole un asesoramiento integral y personalizado."
        />
        <meta
          property="og:title"
          content="Melina Roncaglia - Negocios Inmobiliarios"
        />
        <meta
          property="og:description"
          content="Somos una empresa consolidada en el mercado inmobiliario de Entre Rios y Santa Fe. Nuestro principal objetivo es acercarles a nuestros clientes las mejores oportunidades de inversión, brindándole un asesoramiento integral y personalizado."
        />
        {/* <meta property="og:url" content="" /> */}
        <meta property="og:type" content="website" />
      </Head>
      <ContactInfo />
      <Navbar />
      <Box maxW="5xl" margin="auto">
        <Title text="Nuestros Servicios" />
        <SimpleGrid columns={[1, 2, 4, 4]} spacing={5} px={50}>
          <Card
            title="Ventas"
            image="sale_illus"
            localImg
            description="Le ayudamos a encontrar su vivienda y lo asesoramos en todo el proceso de compra"
          />
          <Card
            title="Alquileres"
            image="rent_illus"
            localImg
            description="Tenemos un extenso listado de propiedades, y podemos ayudarte a encontrar lo que buscás"
          />
          <Card
            title="Tasaciones"
            image="assessment_illus"
            localImg
            description="Estimamos el precio de su inmueble en base a ciertos criterios con el fin de otorgarle un precio justo"
          />
          <Card
            title="Asesoramiento"
            image="advice_illus"
            localImg
            description="Lo asesoramos y brindamos toda la informacion necesaria en el proceso de compra o alquiler"
          />
        </SimpleGrid>
        <Button
          colorScheme="purple"
          my={50}
          onClick={() => router.replace("/estates")}
        >
          Ver propiedades
        </Button>
      </Box>
    </Box>
  );
}
