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
import { Form } from "react-router-dom";

export default function Create() {
  return (
    <Box maxW="480px">
      <Form>
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
