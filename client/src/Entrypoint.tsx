import { ThemeProvider } from "@emotion/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { theme } from "./palette";
import { router } from "./routes";

const route = createBrowserRouter(router);

function Entrypoint() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={route} />
    </ThemeProvider>
  );
}

export default Entrypoint;
