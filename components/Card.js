import { Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const Card = ({ title, image, description }) => {
  return (
    <Stack
      boxShadow="xl"
      p="6"
      rounded="md"
      bg="white"
      userSelect="none"
      _hover={{
        backgroundColor: "#f3f3f3",
      }}
    >
      <Heading as="h2" size="md">
        {title}
      </Heading>
      <Image
        src={`/assets/illustrations/${image}.svg`}
        width={300}
        height={300}
        layout="intrinsic"
        alt={image}
      />
      <Text as="i">{description}</Text>
    </Stack>
  );
};

export default Card;
