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
  VStack,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useBreakpointValue,
} from "@chakra-ui/react";

import { MdOutlineShoppingCart } from "react-icons/md";
import { assets } from "../assets/asset";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Content = () => {
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
      display="flex"
      justifyContent="center"
      alignItems="center"
      maxW="100%"
      fontFamily="Kumbh Sans"
      py={{ base: 8, md: 16 }}
      minH="100vh"
    >
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-around"
        alignItems="center"
        maxW="1200px"
        w="100%"
        px={{ base: 4, md: 8 }}
        bg="green.100"
        borderRadius="xl"
        boxShadow="md"
      >
        {/* LEFT IMAGE SECTION */}
        {/* <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={4}
          width={{ base: "100%", md: "45%" }}







        >
          <Box width="100%" display="flex" justifyContent="center">
            <Img src={assets.imageProduct1} borderRadius="xl" width="70%" />
          </Box>
          <HStack justifyContent="center" spacing={4} width="100%">
            {thumbnails.map((num, idx) => (
              <Box
                boxSize="18%"
                key={idx}
                cursor={"pointer"}
                onClick={() => handleImageClick(idx)}
              >
                <Image
                  src={assets[`imageProduct${num}Thumbnail`]}
                  borderRadius="lg"
                />
              </Box>
            ))}
          </HStack>
        </Box> */}
        {/* LEFT IMAGE SECTION */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={4}
          width={{ base: "100%", md: "45%" }}
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
                    borderRadius="xl"
                    width="100%"
                    maxH="400px"
                    objectFit="contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <>
              <Box width="100%" display="flex" justifyContent="center">
                <Img src={assets.imageProduct1} borderRadius="xl" width="70%" />
              </Box>
              <HStack justifyContent="center" spacing={4} width="100%">
                {thumbnails.map((num, idx) => (
                  <Box
                    boxSize="18%"
                    key={idx}
                    cursor="pointer"
                    onClick={() => handleImageClick(idx)}
                  >
                    <Image
                      src={assets[`imageProduct${num}Thumbnail`]}
                      borderRadius="lg"
                    />
                  </Box>
                ))}
              </HStack>
            </>
          )}
        </Box>

        {/* RIGHT TEXT SECTION */}
        <Box width={{ base: "100%", md: "45%" }} py={8} px={{ base: 0, md: 4 }}>
          <Heading
            as="h2"
            fontSize={{ base: "sm", md: "lg" }}
            mb={5}
            color="#68707d"
            fontWeight="bolder"
          >
            SNEAKER COMPANY
          </Heading>

          <Heading
            as="h1"
            mb={{ base: 4, md: 7 }}
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          >
            Fall Limited Edition Sneakers
          </Heading>

          <Text mb={5} color="#68707d" fontSize={{ base: "sm", md: "md" }}>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </Text>

          <Stack direction={{ base: "row", md: "column" }}>
            <HStack spacing={4} mb={2}>
              <Text fontWeight="bolder" fontSize={{ base: "2xl", md: "3xl" }}>
                $125.00
              </Text>
              <Button bg="black" color="white" size="sm">
                50%
              </Button>
            </HStack>
            <Text
              textDecoration="line-through"
              as="small"
              px={1}
              color="#b6bcc8"
            >
              $250.00
            </Text>
          </Stack>

          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={4}
            w="100%"
            py={8}
          >
            <Button w={{ base: "100%", md: "40%" }}>
              <HStack spacing={6}>
                <Box>
                  <Image src={assets.minusIcon} />
                </Box>
                <Text>0</Text>
                <Box>
                  <Image src={assets.plusIcon} />
                </Box>
              </HStack>
            </Button>
            <Button
              rounded="md"
              w={{ base: "100%", md: "60%" }}
              bg="#ff7d1a"
              color="#fff"
              gap={4}
              onClick={onOpen}
            >
              <MdOutlineShoppingCart />
              Add to cart
            </Button>
          </Stack>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Product Image</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Swiper
              initialSlide={currentImageIndex}
              navigation={true}
              modules={[Navigation]}
              onSlideChange={(swiper) =>
                setCurrentImageIndex(swiper.activeIndex)
              }
            >
              {thumbnails.map((num, idx) => (
                <SwiperSlide key={idx}>
                  <Img
                    src={assets[`imageProduct${num}`]}
                    alt={`Product ${num}`}
                    borderRadius="xl"
                    width="100%"
                    maxH="400px"
                    objectFit="contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Content;
