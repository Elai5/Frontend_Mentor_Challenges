/** @format */

import {
  Container,
  Box,
  Flex,
  List,
  ListItem,
  Text,
  Link,
  HStack,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { assets } from "../assets/asset";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
      <Flex bg={"red.400"}>
        <Flex gap={5}>
          <img src={assets.logo} alt="" />
          <HStack gap={4}>
            <Link href="">Collections</Link>
            <Link href="">Collections</Link>
            <Link href="">About</Link>
            <Link href="">Contacts</Link>
          </HStack>
        </Flex>
        <Flex gap={4}>
          <img src={assets.cartIcon} alt="" />
          <img src={assets.imageAvatar} alt="" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
