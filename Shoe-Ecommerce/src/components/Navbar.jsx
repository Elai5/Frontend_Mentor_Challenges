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
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import { assets } from "../assets/asset";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
      <Flex bg={"red.900"} justifyContent={"space-around"}>
        {/* <Flex gap={5} justifyContent={"space-around"}> */}
        <img src={assets.logo} alt="" />
        <HStack gap={4}>
          <Link href="">Collections</Link>
          <Link href="">Men</Link>
          <Link href="">Women</Link>
          <Link href="">About</Link>
          <Link href="">Contacts</Link>
        </HStack>
        <HStack>
          <img src={assets.cartIcon} alt="" />
          <Avatar
            src={assets.imageAvatar}
            border={"1px"}
            borderColor={"#ff7d1a"}
          ></Avatar>
        </HStack>
        {/* </Flex> */}
      </Flex>
    </Box>
  );
};

export default Navbar;
