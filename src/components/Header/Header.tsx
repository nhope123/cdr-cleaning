import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { FC } from "react";
import Logo from "./Logo";
import Menu from "./Menu";

// const pages = ["Home", "Services", "Contact"];

const Header: FC = () => {
  // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
  //   null
  // );

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  return (
    <AppBar
      sx={{
        backgroundColor: "#fff",
        boxShadow: 1,
        // opacity: 1,

        // position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters={false}>
          <Logo />
          <Menu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
