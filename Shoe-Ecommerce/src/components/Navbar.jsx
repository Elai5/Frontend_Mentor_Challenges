/** @format */

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
  // Collapse,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import { HambugerIcon, CloseIcon } from "@chakra-ui/icons";

import { assets } from "../assets/asset";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
                icon={<HamburgerIcon />}
                aria-label="Open Menu"
                display={{ base: "inline-flex", md: "none" }}
                onClick={onOpen}
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
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size={"xs"}>
        <DrawerOverlay />
        <DrawerContent w="75vw" maxW={"75vw"} bg={"white"}>
          <DrawerCloseButton mt={4} />
          <DrawerBody mt={10}>
            <VStack align="start" spacing={4} fontWeight="bold">
              <Link href="#">Collections</Link>
              <Link href="#">Men</Link>
              <Link href="#">Women</Link>
              <Link href="#">About</Link>
              <Link href="#">Contact</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
