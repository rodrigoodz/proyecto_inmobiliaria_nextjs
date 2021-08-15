import {
  Box,
  Center,
  Heading,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { ImImage } from "react-icons/im";

const Card = ({
  title = "",
  image = null,
  localImg = false,
  description,
  price = null,
  currency = "",
  adress = null,
}) => {
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
      align="center"
      height="full"
      justifyContent="space-between"
    >
      <VStack>
        {Boolean(title.length) && (
          <Heading as="h2" size="md">
            {title}
          </Heading>
        )}
        {localImg ? (
          <Image
            src={`/assets/illustrations/${image}.svg`}
            width={300}
            height={300}
            layout="intrinsic"
            alt={image}
          />
        ) : image === null ? (
          <Center width={200} height={200}>
            <Icon as={ImImage} width="80%" height="80%" textAlign="center" />
          </Center>
        ) : (
          <Box width={200} height={200} position="relative">
            <Image
              src={image}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="estate_image"
              alt={image}
            />
            <style jsx global>{`
              .estate_image {
                border-radius: 0.5rem;
              }
            `}</style>
          </Box>
        )}

        <Text as="i">{description}</Text>
      </VStack>
      <VStack alignSelf="flex-start" spacing={2} alignItems="flex-start">
        {adress !== null && (
          <Heading as="h2" size="xs" color="gray.400">
            {adress}
          </Heading>
        )}
        {price !== null && (
          <Heading as="h2" size="xs">
            {`${currency} ${price}`.trim()}
          </Heading>
        )}
      </VStack>
    </Stack>
  );
};

export default Card;
