import { Box, Typography } from "@mui/material";
import React from "react";

const containerSx = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  p: 3,
};
const content =
  "We are dedicated to providing top-notch cleaning services for both commercial and residential properties. Our team is committed to ensuring your space is spotless and inviting.";
const title = "About Us";

const AboutUs: React.FC = () => {
  return (
    <Box  sx={containerSx}>
      <h1 >{title}</h1>
      <Typography
        textAlign="center"     >
        {content}
      </Typography>
    </Box>
  );
};

export default AboutUs;
