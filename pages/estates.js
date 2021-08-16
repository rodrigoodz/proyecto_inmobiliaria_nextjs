import {
  Box,
  SimpleGrid,
  useDisclosure,
  Select,
  Heading,
} from "@chakra-ui/react";
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
      <ContactInfo />
      <Navbar />
      <Box maxW="5xl" margin="auto">
        <Title text="Propiedades" />
        <Select
          onChange={handleSelect}
          variant="filled"
          mb={4}
          w={["xs", "sm", "xl", "2xl"]}
          mx="auto"
        >
          <option value="">Todas</option>
          <option value="CASAS">Casas</option>
          <option value="COCHERAS">Cocheras</option>
          <option value="DEPARTAMENTOS">Departamentos</option>
          <option value="GALPONES">Galpones</option>
          <option value="LOCALES">Locales</option>
          <option value="QUINTAS">Quintas</option>
          <option value="TERRENOS">Terrenos</option>
          <option value="OTROS">Otros</option>
        </Select>
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
