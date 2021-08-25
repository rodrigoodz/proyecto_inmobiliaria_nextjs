import { Box, SimpleGrid, useDisclosure, Heading } from "@chakra-ui/react";
import ContactInfo from "../components/ContactInfo";
import Navbar from "../components/Navbar";
import PublicGoogleSheetsParser from "public-google-sheets-parser";
import Title from "../components/Title";
import Card from "../components/Card";
import EstateModal from "../components/EstateModal";
import { useState } from "react";
import Selection from "../components/Selection";
import Head from "next/head";

export default function Estates({ estates }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = useState({});
  const [filteredEstates, setFilteredEstates] = useState(estates);

  const handleClick = (estate) => {
    setSelected(estate);
    onOpen();
  };

  const handleSelect = (e) => {
    if (e.target.value !== "") {
      const filtered = estates.filter(
        (estate) => e.target.value === estate.tipo
      );
      setFilteredEstates(filtered);
    } else {
      setFilteredEstates(estates);
    }
  };

  return (
    <Box
      backgroundColor="primary"
      minHeight="100vh"
      textAlign="center"
      userSelect="none"
    >
      <Head>
        <title>Propiedades - Melina Roncaglia | Negocios Inmobiliarios</title>
        <meta
          name="description"
          content="Listado de propiedades para compra o alquiler"
        />
        <meta
          property="og:title"
          content="Propiedades - Melina Roncaglia | Negocios Inmobiliarios"
        />
        <meta
          property="og:description"
          content="Listado de propiedades para compra o alquiler"
        />
        {/* <meta property="og:url" content="" /> */}
        <meta property="og:type" content="website" />
      </Head>
      <ContactInfo />
      <Navbar />
      <Box maxW="5xl" margin="auto">
        <Title text="Propiedades" />
        <Selection
          placeholder="Todas"
          options={[
            "Casas",
            "Cocheras",
            "Departamentos",
            "Galpones",
            "Locales",
            "Quintas",
            "Terrenos",
            "Otros",
          ]}
          onSelect={handleSelect}
        />
        {Boolean(filteredEstates.length > 0) ? (
          <SimpleGrid columns={[1, 2, 3, 3]} spacing={5} px={50} pb={10}>
            {filteredEstates.map((estate) => {
              return (
                <Box onClick={() => handleClick(estate)} key={estate.id}>
                  <Card
                    title={estate.tipo.substr(0, estate.tipo.length - 1)}
                    price={estate.precio}
                    adress={estate.domicilio}
                    currency={estate.moneda}
                    image={estate.img1 === "null" ? null : estate.img1}
                    description={estate.descripcion}
                  />
                </Box>
              );
            })}
          </SimpleGrid>
        ) : (
          <Heading as="h2" size="lg">
            No hay propiedades de ese tipo disponibles actualmente
          </Heading>
        )}
      </Box>
      {selected && (
        <EstateModal isOpen={isOpen} onClose={onClose} estate={selected} />
      )}
    </Box>
  );
}

export async function getStaticProps() {
  const parser = new PublicGoogleSheetsParser(process.env.SHEET_ID);
  const estates = await parser.parse();

  return {
    revalidate: 60,
    props: { estates },
  };
}
