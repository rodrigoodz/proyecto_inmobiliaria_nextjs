import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  FormErrorMessage,
  Flex,
  useToast,
  Text,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FileUpload from "./FileUpload";
import { ImImages } from "react-icons/im";

import RadioSelection from "./RadioSelection";
import SliderControl from "./SliderControl";

const AppraisalForm = () => {
  const toast = useToast();
  const [location, setLocation] = useState("SANTA FE");
  const [type, setType] = useState("CASA");
  const [surface, setSurface] = useState(100);
  const [rooms, setRooms] = useState("1");
  const [bathrooms, setBathrooms] = useState("1");

  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("address", values.address);
    formData.append("email", values.email);
    formData.append("location", location);
    formData.append("type", type);
    formData.append("surface", surface);
    formData.append("rooms", rooms);
    formData.append("bathrooms", bathrooms);

    for (let i = 0; i < values.files_.length; i++) {
      formData.append(`file${i}`, values.files_[i]);
    }

    try {
      const res = await fetch("/api/appraisal", {
        method: "POST",
        body: formData,
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

  const validateFiles = (value) => {
    if (value.length > 5) {
      return "Envie como máximo 5 imagenes";
    }
    for (const file of Array.from(value)) {
      const fsMb = file.size / (1024 * 1024);
      const MAX_FILE_SIZE = 10;
      if (fsMb > MAX_FILE_SIZE) {
        return "El tamaño maximo de cada archivo debe ser menor a 10Mb";
      }
    }
    return true;
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
              currentValue={bathrooms}
              values={["1", "2", "3", "4", "5"]}
              onChange={(v) => setBathrooms(v)}
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
        <FormControl
          isInvalid={errors.files_}
          display="flex"
          alignItems="center"
        >
          <FileUpload
            accept={"image/*"}
            multiple
            register={register("files_", { validate: validateFiles })}
          >
            <Button leftIcon={<Icon as={ImImages} />}> Subir imagenes</Button>
            {watch("files_")?.length ? (
              <Text ml={2}>
                {watch("files_").length} archivo/s seleccionado/s
              </Text>
            ) : (
              <Text ml={2}>Ningun archivo seleccionado</Text>
            )}
          </FileUpload>

          <FormErrorMessage>
            {errors.files_ && errors?.files_.message}
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
