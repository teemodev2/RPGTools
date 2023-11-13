import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import ApplicationBar from "./components/AppBar";
import NavigationMenu from "./components/NavigationMenu";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Box>
        <CssBaseline />
        <ApplicationBar />
      </Box>
      <Box display="flex">
        <NavigationMenu />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
