import { Box, Stack } from "@chakra-ui/react";
import NavbarItem from "./NavbarItem";
import { useRouter } from "next/router";

const NavbarLinks = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <>
      <NavbarItem text="Inicio" to="/" path={currentPath} />
      <NavbarItem text="Nosotros" to="/us" path={currentPath} />
      <NavbarItem text="Propiedades" to="/estates" path={currentPath} />
      <NavbarItem text="Contacto" to="/contact" path={currentPath} />
      <NavbarItem text="Tasación" to="/appraisal" path={currentPath} />
    </>
  );
};

export default NavbarLinks;
