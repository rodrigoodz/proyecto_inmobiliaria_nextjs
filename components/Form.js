import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Textarea,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";

const Form = () => {
  return (
    <Box
      rounded={"lg"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"lg"}
      p={8}
    >
      <Stack spacing={4}>
        <HStack>
          <FormControl id="email" isRequired>
            <FormLabel>Correo</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="name" isRequired>
            <FormLabel>Nombre</FormLabel>
            <Input type="text" />
          </FormControl>
        </HStack>
        <FormControl id="subject">
          <FormLabel>Asunto</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="message" isRequired>
          <FormLabel>Mensaje</FormLabel>
          <Textarea type="text" />
        </FormControl>
        <Button colorScheme="purple">Enviar</Button>
      </Stack>
    </Box>
  );
};

export default Form;
