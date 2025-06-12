/** @format */

// src/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'Fraunces', serif",
    body: "'Montserrat', sans-serif",
  },
  colors: {
    brand: {
      100: "#f7c948",
      900: "#1a202c",
    },
  },
  // add more customizations as needed
});

export default theme;
