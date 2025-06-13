/** @format */

import React from "react";

import {
  Box,
  Flex,
  Text,
  Link,
  HStack,
  Avatar,
  Image,
  useDisclosure,
  IconButton,
  Collapse,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import { HambugerIcon, CloseIcon } from "@chakra-ui/icons";

const TopNavbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box borderBottom={"1px solid"} borderColor={"#b6bcc8"}>
      <Flex
        bg={"white"}
        justifyContent={"space-between"}
        maxW={"1200px"}
        mx={"auto"}
        // "#68707d"
        // #b6bcc8
        // #f7f8fd"
        py={{ base: "2", md: "10" }}
      >
        <Box
          display={"flex"}
          flexDirection={"row"}
          gap={8}
          alignItems={"center"}
        >
          <Box display={"flex"} gap={1} alignItems={"center"}>
            <Box>
              <IconButton
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label="Toggle Menu"
                display={{ base: "inline-flex", md: "none" }}
                onClick={onToggle}
                variant={"ghost"}
              />
            </Box>
            <Box>
              <Image src={assets.logo} />
            </Box>
          </Box>

          <HStack
            gap={4}
            color={"#68707d"}
            fontFamily={"Kumbh Sans"}
            fontSize={"lg"}
            display={{ base: "none", md: "flex" }}
          >
            <Link href="">Collections</Link>
            <Link href="">Men</Link>
            <Link href="">Women</Link>
            <Link href="">About</Link>
            <Link href="">Contacts</Link>
          </HStack>
        </Box>

        <HStack gap={4}>
          <img src={assets.cartIcon} alt="" />

          <Avatar
            src={assets.imageAvatar}
            border={"1px"}
            borderColor={"#ff7d1a"}
            boxSize={"40px"}
          ></Avatar>
        </HStack>
        {/* <Divider></Divider> */}
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box
          display={{ md: "none" }}
          px={4}
          pb={4}
          color={"blackAlpha.900"}
          fontWeight={"bold"}
          width={"150px"}
        >
          <Link display="block" py={2} href="#">
            Collections
          </Link>
          <Link display="block" py={2} href="#">
            Men
          </Link>
          <Link display="block" py={2} href="#">
            Women
          </Link>
          <Link display="block" py={2} href="#">
            About
          </Link>
          <Link display="block" py={2} href="#">
            Contact
          </Link>
        </Box>
      </Collapse>
    </Box>
  );
};

export default TopNavbar;
