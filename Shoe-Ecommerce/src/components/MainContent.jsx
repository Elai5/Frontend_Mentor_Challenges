/** @format */

import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Img,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { assets } from "../assets/asset";

const MainContent = () => {
  return (
    <Container
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      h={"100vh"}
    >
      <Box display={"flex"} justifyContent={"space-between"} gap={5}>
        <Box>
          <Box borderRadius={"lg"}>
            <Img src={assets.imageProduct1}></Img>
          </Box>
          <HStack>
            <Image src={assets.imageProduct1Thumbnail}></Image>
          </HStack>
        </Box>

        <Box width={"60vw"}>
          <Heading as={"h2"} fontSize={"sm"} mb={3}>
            SNEAKER COMPANY
          </Heading>
          <Heading as="h1" mb={3}>
            Fall Limited Edition Sneakers
          </Heading>
          <Text>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </Text>
          <Text>$125.00</Text>
        </Box>
      </Box>
    </Container>
  );
};

export default MainContent;
