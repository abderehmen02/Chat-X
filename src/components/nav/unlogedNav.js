import { Typography , Stack , List , ListSubheader ,ListItemButton , ListItemIcon  , ListItemText } from '@mui/material'
import React from 'react'
import logo from '../Images/logo.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HomeIcon from '@mui/icons-material/Home';
import FeedIcon from '@mui/icons-material/Feed';


export const TopNav = ()=>{
    return <Stack><img style={{width : '100px' , height : '100px'}} src={logo} ></img> <Typography> Chat WX  an app  build for communication </Typography></Stack>
}



export const SideBar = ()=>{
      <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
 <HomeIcon/>         
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
            <ListItemButton>
        <ListItemIcon>
        <AccountCircleIcon/>
        </ListItemIcon>
        <ListItemText primary="Login" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
        <PersonAddIcon/>
        </ListItemIcon>
        <ListItemText primary="Regester" />
      </ListItemButton>
           <ListItemButton>
        <ListItemIcon>
        <FeedIcon/>
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItemButton> 
    </List>
}