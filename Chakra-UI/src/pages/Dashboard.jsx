/** @format */
import { Container, Heading, Text, Box } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Container as="section" maxW="4xl">
      <Heading my="30px" p="10px">
        Chakra UI components
      </Heading>
      <Text>
        Hello Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aspernatur praesentium deleniti veniam?
      </Text>
      <Text ml="30px" color="blue.300" fontWeight="bold">
        Hello Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aspernatur praesentium deleniti veniam?
      </Text>
      <Box my="30px" p="20px" bg="gold">
        <Text color="white">I have a box</Text>
      </Box>
    </Container>
  );
}
