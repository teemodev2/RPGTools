import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

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
          <Link to={"/feats"}>
            <Typography sx={{ ml: 1 }}>{item.name}</Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );
}

export default NavigationMenu;
