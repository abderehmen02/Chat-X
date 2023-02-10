import { Typography , Box , Stack , List , ListSubheader ,ListItemButton , ListItemIcon  , ListItemText, ListItem } from '@mui/material'
import React , {useState , useEffect} from 'react'
import logo from '../../Images/logo.png'
import {motion , useAnimation} from 'framer-motion' ;
import 'bootstrap-icons/font/bootstrap-icons.css';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';
import ReceiptIcon from '@mui/icons-material/Receipt';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom';
import '../../app.css'


export const TopNav = ({setNav , Nav})=>{
    return <Stack  direction="row" width="100vw" justifyContent="space-around"  alignItems="center"  ><Typography  color={(theme)=>theme.palette.white.light}  onClick={(e)=>{setNav(true) ; e.stopPropagation() }}  sx={{cursor: 'pointer' , visibility: Nav? 'hidden' : 'visible' }} >  <FormatListBulletedIcon color='#fff' /></Typography> <Typography variant='h3'  color={(theme)=>theme.palette.white.light} > Chat WX  an app  build for communication </Typography> <img style={{width : '80px' , height : '80px'}} src={logo} ></img> </Stack>
}



export const SideBar = ({Nav , setNav , logo : myLogo })=>{
const navAnimate = useAnimation() ;

useEffect(() => {
  if(Nav){
    navAnimate.start({
        x: 0
    })
  }
  else {
    navAnimate.start({
        x: -500
    })
  }
}, [Nav])



return <motion.div initial={{x: 0}} animate={navAnimate}  style={{position : 'absolute' , top : '0px' , left : '50px'  , zIndex : 3 }}  >{Nav ? 
<Stack sx={{borderRadius : '8px' , padding : '24px' , backgroundColor: '#fff' }}  >
<Box sx={{width : '100%' , backgroundColor : '#fff', display : 'flex' , alignItems: 'center' , justifyContent: 'center' , padding : '8px 0px' }} >       
      <motion.div
  className='myLogo' 
  style={{
      backgroundImage: `url(${logo})` ,
      backgroundSize : 'cover' ,
      backgroundPosition : 'center' ,
      backgroundColor : 'black'
  }}
    animate={{
      scale: [1, 1.2, 1.2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    transition={{
        duration: 1 ,
        delay: 0.5
    }}><motion.div  
    
        animate={{
      scale: [1, 1.2, 1.2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    transition={{
        duration: 1 ,
        delay: 0.5
    }}

    className='logoOverlay' ></motion.div> </motion.div>
</Box>
<List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
        </ListSubheader>
      }
    >  <Link to="/"  style={{textDecoration : 'none'}} > <ListItemButton>
        <ListItemIcon>
 <i className="bi bi-house-door-fill"></i>
       </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton></Link>
     <Link to="/login" style={{textDecoration : 'none'}} ><ListItemButton>
        <ListItemIcon>
 <i className="bi bi-person"></i>
       </ListItemIcon>
        <ListItemText primary="Login" />
      </ListItemButton></Link>
<Link to="regester" style={{textDecoration : 'none'}}><ListItemButton>
        <ListItemIcon>
<i className="bi bi-person-plus-fill"></i>        </ListItemIcon>
        <ListItemText primary="Regester" />
      </ListItemButton></Link>
 <Link to="/about"  style={{textDecoration : 'none'}}  >          <ListItemButton>
        <ListItemIcon>
 <i className="bi bi-newspaper"></i>       </ListItemIcon>
        <ListItemText primary="About" />
      </ListItemButton> </Link>
    </List> </Stack>
: <Box></Box> }</motion.div>
}