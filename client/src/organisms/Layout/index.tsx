import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import ApplicationBar from "./components/AppBar";
import DrawerMenu from "./components/Drawer";

function Layout() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ApplicationBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <DrawerMenu open={open} handleDrawerClose={handleDrawerClose} />
    </Box>
  );
}

export default Layout;
