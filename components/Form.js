import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Textarea,
  HStack,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 1000);
    });
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
      </Stack>
    </form>
  );
};

export default Form;
