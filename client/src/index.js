import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Layout from "./organisms/Layout/index.tsx";
import { theme } from "./palette.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Layout />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
