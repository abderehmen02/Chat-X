import { Typography , Stack , List , ListSubheader ,ListItemButton , ListItemIcon  , ListItemText, ListItem } from '@mui/material'
import React from 'react'
import logo from '../../Images/logo.png'
import {motion} from 'framer-motion' ;
import 'bootstrap-icons/font/bootstrap-icons.css';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';
import ReceiptIcon from '@mui/icons-material/Receipt';
import HomeIcon from '@mui/icons-material/Home';

export const TopNav = ()=>{
    return <Stack direction="row" width="100vw" justifyContent="space-around"  alignItems="center"  ><Typography color={(theme)=>theme.palette.white.light} > <FormatListBulletedIcon color='#fff' /></Typography> <Typography variant='h3'  color={(theme)=>theme.palette.white.light} > Chat WX  an app  build for communication </Typography> <img style={{width : '80px' , height : '80px'}} src={logo} ></img> </Stack>
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
    > <ListItem>          <motion.div
  className='myLogo' 
  style={{
      backgroundImage: `url(${logo})`
  }}
    animate={{
      scale: [1, 1.2, 1.2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    transition={{
        duration: 1 ,
        delay: 0.5
    }}> <motion.div  
    
        animate={{
      scale: [1, 1.2, 1.2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    transition={{
        duration: 1 ,
        delay: 0.5
    }}

    className='logoOverlay' ></motion.div> </motion.div></ListItem>
      <ListItemButton>
        <ListItemIcon>
 <i className="bi bi-house-door-fill"></i>
       </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
            <ListItemButton>
        <ListItemIcon>
 <i className="bi bi-person"></i>
       </ListItemIcon>
        <ListItemText primary="Login" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
<i className="bi bi-person-plus-fill"></i>        </ListItemIcon>
        <ListItemText primary="Regester" />
      </ListItemButton>
           <ListItemButton>
        <ListItemIcon>
 <i className="bi bi-newspaper"></i>       </ListItemIcon>
        <ListItemText primary="About" />
      </ListItemButton> 
    </List>
}