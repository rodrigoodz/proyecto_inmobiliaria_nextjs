import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import ContactInfo from "../components/ContactInfo";
import Navbar from "../components/Navbar";
import PublicGoogleSheetsParser from "public-google-sheets-parser";
import Title from "../components/Title";
import Card from "../components/Card";

export default function Estates({ estates }) {
  console.log(estates);

  return (
    <Box backgroundColor="primary" minHeight="100vh" textAlign="center">
      <ContactInfo />
      <Navbar />
      <Box maxW="5xl" margin="auto">
        <Title text="Propiedades" />
        <SimpleGrid columns={[1, 2, 4, 4]} spacing={5} px={50}>
          {estates.map((estate) => {
            return (
              <Card
                key={estate.id}
                price={estate.precio}
                adress={estate.domicilio}
                currency={estate.moneda}
                image={estate.img1 === "null" ? null : estate.img1}
                description={estate.descripcion}
              />
            );
          })}
        </SimpleGrid>
      </Box>
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
