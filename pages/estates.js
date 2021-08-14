import { Box, Text } from "@chakra-ui/react";
import ContactInfo from "../components/ContactInfo";
import Navbar from "../components/Navbar";
import PublicGoogleSheetsParser from "public-google-sheets-parser";

export default function Estates({ data }) {
  return (
    <Box backgroundColor="primary" minHeight="100vh" textAlign="center">
      <ContactInfo />
      <Navbar />
      <Box maxW="5xl" margin="auto" p={5}>
        <Text>propiedades</Text>
      </Box>
      {JSON.stringify(data, null, 2)}
    </Box>
  );
}

export async function getStaticProps() {
  const parser = new PublicGoogleSheetsParser(process.env.SHEET_ID);
  const data = await parser.parse();

  return {
    revalidate: 60,
    props: { data },
  };
}
