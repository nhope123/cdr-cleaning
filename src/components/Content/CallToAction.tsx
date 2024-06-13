import { Theme } from "@emotion/react";
import { Box, SxProps, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { email, phone } from "../sharedConstants";

const quoteSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
  pt: 6,
  pb: 6,
  pl: 2,
  pr: 2,
  textDecoration: "unset",
  width: "100vw",
  minHeight: { xs: 'calc(100vh - 94px)', md: "calc(100vh - 64px)" },
};

const textSx: SxProps<Theme> = {
  textDecoration: "unset",
  color: "#b51656",
};
const title = "For your Free Quote";

const quote = [
  {
    header: "Call",
    content: phone,
    href: `tel: ${phone}`,
  }, 
  {
    header: "or email us at",
    content: email,
    href: `mailto: ${email}`,
    
  }
]

const CallToAction: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box id="Contact" sx={quoteSx}>
      <Typography variant="h4">{title}</Typography>
      {
        quote.map((item) => (
          <Box key={item.header}>
            <Typography textAlign="center" variant="h6">{item.header}</Typography>
            <Typography
              component="a"
              href={item.href}
              sx={textSx} 
              textAlign="center"
              variant={isMobile ? 'h6' : "h5"}
              >
                {item.content}
              </Typography>
          </Box>
        ))
      }
    </Box>
  );
};

export default CallToAction;
