import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Typography } from "@mui/material";
import React from "react";
import { email, phone } from "../sharedConstants";
import SocialMedia from "./SocialMedia";

const socials = [
  {
    icon: <FacebookIcon />,
    link: "https://www.facebook.com/",
  },
  {
    icon: <TwitterIcon />,
    link: "https://twitter.com/",
  },
  {
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/",
  },
];

const copyRight = "© 2024 CDR Cleaning Services";

const Footer: React.FC = () => {
  return (
    <Box>
      // menu to navigate to links
      <Box>
        {socials.map((social) => (
          <SocialMedia key={social.link} {...social} />
        ))}
      </Box>
      <Box>
        <Typography component={"a"} href={`tel: ${phone}`}>
          {`Phone: ${phone}`}
        </Typography>
        <Typography component={"a"} href={`mailto: ${email}`}>
          {`Email: ${email}`}
        </Typography>
      </Box>
      <Typography>{copyRight}</Typography>
    </Box>
  );
};

export default Footer;
