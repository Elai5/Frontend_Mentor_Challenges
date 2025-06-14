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
} from "@chakra-ui/react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { assets } from "../assets/asset";

const MainContent = () => {
  return (
    <Container
      // display={"flex"}
      // justifyContent={"center"}
      // alignItems={"center"}
      h={"100vh"}
      maxW={"100%"}
      fontFamily={"Kumbh Sans"}
      // bg={"red.500"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        gap={8}
        // px={10}
        maxW={"1200px"}
        mx={"auto"}
        // bg={"green.500"}
        // w={"100%"}
      >
        <Box display={"flex"} flexDirection={"column"} gap={7} width={"40%"}>
          <Box>
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
          display={"flex"}
          flexDirection={"column"}
          w={"50%"}
          py={10}
          px={10}
          width={"50%"}
        >
          <Heading
            as={"h2"}
            fontSize={"sm"}
            mb={5}
            color={"#68707d"}
            fontWeight={"bolder"}
          >
            SNEAKER COMPANY
          </Heading>
          <Heading as="h1" mb={7} fontSize={{ base: "md", md: "5xl" }}>
            Fall Limited Edition Sneakers
          </Heading>
          <Text mb={5} color={"#68707d"} fontSize={{ base: "md" }}>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </Text>
          <HStack spacing={4} mb={2}>
            <Text fontWeight={"bolder"} fontSize={"3xl"}>
              $125.00
            </Text>
            <Button bg={"black"} color={"white"}>
              50%
            </Button>
          </HStack>
          <Text textDecoration={"line-through"} as={"small"} mb={8} px={1}>
            $250.00
          </Text>

          <HStack spacing={2}>
            <Button w={"60%"}>
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
              w={"full"}
              bg={"#ff7d1a"}
              color={"#000000"}
              gap={4}
            >
              <MdOutlineShoppingCart />
              {/* <Image src={assets.cartIcon} alt="" mr={2} color={"#000000"} /> */}
              Add to cart
            </Button>
          </HStack>
        </Box>
      </Box>
    </Container>
  );
};

export default MainContent;
