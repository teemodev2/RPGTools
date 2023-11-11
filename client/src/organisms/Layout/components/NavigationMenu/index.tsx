import { Box, Typography } from "@mui/material";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import React from "react";

function NavigationMenu() {
  const fakeMenu = [
    {
      name: "Dons",
      route: "/dons",
      icon: <AccessibilityIcon />,
    },
    { name: "Compétences", route: "/competences", icon: <AccessibilityIcon /> },
    { name: "Équipements", route: "/equipements", icon: <AccessibilityIcon /> },
  ];

  return (
    <Box sx={{ backgroundColor: "primary.main", width: "10%" }}>
      {fakeMenu.map((item) => (
        <Box display="flex" alignItems="center" sx={{ ml: 1, mt: 2 }}>
          {item.icon}
          <Typography sx={{ ml: 1 }}>{item.name}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default NavigationMenu;
