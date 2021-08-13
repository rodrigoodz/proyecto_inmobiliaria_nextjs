import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { ImMenu, ImCross } from "react-icons/im";
import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={"gray.100"} px={4} py={1} boxShadow="base">
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        maxW="5xl"
        margin="auto"
      >
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          width="full"
        >
          <Logo />
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <NavbarLinks />
          </HStack>
        </Flex>
        <IconButton
          size={"md"}
          icon={isOpen ? <Icon as={ImCross} /> : <Icon as={ImMenu} />}
          aria-label={"Abrir menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <NavbarLinks />
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
