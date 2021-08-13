import { Text, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

const NavbarItem = ({ text, to, path }) => {
  return (
    <NextLink href={to} passHref>
      <Link fontWeight={path === to && "bold"}>{text}</Link>
    </NextLink>
  );
};

export default NavbarItem;
