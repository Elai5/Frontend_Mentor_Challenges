/** @format */

// import React from 'react'
import { UnlockIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Spacer,
  HStack,
  useToast,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";

export const Navbar = () => {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Logged Out",
      description: "succesfully logged out",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top",
      icon: <UnlockIcon />,
    });
  };

  return (
    <Flex as="nav" p="10px" mb={"40px"}>
      <Heading as="h1">Doja Tasks</Heading>
      <Spacer></Spacer>

      <HStack spacing="20px">
        <Avatar name="mario" bg={"purple.400"} src="/img/mario.png">
          <AvatarBadge width={"1.3em"} bg={"teal"}>
            <Text fontSize={"xs"} color={"White"}>
              3
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>gray@netnija.dev</Text>
        <Button colorScheme="purple" onClick={showToast}>
          LogOut
        </Button>
      </HStack>
    </Flex>
    // <Flex bg="gray.200" justify="space-between" wrap="wrap" gap="2">
    //   <Box w="150px" h="50px" bg="red">
    //     1
    //   </Box>
    //   <Box w="150px" h="50px" bg="blue">
    //     2
    //   </Box>
    //   <Box w="150px" h="50px" bg="green" flexGrow="1">
    //     3
    //   </Box>
    //   <Box w="150px" h="50px" bg="yellow" flexGrow="2">
    //     4
    //   </Box>
    // </Flex>
  );
};
