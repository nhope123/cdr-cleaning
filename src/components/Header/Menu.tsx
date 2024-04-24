import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { SxProps, Theme } from "@mui/material/styles";
import React, { useState } from "react";

const buttonSx: SxProps<Theme> = {
  my: 2,
  display: "block",
  color: "#f74bbd",
};
const containerSx: SxProps<Theme> = {
  flexGrow: 1,
  display: { xs: "none", md: "flex" },
  justifyContent: "flex-end",
};

const activeSx: SxProps<Theme> = {
  color: "#f74bbd",
};
const pages = ["Home", "Services", "Contact"];

const Menu = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box sx={containerSx}>
      {pages.map((page) => (
        <Button key={page} onClick={handleCloseNavMenu} sx={buttonSx}>
          {page}
        </Button>
      ))}
    </Box>
  );
};

export default Menu;
