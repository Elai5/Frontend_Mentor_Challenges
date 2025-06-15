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
      py={{ base: "8", md: "16" }}
      minH={"100vh"}
      // border="1px solid green"
    >
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-around"}
        alignItems={"center"}
        maxW={"1200px"}
        w={"100%"}
        px={{ base: 4, md: 8 }}
        // border="1px solid red"
        boxShadow={"md"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={4}
          width={{ base: "100%", md: "45%" }}
          // bg={"blue.500"}
        >
          <Box width={"90%"} display={"flex"} justifyContent={"center"}>
            <Img src={assets.imageProduct1} borderRadius={"lg"} />
          </Box>
          <HStack
            justifyContent={"center"}
            spacing={6}
            width={"100%"}
            // bg={"red.500"}
          >
            {[1, 2, 3, 4].map((num, ind) => (
              <Box boxSize={"18%"} key={ind}>
                <Image
                  src={assets[`imageProduct${num}Thumbnail`]}
                  borderRadius={"lg"}
                />
              </Box>
            ))}
          </HStack>
          {/* <HStack>
            <Box boxSize={"18%"}>
              <Image
                src={assets.imageProduct1Thumbnail}
                borderRadius={"lg"}
              ></Image>
            </Box>
            <Box boxSize={"18%"}>
              <Image
                src={assets.imageProduct2Thumbnail}
                borderRadius={"lg"}
              ></Image>
            </Box>
            <Box boxSize={"18%"}>
              <Image
                src={assets.imageProduct3Thumbnail}
                borderRadius={"lg"}
              ></Image>
            </Box>
            <Box boxSize={"18%"}>
              <Image
                src={assets.imageProduct4Thumbnail}
                borderRadius={"lg"}
              ></Image>
            </Box>
          </HStack> */}
        </Box>

        <Box
          width={{ base: "100%", md: "45%" }}
          py={8}
          px={{ base: "0", md: "4" }}
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
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          >
            Fall Limited Edition Sneakers
          </Heading>
          <Text
            mb={5}
            color={"#68707d"}
            fontSize={{ base: "sm", md: "md" }}
            // width={{ base: "100%", md: "50%" }}
            // fontWeight={"semibold"}
          >
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </Text>
          <Stack direction={{ base: "row", md: "column" }}>
            <HStack spacing={4}>
              <Text fontWeight={"bolder"} fontSize={{ base: "xl", md: "2xl" }}>
                $125.00
              </Text>
              <Button bg={"black"} color={"white"} size={"xs"}>
                50%
              </Button>
            </HStack>
            <Text
              textDecoration={"line-through"}
              as={"small"}
              px={1}
              // color="#b6bcc8"
            >
              $250.00
            </Text>
          </Stack>

          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={4}
            w={"100%"}
            py={{ base: 4, lg: 8 }}
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
              w={{ base: "100%", md: "60%" }}
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
