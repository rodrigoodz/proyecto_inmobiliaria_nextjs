import { Box, Heading, Divider } from "@chakra-ui/react";
import React from "react";

const Title = ({ text }) => {
  return (
    <Box p={10} textAlign="center">
      <Heading as="h1" size="3xl" mb={4}>
        {text}
      </Heading>
      <Divider
        borderColor="gray.400"
        // css={{
        //   boxShadow: "1px 1px #000",
        // }}
      />
    </Box>
  );
};

export default Title;
