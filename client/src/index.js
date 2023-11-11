import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Layout from "./organisms/Layout/index";
import { theme } from "./palette.tsx";
import NavigationMenu from "./organisms/Layout/components/NavigationMenu/index.tsx";
import { Box } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Layout />
      <Box display="flex">
        <NavigationMenu />
        <App />
      </Box>
    </ThemeProvider>
  </React.StrictMode>
);
