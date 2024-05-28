import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import logo from "../../assets/logo.png";

const containerSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  justifyContent: "flex-start",
  // flexGrow: 1,
  // flexShrink: 1,
};

// const iconSx: SxProps<Theme> = {
//   display: { xs: "none", md: "flex" },
//   mr: 1,
// };

const textSx: SxProps<Theme> = {
  mr: 2,
  display: { xs: "none", md: "flex" },
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  textDecoration: "none",
  color: "#a42d8b",
};

const MOTTO = "Cleaning Done Right";

const Logo = () => {
  return (
    <Box sx={containerSx}>
      <img alt="company logo" src={logo} />
      <Typography
        variant="caption"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={textSx}
      >
        {MOTTO}
      </Typography>
    </Box>
  );
};

export default Logo;
