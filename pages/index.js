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
    <Box backgroundColor="primary" minHeight="100vh" textAlign="center">
      <Head>
        <title>Melina Roncaglia - Negocios Inmobiliarios</title>
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
      <Box maxW="5xl" margin="auto" p={5}>
        <Title text="Nuestros Servicios" />
        <SimpleGrid columns={[2, 4]} spacing={5} p={50}>
          <Card
            title="Ventas"
            image="sale_illus"
            description="Le ayudamos a encontrar su vivienda y lo asesoramos en todo el proceso de compra"
          />
          <Card
            title="Alquileres"
            image="rent_illus"
            description="Tenemos un extenso listado de propiedades, y podemos ayudarte a encontrar lo que buscás"
          />
          <Card
            title="Tasaciones"
            image="assessment_illus"
            description="Tenemos un extenso listado de propiedades, y podemos ayudarte a encontrar lo que buscás"
          />
          <Card
            title="Asesoramiento"
            image="advice_illus"
            description="Le ayudamos a encontrar su vivienda y lo asesoramos en todo el proceso de compra"
          />
        </SimpleGrid>
        <Button
          colorScheme="purple"
          mt={50}
          onClick={() => router.replace("/estates")}
        >
          Ver propiedades
        </Button>
      </Box>
    </Box>
  );
}
