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
import MainContent from "./MainContent";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Box borderBottom={"1px solid"} borderColor={"#b6bcc8"}>
        <Flex
          // bg={"white"}
          justifyContent={"space-between"}
          maxW={"1200px"}
          mx={"auto"}
          py={{ base: "2", md: "4", lg: "6" }}
          // bg={"green.500"}
          px={{ base: "0", md: "2" }}
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            gap={10}
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

              <Box w={"100%"}>
                <Image src={assets.logo} />
              </Box>
            </Box>

            <HStack
              gap={5}
              color={"#68707d"}
              fontFamily={"Kumbh Sans"}
              fontSize={{ base: "lg", lg: "2xl" }}
              // fontWeight={"semibold"}
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
        </Flex>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen} size={"xs"}>
          <DrawerOverlay />
          <DrawerContent w="75vw" maxW={"75vw"} bg={"white"}>
            <DrawerCloseButton
              mt={3}
              px={7}
              position="right"
              color={"#1d2025"}
              fontWeight={"bolder"}
            />
            <DrawerBody mt={5}>
              <VStack
                align="start"
                spacing={4}
                fontWeight="bolder"
                fontStyle={"Kumbh Sans"}
              >
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
      <MainContent />
    </Box>
  );
};

export default Navbar;
