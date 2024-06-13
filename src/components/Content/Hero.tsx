import { Theme } from "@emotion/react";
import { Box, Button, SxProps, Typography } from "@mui/material";
import React from "react";
import unSplash from "../../assets/unsplash.jpg";
import updateHTMLHeader from "../../helpers/helpers";

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
  p: 3,
  backgroundRepeat: "no-repeat",background: "url(" + unSplash + ") no-repeat center center / cover",
  
};

const buttonSx: SxProps<Theme> = {
  backgroundColor:  "primary.main",
  fontWeight: 700,
  "&:hover": {
    backgroundColor: "primary.light",
  },
};

const textContainerSx: SxProps<Theme> = {
  background: "linear-gradient(to right, rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.6))",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  borderRadius: 1.5,
  display: "flex",
  flexDirection: "column",
  gap: 2,
  p: 2,
};

const PAGE_TITLE = "CDR Cleaning Services | Professional - Residential & Commercial Cleaning";
const DESCRIPTION_CONTENT = "cdr cleaning services offers professional and reliable residential and commercial cleaning services. Contact us today for a free quote!";
const KEYWORDS_CONTENT = "about us, cleaning experts, professional cleaning, reliable cleaning, cleaning services, cdr cleaning services";

const HEADLINE = "Experience the Best Cleaning Service";
const SUB_HEADLINE =
  "Professional and Reliable Cleaning for Your Home or Business";
const QUOTE = "Get a Free Quote";

const Hero: React.FC = () => {
  updateHTMLHeader(PAGE_TITLE, DESCRIPTION_CONTENT, KEYWORDS_CONTENT);
  
  return (
    <Box id="Home" sx={containerSx}>
      <Box sx={textContainerSx}>
      <Typography textAlign="center" variant="h4">{HEADLINE}</Typography>
      <Typography textAlign="center" variant="h5">{SUB_HEADLINE}</Typography>
      </Box>
      <Button variant="contained" sx={buttonSx} onClick={() => {
        window.location.href = "#Contact";
      }}>
        {QUOTE}
      </Button>
    </Box>
  );
}

export default Hero;
