/** @format */

// import React from 'react'
import { Flex, Box, Heading, Text, Button, Spacer, HStack } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Flex as="nav" p="10px" alignItems="center" gap="10px">
      <Heading as="h1">Doja Tasks</Heading>
      <Spacer></Spacer>
      <Box bg="gray.200" p="10px">
        M
      </Box>
      <Text>gray@netnija.dev</Text>
      <Button>LogOut</Button>
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
