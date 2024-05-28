import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { SxProps, Theme } from "@mui/material/styles";

const buttonSx: SxProps<Theme> = {
  my: 2,
  display: "block",
  color: "black", // "#b51656",
  // fontWeight: 600,
  "&:hover": {
    color: "#b51656",
    fontWeight: 600,
  },
};
const containerSx: SxProps<Theme> = {
  flexGrow: 1,
  display: { xs: "none", md: "flex" },
  justifyContent: "flex-end",
};

const pages = ["Home", "About Us", "Services", "Contact"];

const Menu = () => {
  // const handleCloseNavMenu = () => {
  //   alert("clicked");
  // };

  return (
    <Box sx={containerSx}>
      {pages.map((page) => (
        <Button
          LinkComponent={`a`}
          href={`#${page}`}
          key={page}
          // onClick={handleCloseNavMenu}
          sx={buttonSx}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
};

export default Menu;
