import { Text, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

const NavbarItem = ({ text, to, path }) => {
  return (
    <NextLink href={to} passHref>
      <Link
        fontWeight={path === to && "bold"}
        p={1}
        borderRadius={6}
        _hover={{
          background: "purple.900",
          opacity: 0.8,
          color: "gray.300",
        }}
        _focus={{
          outline: 0,
        }}
      >
        {text}
      </Link>
    </NextLink>
  );
};

export default NavbarItem;
