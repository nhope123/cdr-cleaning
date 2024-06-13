import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { SxProps, Theme } from "@mui/material/styles";
import { FC } from "react";

interface MenuProps {
  menuItems: string[];
}

const buttonSx: SxProps<Theme> = {
  my: 2,
  display: "block",
  color: "#b51656",
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


const Menu: FC<MenuProps> = ({ menuItems}) => {
  return (
    <Box sx={containerSx}>
      {menuItems.map((page) => (
        <Button
          LinkComponent={`a`}
          href={`#${page}`}
          key={page}
          sx={buttonSx}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
};

export default Menu;
