import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import logo from "../../assets/logo.png";

const containerSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  justifyContent: "flex-start",
  textDecoration: "none",
  color: "primary.main", 
};

const textSx: SxProps<Theme> = {
  display: { xs: "none", md: "flex" },
  fontFamily: "monospace",
  fontStyle: "normal",
  fontWeight: 700,
  letterSpacing: ".3rem",
  mr: 2,  
};

const MOTTO = "Cleaning Done Right";

const Logo = () => {
  return (
    <Box component={"a"} href="/cdr-cleaning" sx={containerSx}>
      <img alt="company logo" src={logo} />
      <Typography
        variant="caption"
        noWrap
        sx={textSx}
      >
        {MOTTO}
      </Typography>
    </Box>
  );
};

export default Logo;
