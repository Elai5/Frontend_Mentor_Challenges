/** @format */

import {
  ChatIcon,
  CheckCircleIcon,
  EmailIcon,
  StarIcon,
  WarningIcon,
} from "@chakra-ui/icons";
import {
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs mt={"40px"} p={"20px"} colorScheme="purple" variant={"enclosed"}>
      <TabList>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Task History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon}></ListIcon>
              Email: mario@lux.dev
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon}></ListIcon>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon}></ListIcon>
              Lorem ipsum dolor sit amet.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List>
            {" "}
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={"teal.400"}></ListIcon>
              Lorem ipsum dolor sit amet.
              <ListItem>
                <ListIcon as={CheckCircleIcon} color={"teal.400"}></ListIcon>
                Lorem ipsum dolor sit amet.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color={"red.400"}></ListIcon>
                Lorem ipsum dolor sit amet.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color={"teal.400"}></ListIcon>
                Lorem ipsum dolor sit amet.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color={"red.400"}></ListIcon>
                Lorem ipsum dolor sit amet.
              </ListItem>
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
