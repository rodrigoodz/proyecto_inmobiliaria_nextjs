import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Textarea,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const Form = () => {
  const toast = useToast();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    try {
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
        toast({
          title: "Enviado",
          description: data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Error",
          description: data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          "Hubo un error al procesar la solicitud. Intente más tarde",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <Stack alignItems="flex-start" direction={["column", "column", "row"]}>
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
        </Stack>
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
