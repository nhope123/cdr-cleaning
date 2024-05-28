import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";
import React from "react";
import CallToAction from "./CallToAction";
import Hero from "./Hero";
import Services from "./Services";

interface Props {
  // Define your component's props here
}

const mainSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
  flexShrink: 1,
};

const Content: React.FC<Props> = () => {
  return (
    <Box sx={mainSx}>
      <Hero />
      <Services />
      <CallToAction />
    </Box>
  );
};

export default Content;
