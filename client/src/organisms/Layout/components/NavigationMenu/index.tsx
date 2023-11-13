import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function NavigationMenu() {
  const fakeMenu = [
    {
      name: "Dons",
      route: "/feats",
      icon: <AccessibilityIcon />,
    },
    { name: "Compétences", route: "/home", icon: <AccessibilityIcon /> },
    { name: "Équipements", route: "/", icon: <AccessibilityIcon /> },
  ];

  return (
    <Box
      sx={{
        height: `calc(100vh - 64px)`,
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        backgroundColor: "primary.light",
        width: (theme) => theme.spacing(25),
        boxShadow: 2,
      }}
    >
      {fakeMenu.map((item) => (
        <Box display="flex" alignItems="center" sx={{ ml: 1, mt: 2 }}>
          {item.icon}
          <Link to={item.route}>
            <Typography sx={{ ml: 1 }}>{item.name}</Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );
}

export default NavigationMenu;
