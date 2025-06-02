/** @format */
import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  SimpleGrid,
  Text,
  Flex,
  Heading,
  HStack,
  Button,
  Divider,
} from "@chakra-ui/react";
import { div } from "framer-motion/client";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const tasks = useLoaderData();

  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {tasks &&
        tasks.map((task) => (
          <Card key={task.id}>
            <CardHeader>
              <Flex>
                <Box w="50px" h="50px">
                  <Text>AV</Text>
                </Box>
                <Box>
                  <Heading as={"h3"} size={"sm"}>
                    {task.title}
                  </Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color={"gray.500"}>
              {" "}
              <Text>{task.description}</Text>
            </CardBody>

            <Divider borderColor={"gray.200"} />
            <CardFooter>
              {" "}
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant={"ghost"} leftIcon={<EditIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}

export const tasksLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks");

  return res.json();
};
