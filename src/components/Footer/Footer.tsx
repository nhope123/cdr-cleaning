import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { Box, SxProps, Theme, Typography } from "@mui/material";
import React from "react";
import SocialMedia from "./SocialMedia";

const containerSx: SxProps<Theme> = {
  boxShadow: "0px -1px 1px rgba(0, 0, 0, 0.25)",
  alignItems: "center", 
  columnGap: (theme) => `${theme.spacing(3)}`,
  rowGap: (theme) => `${theme.spacing(2)}`,
  display: "flex",
  flexDirection: { xs: "column", md: "row"},
  fontStyle: "italic",
  justifyContent: "center",
  width: "100vw",
  flexGrow: 1,
  p: 2,
};

const socialSx: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: (theme) => `${theme.spacing(1)}`,
};

const socials = [
  {
    icon: <FacebookIcon />,
    link: "https://www.facebook.com/",
    color:  "#0984ed",
    title: "Facebook",
  },
  {
    icon: <XIcon />,
    link: "https://x.com/i/flow/login",
    color: "#242d34",
    title: "X.com",
  },
  {
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/",
    color: "#d90485",
    title: "Instagram",
  },
];

const copyRight = "© 2024 CDR Cleaning Services";

const Footer: React.FC = () => {
  return (
    <Box sx={containerSx}>
      
      <Box sx={socialSx}>
        {socials.map((social) => (
          <SocialMedia key={social.link} {...social} />
        ))}
      </Box>
      <Typography textAlign="center" >{copyRight}</Typography>
    </Box>
  );
};

export default Footer;
