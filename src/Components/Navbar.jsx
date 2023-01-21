import React, { useState } from 'react'
import { AppBar, Toolbar, styled, Typography, Stack, Checkbox } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Fab from '@mui/material/Fab';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from "@mui/material"
import NavLogo from "./NavLogo.png"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Navbar(props) {
  const { mode, setMode } = props

  const [profileClick, setProfileClick] = useState(false)

  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
  })
  const SearchBar = styled('div')({
    backgroundColor: 'white',
    borderRadius: 8,
    width: '40%',
    padding: '0 10px',
    display: 'flex',
    justifyContent: 'space-between',
  })
  const FloatingButton = styled(Fab)({
    backgroundColor: 'white',
    maxHeight: 30,
  })
  return (
    <>
      <AppBar position='sticky'>
        <StyledToolbar>
          <Stack direction='row'>
            <Box component="img" sx={{ display: { xs: 'none', sm: 'block' }, height: 50 }} alt="Foodie Logo" src={NavLogo} />
            <Typography my='auto' mx={1} variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>My Foodspot!</Typography>
            <Box component="img" sx={{ display: { xs: 'block', sm: 'none' }, height: 50, }} alt="Foodie Logo" src={NavLogo} />
          </Stack>

          <SearchBar sx={{ bgcolor: "background.default", color: "text.primary", }} >
            <InputBase placeholder='Search Here....' fullWidth/>
            <FloatingButton variant="extended">
              <SearchIcon />
            </FloatingButton>
          </SearchBar>          
          {/* For Above Small Screens */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ minWidth: '45px' }}>
              <Badge badgeContent={4} color="error">
                <MailIcon color="action" />
              </Badge>
            </Button>
            <Button sx={{ minWidth: '45px' }}>
              <Badge badgeContent={4} color="error">
                <NotificationsNoneIcon color="action" />
              </Badge>
            </Button>
            <Button sx={{ minWidth: '45px' }}>
              <Avatar sx={{ maxHeight: 40, maxWidth: 40 }} alt="Unknown Person" src="https://www.singemindia.com/wp-content/uploads/2019/06/Passport-Size-Pic.jpg" onClick={e => { setProfileClick(true) }} />
            </Button>
          </Box>          
          {/* For Below Small Screens */}
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <Button sx={{ minWidth: '45px' }}>
              <Checkbox icon={<DarkModeIcon />} checkedIcon={<LightModeIcon />} onChange={e => setMode(mode === 'light' ? 'dark' : 'light')} />
            </Button>
            <Button sx={{ minWidth: '45px' }}>
              <Avatar sx={{ maxHeight: 40, maxWidth: 40 }} alt="Unknown Person" src="https://www.singemindia.com/wp-content/uploads/2019/06/Passport-Size-Pic.jpg" onClick={e => { setProfileClick(true) }} />
            </Button>
          </Box>
        </StyledToolbar>
        <Menu
          aria-labelledby="demo-positioned-button"
          open={profileClick}
          onClose={(e) => { setProfileClick(false) }}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={e => { alert("This is only profile available on this account") }}>Profile</MenuItem>
          <MenuItem onClick={e => { alert("Let me fetch your account details") }}>My account</MenuItem>
          <MenuItem onClick={e => { alert("You will be logged out soon.") }}>Logout</MenuItem>
        </Menu>
      </AppBar>

    </>
  )
}
