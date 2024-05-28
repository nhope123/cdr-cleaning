import { Box, Typography } from "@mui/material";
import React from "react";

const content =
  "We are dedicated to providing top-notch cleaning services for both commercial and residential properties. Our team is committed to ensuring your space is spotless and inviting.";
const title = "About Us";

const AboutUs: React.FC = () => {
  return (
    <Box>
      <h1>{title}</h1>
      <Typography>{content}</Typography>
    </Box>
  );
};

export default AboutUs;
