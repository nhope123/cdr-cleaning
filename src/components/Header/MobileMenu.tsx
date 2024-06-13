import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Box, IconButton, Menu, MenuItem, SxProps, Theme } from '@mui/material';
import React, { useState } from 'react';

interface MobileMenuProps {
  menuItems: string[];
}


const containerSx = {
  display: { xs: "flex", md: "none" },
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  pr: 2,
  
};

const color = "primary.main";

const textSx: SxProps<Theme> = { color };

const MobileMenu: React.FC<MobileMenuProps> = (props) => {
  const { menuItems } = props;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement| null>(null);

  return (
    <Box sx={containerSx}>
      <IconButton onClick={(e) => {
        setIsMenuOpen(true);
        setAnchorEl(e?.currentTarget);
      }} sx={textSx}>
        { isMenuOpen ? <MenuOpenIcon /> : <MenuIcon />}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        sx={{display: { xs: "flex", md: "none" }}}
        >
          {
            menuItems.map((item) => (
            <MenuItem key={item}onClick={()  => window.location.href = `#${item}`} sx={{ color }}>{item}</MenuItem>
          ))            
          }
        </Menu>
    </Box>
  );
};

export default MobileMenu;
