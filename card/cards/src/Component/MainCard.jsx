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
      as={"main"}
      bg={"#F2EBE3"}
      minH={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={{ base: "stretch", md: "center" }}
      maxW={"100vw"}
      px={{ base: "10px" }}
      w="100%"
    >
      <Flex
        as={"article"}
        borderRadius="lg"
        bg={"#ffffff"}
        width={{ lg: "58%", xl: "45%" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box
          as={"figure"}
          borderTopLeftRadius={"lg"}
          borderTopRightRadius={{ base: "lg", md: "none" }}
          borderBottomLeftRadius={{ base: "none", md: "lg" }}
          overflow="hidden"
          role="article"
          aria-labelledby="product-title"
        >
          <picture>
            <source
              media="(min-width:768px)"
              srcset={images.productDesktop}
              alt="productImageDesktop"
            />
            <img src={images.productMobile} alt="Image Mobile" srcset="" />
          </picture>
        </Box>

        <Container as={"section"} role="region" aria-labelledby="product-info">
          <VStack
            gap={2}
            align="start"
            textAlign="left"
            py={"4"}
            justifyContent={{ base: "stretch", md: "center" }}
            h={"100%"}
          >
            <Heading
              as={h2}
              color={"#6c7289"}
              fontWeight={"semibold"}
              textStyle={"xs"}
              letterSpacing={"3px"}
              role="note"
              aria-label="Product category"
            >
              {" "}
              PERFUME
            </Heading>

            <Heading
              as="h1"
              id="product-tittle"
              fontSize={{ base: "2xl", sm: "sm", md: "3xl" }}
              // textStyle="3xl"
              color="#1C232B"
              fontWeight="700"
              lineHeight={{ base: "29px", md: "32px" }}
              maxW={{ base: "240px", md: "250px", lg: "200px" }}
            >
              Gabrielle Essence Eau De Parfum
            </Heading>
            <Text
              id="product-info"
              fontSize={{ base: "sm", sm: "xs", md: "base", xl: "lg" }}
              maxW={{ base: "270px", sm: "300px" }}
              color={"#6c7289"}
              fontFamily={"Montserrat"}
            >
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge,Perfumer-Creator for the House of CHANEL.
            </Text>
            <HStack
              as={"div"}
              gap={4}
              role="group"
              aria-label="Product pricing"
            >
              <Text
                color={"#3C8067"}
                fontWeight={"bold"}
                fontFamily={"Fraunces"}
                fontSize={"3xl"}
                aria-label="Current price $149.99"
              >
                $149.99
              </Text>
              <Text
                color={"#6c7289"}
                textStyle={"md"}
                textDecoration={"line-through"}
                aria-label="Original price $169.99, crossed out"
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
              aria-label="Add Gabrielle Essence Eau De Parfum to shopping cart"
              role="button"
            >
              <Image
                src={images.cartIcon}
                boxSize="12px"
                alt="shoppingCartImage"
                aria-hidden="true"
              ></Image>
              <Text
                fontWeight={"bolder"}
                fontSize={{ sm: "xl" }}
                color={"white"}
              >
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
