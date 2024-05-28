import { Theme } from "@emotion/react";
import { Box, Button, SxProps, Typography } from "@mui/material";
import React from "react";

const containerSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
  flexShrink: 1,
};

const buttonSx: SxProps<Theme> = {
  backgroundColor: "#f74bbd",
  // color: "#000",
  fontWeight: 700,
};

const HEADLINE = "Experience the Best Cleaning Service";
const SUB_HEADLINE =
  "Professional and Reliable Cleaning for Your Home or Business";
const QUOTE = "Get a Free Quote";

const Hero: React.FC = () => (
  <Box sx={containerSx}>
    <Typography variant="h4">{HEADLINE}</Typography>
    <Typography variant="h5">{SUB_HEADLINE}</Typography>
    <Button variant="contained" sx={buttonSx}>
      {QUOTE}
    </Button>
  </Box>
);

export default Hero;
