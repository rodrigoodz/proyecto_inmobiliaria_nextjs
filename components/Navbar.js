import Image from "next/image";
import { Box, Flex, HStack } from "@chakra-ui/react";
import NavbarItem from "./NavbarItem";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <Box boxShadow="base">
      <Flex
        height={20}
        maxW="5xl"
        margin="auto"
        align="center"
        justify="space-between"
        px={6}
      >
        <Box>
          <Image
            src="/assets/images/logo_text.png"
            width={300}
            height={70}
            layout="intrinsic"
            alt="logo without text"
          />
        </Box>
        <HStack spacing={6}>
          <NavbarItem text="Inicio" to="/" path={currentPath} />
          <NavbarItem text="Nosotros" to="/us" path={currentPath} />
          <NavbarItem text="Propiedades" to="/estates" path={currentPath} />
          <NavbarItem text="Contacto" to="/contact" path={currentPath} />
          <NavbarItem text="Tasación" to="/assessment" path={currentPath} />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
