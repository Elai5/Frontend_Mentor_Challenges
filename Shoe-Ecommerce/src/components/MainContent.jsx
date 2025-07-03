/** @format */
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Img,
  Text,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  useBreakpointValue,
  ModalFooter,
} from "@chakra-ui/react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { assets } from "../assets/asset";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const MainContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const thumbnails = [1, 2, 3, 4];

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    onOpen();
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container
      maxW={"100%"}
      fontFamily={"Kumbh Sans"}
      py={{ base: "8", md: "16", lg: "16" }}
      minH={"100vh"}
      // px={8}
      // border="1px solid green"
      // bg={"red.500"}
    >
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-around"}
        alignItems={"center"}
        maxW={"1200px"}
        w={"100%"}
        px={{ base: 4, md: 16 }}
        // bg={"gray.600"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={4}
          width={{ base: "100%", md: "60%", lg: "40%" }}
          // bg={"blue.500"}
        >
          {isMobile ? (
            <Swiper
              navigation={true}
              modules={[Navigation]}
              style={{ width: "100%", borderRadius: "16px" }}
            >
              {thumbnails.map((num, idx) => (
                <SwiperSlide key={idx}>
                  <Img
                    src={assets[`imageProduct${num}`]}
                    borderRadius={"xl"}
                    width={"100%"}
                    maxH={"400px"}
                    objectFit={"contain"}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <>
              <Box width={"90%"} display={"flex"} justifyContent={"center"}>
                <Img src={assets.imageProduct1} borderRadius={"lg"} />
              </Box>
              <HStack justifyContent={"center"} spacing={4} width={"100%"}>
                {thumbnails.map((num, idx) => (
                  <Box
                    boxSize={"18%"}
                    key={idx}
                    cursor={"pointer"}
                    onClick={() => handleImageClick(idx)}
                  >
                    <Image
                      src={assets[`imageProduct${num}Thumbnail`]}
                      alt="ShoeImage"
                      borderRadius={"lg"}
                    />
                  </Box>
                ))}
              </HStack>
            </>
          )}
        </Box>

        <Box
          width={{ base: "100%", md: "45%" }}
          py={8}
          px={{ base: "0", md: "4" }}
        >
          <Heading
            as={"h2"}
            fontSize={{ base: "sm", md: "10px" }}
            mb={2}
            color={"#68707d"}
            fontWeight={700}
          >
            SNEAKER COMPANY
          </Heading>
          <Heading
            as="h1"
            mb={{ base: "4", md: "5" }}
            fontSize={{ base: "2xl", lg: "3xl" }}
            fontWeight={"bold"}
          >
            Fall Limited Edition Sneakers
          </Heading>
          <Text
            mb={3}
            color={"#68707d"}
            fontSize={{ base: "sm", md: "xs" }}
            // width={{ base: "100%", md: "50%" }}
            // fontWeight={"semibold"}
          >
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </Text>
          <Stack
            direction={{ base: "row", md: "column" }}
            align={"center"}
            justifyContent={"space-between"}
          >
            <HStack spacing={4}>
              <Text fontWeight={"bolder"} fontSize={{ base: "xl" }}>
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
            py={{ base: 4 }}
          >
            {" "}
            <Button
              w={{ base: "100%", md: "70%" }}
              fontSize={"xs"}
              size={{ base: "sm", lg: "md" }}
            >
              <HStack
                fontSize={"xs"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                width={"100%"}
              >
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
              size={{ base: "sm", lg: "md" }}
              rounded="lg"
              w={{ base: "100%" }}
              bg={"#ff7d1a"}
              color={"#000000"}
              gap={4}
            >
              <MdOutlineShoppingCart />
              <Text fontSize={"xs"}> Add to cart</Text>
            </Button>
          </Stack>
        </Box>
      </Box>
      <Modal>
        <ModalOverlay />
        <ModalCloseButton />
        <ModalBody>
          <Swiper
            initialSlide={currentImageIndex}
            navigation={true}
            modules={[Navigation]}
            onSlideChange={(swiper) => setCurrentImageIndex(swiper.activeIndex)}
          >
            {thumbnails.map((num, idx) => (
              <SwiperSlide key={idx}>
                <Img
                  src={assets[`imageProduct${num}`]}
                  alt={`Product ${num}`}
                  borderRadius={"xl"}
                  width={"100%"}
                  maxH={"400px"}
                  objectFit={"contain"}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default MainContent;
