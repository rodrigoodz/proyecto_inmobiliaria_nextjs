import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  FormErrorMessage,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import RadioSelection from "./RadioSelection";
import SliderControl from "./SliderControl";

// Tipo de Propiedad (departamento,casa,PH)
// Cant. ambientes (select de 1 a 5)
// Superficie Cubierta en m^2 (chakra slider) de 30 a 500
// Localidad (santa fe o entre rios) (Provincia)
// que tipo de operacion? Alquiler / Venta
// Direccion del inmueble
// Nombre
// Email
// Telefono
// Fotos

const AppraisalForm = () => {
  const toast = useToast();
  const [location, setLocation] = useState("SANTA FE");
  const [type, setType] = useState("CASA");
  const [surface, setSurface] = useState(100);
  const [rooms, setRooms] = useState("1");
  const [bathroom, setBathroom] = useState("1");

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
        <SliderControl
          minValue={30}
          maxValue={500}
          currentValue={surface}
          defaultValue={surface}
          onChange={(value) => setSurface(value)}
        />
        <Flex direction={["column", "column", "column", "row"]}>
          <Stack
            spacing={1}
            w={["100%", "100%", "100%", "50%"]}
            mb={[1, 1, 1, 0]}
          >
            <RadioSelection
              text="Provincia"
              currentValue={location}
              values={["Santa Fe", "Entre Rios"]}
              onChange={(v) => setLocation(v)}
            />
            <RadioSelection
              text="Cant. de Habitaciones"
              currentValue={rooms}
              values={["1", "2", "3", "4", "5"]}
              onChange={(v) => setRooms(v)}
            />
          </Stack>
          <Stack
            spacing={1}
            w={["100%", "100%", "100%", "50%"]}
            ml={[0, 0, 0, 2]}
          >
            <RadioSelection
              text="Tipo de Propiedad"
              currentValue={type}
              values={["Casa", "Departamento", "PH"]}
              onChange={(v) => setType(v)}
            />
            <RadioSelection
              text="Cant. de Baños"
              currentValue={bathroom}
              values={["1", "2", "3", "4", "5"]}
              onChange={(v) => setBathroom(v)}
            />
          </Stack>
        </Flex>

        <Stack alignItems="flex-start" direction={["column", "column", "row"]}>
          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor="email">Correo</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="Ingresá tu correo"
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
              placeholder="Ingresá tu nombre"
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
        <FormControl isInvalid={errors.address}>
          <FormLabel htmlFor="name">Direccion</FormLabel>
          <Input
            id="address"
            placeholder="Ingresá la dirección del inmueble"
            {...register("address", {
              required: "Ingresá la dirección del inmueble",
              minLength: { value: 3, message: "" },
            })}
          />
          <FormErrorMessage>
            {errors.address && errors.address.message}
          </FormErrorMessage>
        </FormControl>

        <Button colorScheme="purple" isLoading={isSubmitting} type="submit">
          Enviar
        </Button>
      </Stack>
    </form>
  );
};

export default AppraisalForm;
