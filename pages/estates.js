import { Box, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import ContactInfo from "../components/ContactInfo";
import Navbar from "../components/Navbar";
import PublicGoogleSheetsParser from "public-google-sheets-parser";
import Title from "../components/Title";
import Card from "../components/Card";
import EstateModal from "../components/EstateModal";
import { useState } from "react";

export default function Estates({ estates }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = useState({});

  const handleSelected = (estate) => {
    setSelected(estate);
    onOpen();
  };

  return (
    <Box backgroundColor="primary" minHeight="100vh" textAlign="center">
      <ContactInfo />
      <Navbar />
      <Box maxW="5xl" margin="auto">
        <Title text="Propiedades" />
        {/* TODO agregar filtro para seleccionar por Casas, Locales, etc... */}
        <SimpleGrid columns={[1, 2, 3, 3]} spacing={5} px={50} pb={10}>
          {estates.map((estate) => {
            return (
              <Box onClick={() => handleSelected(estate)} key={estate.id}>
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
