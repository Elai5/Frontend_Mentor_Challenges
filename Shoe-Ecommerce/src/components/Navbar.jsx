/** @format */

import {
  Container,
  Box,
  Flex,
  Text,
  Link,
  HStack,
  Avatar,
  Image,
  Center,
} from "@chakra-ui/react";

import { assets } from "../assets/asset";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
      <Flex bg={"white"} justifyContent={"space-around"}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          gap={4}
          alignItems={"center"}
        >
          <Box>
            <Image src={assets.logo} />
          </Box>

          <HStack gap={4}>
            <Link href="">Collections</Link>
            <Link href="">Men</Link>
            <Link href="">Women</Link>
            <Link href="">About</Link>
            <Link href="">Contacts</Link>
          </HStack>
        </Box>

        <HStack>
          <img src={assets.cartIcon} alt="" />
          <Avatar
            src={assets.imageAvatar}
            border={"1px"}
            borderColor={"#ff7d1a"}
          ></Avatar>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
