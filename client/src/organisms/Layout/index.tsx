import React from "react";
import { Box, Typography } from "@mui/material";

function Layout() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: 1,
        height: "80px",
        backgroundColor: "primary.main",
      }}
    >
      <Typography
        sx={{ ml: 3, fontSize: "x-large", fontWeight: "bold", color: "white" }}
      >
        RPGTools
      </Typography>
    </Box>
  );
}

export default Layout;
