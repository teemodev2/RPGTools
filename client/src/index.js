import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import NavigationMenu from "./organisms/Layout/components/NavigationMenu/index.tsx";
import Layout from "./organisms/Layout/index";
import { theme } from "./palette.tsx";
import { router } from "./routes/index.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ThemeProvider theme={theme}>
        <Layout />
        <Box display="flex">
          <NavigationMenu />
          <App />
        </Box>
      </ThemeProvider>
    </RouterProvider>
  </React.StrictMode>
);
