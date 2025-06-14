/** @format */

import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Img,
  Text,
  VStack,
  Stack,
} from "@chakra-ui/react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { assets } from "../assets/asset";

const MainContent = () => {
  return (
    <Container
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      maxW={"100%"}
      fontFamily={"Kumbh Sans"}
      py={{ base: 8, md: 32 }}
      // bg={"red.500"}
    >
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-around"}
        gap={8}
        maxW={"1200px"}
        mx={"auto"}
        w={"100%"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={7}
          width={{ base: "100%", md: "50%" }}
        >
          <Box width={"100%"}>
            <Img src={assets.imageProduct1} borderRadius={"xl"}></Img>
          </Box>
          <HStack>
            <Box>
              <Image
                src={assets.imageProduct1Thumbnail}
                borderRadius={"lg"}
              ></Image>
            </Box>
            <Box>
              <Image
                src={assets.imageProduct2Thumbnail}
                borderRadius={"lg"}
              ></Image>
            </Box>
            <Box>
              <Image
                src={assets.imageProduct3Thumbnail}
                borderRadius={"lg"}
              ></Image>
            </Box>
            <Box>
              <Image
                src={assets.imageProduct4Thumbnail}
                borderRadius={"lg"}
              ></Image>
            </Box>
          </HStack>
        </Box>

        <Box
          width={{ base: "100%", md: "50%" }}
          py={16}
          px={{ base: "0", md: "10" }}
        >
          <Heading
            as={"h2"}
            fontSize={{ base: "sm", md: "lg" }}
            mb={5}
            color={"#68707d"}
            fontWeight={"bolder"}
          >
            SNEAKER COMPANY
          </Heading>
          <Heading
            as="h1"
            mb={{ base: "4", md: "7" }}
            fontSize={{ base: "2xl", md: "5xl" }}
          >
            Fall Limited Edition Sneakers
          </Heading>
          <Text
            mb={5}
            color={"#68707d"}
            fontSize={{ base: "sm", md: "md" }}
            width={{ base: "100%", md: "50%" }}
            // fontWeight={"semibold"}
          >
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </Text>
          <Stack direction={{ base: "row", md: "column" }}>
            <HStack spacing={4} mb={2}>
              <Text fontWeight={"bolder"} fontSize={{ base: "2l", md: "3xl" }}>
                $125.00
              </Text>
              <Button bg={"black"} color={"white"}>
                50%
              </Button>
            </HStack>
            <Text textDecoration={"line-through"} as={"small"} px={1}>
              $250.00
            </Text>
          </Stack>

          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={4}
            w={"90%"}
            py={8}
          >
            {" "}
            <Button w={{ base: "100%", md: "40%" }}>
              <HStack spacing={6}>
                <Box>
                  <Image src={assets.minusIcon}></Image>
                </Box>
                <Text>0</Text>
                <Box>
                  <Image src={assets.plusIcon}></Image>
                </Box>
              </HStack>
            </Button>
            <Button
              rounded="lg"
              w={{ base: "100%", md: "60%S" }}
              bg={"#ff7d1a"}
              color={"#000000"}
              gap={4}
            >
              <MdOutlineShoppingCart />
              Add to cart
            </Button>
          </Stack>
          {/* <HStack spacing={6}></HStack> */}
        </Box>
      </Box>
    </Container>
  );
};

export default MainContent;
