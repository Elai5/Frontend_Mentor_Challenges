/** @format */

// import { assets } from "@/assets/assets";

import { images } from "../assets/assets";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Image,
  Flex,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { base, h1, h2 } from "framer-motion/client";
import React from "react";

const MainCard = () => {
  return (
    <Box
      bg={"#F2EBE3"}
      minH={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      maxW={"100vw"}
    >
      <Flex
        borderRadius="lg"
        bg={"#ffffff"}
        width={{ lg: "58%", xl: "50%" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box
          borderTopLeftRadius={"lg"}
          borderTopRightRadius={{ base: "lg", md: "none" }}
          borderBottomLeftRadius={{ base: "none", md: "lg" }}
          overflow="hidden"
        >
          <picture>
            <source media="(min-width:768px)" srcset={images.productDesktop} />
            <img src={images.productMobile} alt="Image Mobile" srcset="" />
          </picture>
        </Box>

        <Container>
          <VStack
            gap={2}
            align="start"
            textAlign="left"
            py={"4"}
            justifyContent={"space-around"}
            h={"100%"}
          >
            <Heading
              as={h2}
              color={"#6c7289"}
              fontWeight={"semibold"}
              textStyle={"xs"}
              letterSpacing={"3px"}
            >
              {" "}
              PERFUME
            </Heading>
            <Heading
              as={h1}
              textStyle={"3xl"}
              color={"#1C232B"}
              fontWeight={"700"}
              lineHeight={"28px"}
            >
              {" "}
              Gabrielle <br />
              Essence Eau <br />
              De Parfum
            </Heading>
            <Text
              fontSize={{ base: "sm", sm: "xl", lg: "lg" }}
              color={"#6c7289"}
            >
              A floral, solar and voluptuous interpretation composed by Iliver
              Polge, Perfume-Creator for the House of CHANEL.
            </Text>
            <HStack gap={4}>
              <Text
                color={"#3C8067"}
                fontWeight={"bold"}
                fontFamily={"Fraunces"}
                textStyle={"2xl"}
              >
                $149.99
              </Text>
              <Text
                color={"#6c7289"}
                textStyle={"xs"}
                textDecoration={"line-through"}
              >
                {" "}
                $169.99
              </Text>
            </HStack>

            <Button
              bg={"#3C8067"}
              _hover={{ bg: "#1B4133" }}
              px={4}
              py={2}
              size={"md"}
              rounded="lg"
              w={"full"}
              cursor={"pointer"}
            >
              <Image src={images.cartIcon} boxSize="12px"></Image>
              <Text fontWeight={"bolder"} fontSize={{ sm: "xl" }}>
                Add to Cart
              </Text>
            </Button>
          </VStack>
        </Container>
      </Flex>
    </Box>
  );
};

export default MainCard;
