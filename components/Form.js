import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Textarea,
  HStack,
  Text,
  FormErrorMessage,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ImCheckmark, ImCross } from "react-icons/im";

const Form = () => {
  const [message, setMessage] = useState({ text: "", type: null });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (data.ok) {
      reset();
      setMessage({ text: data.message, type: "check" });
    } else {
      setMessage({ text: data.message, type: "error" });
    }

    setTimeout(() => {
      setMessage({ text: "", type: null });
    }, 3000);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <HStack alignItems="flex-start">
          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor="email">Correo</FormLabel>
            <Input
              id="email"
              type="email"
              {...register("email", {
                required: "Ingresá tu correo",
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor="name">Nombre</FormLabel>
            <Input
              id="name"
              {...register("name", {
                required: "Ingresá tu nombre",
                minLength: { value: 3, message: "" },
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
        </HStack>
        <FormControl isInvalid={errors.subject}>
          <FormLabel htmlFor="subject">Asunto</FormLabel>
          <Input
            id="subject"
            {...register("subject", {
              required: false,
            })}
          />
          <FormErrorMessage>
            {errors.subject && errors.subject.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.message}>
          <FormLabel htmlFor="message">Mensaje</FormLabel>
          <Textarea
            id="message"
            {...register("message", {
              required: "Ingresá un mensaje",
            })}
          />
          <FormErrorMessage>
            {errors.message && errors.message.message}
          </FormErrorMessage>
        </FormControl>
        <Button colorScheme="purple" isLoading={isSubmitting} type="submit">
          Enviar
        </Button>
        {message.type !== null && (
          <Flex
            justifyContent="center"
            alignItems="center"
            color={message.type === "error" ? "red" : "green"}
            fontSize="2xl"
          >
            <Text>{message.text}</Text>
            <Icon
              as={message.type === "error" ? ImCross : ImCheckmark}
              ml={2}
            />
          </Flex>
        )}
      </Stack>
    </form>
  );
};

export default Form;
