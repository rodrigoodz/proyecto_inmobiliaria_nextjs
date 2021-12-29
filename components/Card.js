import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
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
  location = "",
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
            priority
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

        <Text as="i" noOfLines={7}>
          {description}
        </Text>
      </VStack>

      <VStack
        alignItems="flex-start"
        spacing={2}
        alignItems="flex-start"
        w="full"
      >
        {adress !== null && (
          <Heading as="h2" size="xs" color="gray.400">
            {adress}
          </Heading>
        )}
        {price !== null && (
          <Flex align="center" justify="space-between" w="full">
            <Heading as="h2" size="xs">
              {`${currency} ${price}`.trim()}
            </Heading>
            <Text
              color="gray.400"
              _hover={{
                color: "gray.700",
              }}
            >
              Click aquí
            </Text>
          </Flex>
        )}
      </VStack>
    </Stack>
  );
};

export default Card;
