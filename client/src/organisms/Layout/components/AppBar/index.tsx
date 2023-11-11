import { Box, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ProfileMenu from "../ProfileMenu";

function ApplicationBar() {
  return (
    <AppBar position="sticky">
      <Toolbar disableGutters>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            width: 1,
          }}
        >
          <Typography sx={{ mx: 2 }}>LOGO</Typography>
          <ProfileMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ApplicationBar;
