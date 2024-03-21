import React from 'react'
import {  Box,  IconButton, MenuItem, Toolbar, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import { Link,  } from "react-router-dom"
import BookLogo from '@mui/icons-material/AutoStoriesTwoTone';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, MouseEvent } from 'react';
import Menu from '@mui/material/Menu';
import SearchBar from './SearchBar';



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<null | HTMLElement>(null)
  const openAnchor = Boolean(isMenuOpen)

  const openMenu = (e: React.MouseEvent<HTMLElement>) => {
    if (isMenuOpen !== e.currentTarget) {
      setIsMenuOpen(e.currentTarget)
    }
  };
  const closeMenu = () => {
    setIsMenuOpen(null);
  };


  return (
    <Box>
      <AppBar position="fixed" sx={{}}>
        <Toolbar>
          <Box display="flex" flex={1} alignItems={"center"}>
            <IconButton sx={{ display: { xs: 'flex', md: 'none' } }} size="large" edge="start" color="inherit" onClick={openMenu}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={isMenuOpen} open={openAnchor} onClose={closeMenu} sx={{ display: { xs: 'flex', md: 'none' } }}>
              <MenuItem component={Link} to="/" onClick={closeMenu}>
                Home
              </MenuItem>
              <MenuItem component={Link} to="/search/:search" onClick={closeMenu}>
                Search
              </MenuItem>
              <MenuItem component={Link} to="/login" onClick={closeMenu}>
                Login
              </MenuItem>
            </Menu>
            <IconButton sx={{ display: "flex" }} size="large" edge="start" color="inherit">
              <BookLogo />
            </IconButton>
            <Typography variant="h6" sx={{ display: "flex" }}>
              Library
            </Typography>
            <SearchBar/>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              <Typography variant="body1" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit', marginRight: '1rem' }}>
                Home
              </Typography>
              <Typography variant="body1" component={Link} to="/login" sx={{ textDecoration: 'none', color: 'inherit', marginRight: '1rem' }}>
                Login
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>



  )

}

export default Navbar;