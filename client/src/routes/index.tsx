import { ThemeProvider } from "@emotion/react";
import Layout from "../organisms/Layout";
import FeatsPage from "../pages/FeatsPage";
import HomePage from "../pages/HomePage";
import { theme } from "../palette";

export const router = [
  {
    path: "/",
    element: (
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    ),
    children: [
      {
        path: "feats",
        element: <FeatsPage />,
      },
      { path: "home", element: <HomePage /> },
    ],
  },
];
