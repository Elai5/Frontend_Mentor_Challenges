/** @format */

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

export default function Create() {
  return (
    <Box maxW="480px">
      <Form method="post" action="/create">
        <FormControl isRequired mb={"40px"}>
          <FormLabel>Task Name:</FormLabel>
          <input type="text" name="title" id="" />
          <FormHelperText>Enter a descriptive Task Name</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Task description:</FormLabel>
          <Textarea
            placeholder="Enter a detailed description for the task..."
            name="description"
          ></Textarea>
        </FormControl>

        <FormControl display={"flex"} alignItems={"center"} mb={"40px"}>
          <Checkbox
            name="isPriority"
            size={"lg"}
            colorScheme="purple"
          ></Checkbox>
          <FormLabel mb={"0"} ml={"10px"}>
            Make this a priority task
          </FormLabel>
        </FormControl>

        <Button type="submit">Submit</Button>
      </Form>
    </Box>
  );
}

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get("title"),
    description: data.get("description"),
    isPriority: data.get("isPriority") === "",
  };
  console.log(task);

  return redirect("/");
};
