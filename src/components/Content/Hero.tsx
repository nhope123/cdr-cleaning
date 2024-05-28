import { Theme } from "@emotion/react";
import { Box, Button, SxProps, Typography } from "@mui/material";
import React from "react";
import wave from "../../assets/wave.svg";

const containerSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
  flexShrink: 1,
  minHeight: "100vh",
  width: "100%",
  rowGap: 5,
  backgroundImage: `url(${wave})`,
};

const buttonSx: SxProps<Theme> = {
  backgroundColor: "#b51656",
  fontWeight: 700,
  "&:hover": {
    backgroundColor: "#f74bbd",
  },
};

const HEADLINE = "Experience the Best Cleaning Service";
const SUB_HEADLINE =
  "Professional and Reliable Cleaning for Your Home or Business";
const QUOTE = "Get a Free Quote";

const Hero: React.FC = () => (
  <Box id="home" sx={containerSx}>
    <Typography variant="h4">{HEADLINE}</Typography>
    <Typography variant="h5">{SUB_HEADLINE}</Typography>
    <Button variant="contained" sx={buttonSx}>
      {QUOTE}
    </Button>
  </Box>
);

export default Hero;
