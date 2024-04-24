import AdbIcon from "@mui/icons-material/Adb";
import { SxProps, Theme } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import logo from "../../assets/logo.png";

const iconSx: SxProps<Theme> = {
  display: { xs: "none", md: "flex" },
  mr: 1,
};

const textSx: SxProps<Theme> = {
  mr: 2,
  display: { xs: "none", md: "flex" },
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
};

const Logo = () => {
  return (
    <>
      <img alt="company logo" src={logo}  />
      {/* <AdbIcon sx={iconSx} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={textSx}
      >
        LOGO */}
      {/* </Typography> */}
    </>
  );
};

export default Logo;
