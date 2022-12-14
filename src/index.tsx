import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import Calculator from "./Components/Calculator";
import ToggleColorMode from "./Components/ToggleColorMode";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ToggleColorMode />
      <Calculator />
    </ChakraProvider>
  </React.StrictMode>
);
