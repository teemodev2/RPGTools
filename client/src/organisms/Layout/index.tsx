import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import ApplicationBar from "./components/AppBar";

function Layout() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ApplicationBar />
    </Box>
  );
}

export default Layout;
