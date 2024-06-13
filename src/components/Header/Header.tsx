import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { FC } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

const pages = ["Home", "About Us", "Contact"];

const Header: FC = () => {

  return (
    <AppBar
      sx={{
        backgroundColor: "#fff",
        boxShadow: 1,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters={false} sx={{
          justifyContent: { xs: "flex-start", md: "space-between" },
        }}>
          <MobileMenu menuItems={pages}/>
          <Logo />
          <Menu menuItems={pages}/>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
