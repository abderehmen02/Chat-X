import { Stack , Typography } from '@mui/material'
import React, { useState } from 'react'
import { SideBar, TopNav } from './nav/unlogedNav'
import AboutImage from '../Images/AboutImg.png'



function AboutPage() {
    const [Nav, setNav] = useState(false)
  return (
    <Stack sx={{backgroundColor: 'secondary.dark' , width : '100vw' , minHeight : '100vh' ,alignItems: 'center' }} spacing="70px" onClick={()=>{setNav(false)}} >
<TopNav Nav={Nav} setNav={setNav} ></TopNav>
<SideBar  Nav={Nav} setNav={setNav} />
<Stack direction="row"  width="100vw" justifyContent="space-around" >
<Stack  alignItems="center" spacing="24px" >
    <Typography fontWeight="bold" color="primary.main" variant='h3' textAlign="center" >What Is ChatWX</Typography>
    <Typography variant="paragraph" maxWidth="280px" color="#fff" textAlign="center" >
        Chat WX is an web app similar to instagram  
where you can follow other people , see their 
posts and daily events , engage in their content
by cheking their new posts , linking and 
comenting on their posts 
    </Typography>
</Stack>
<img src={AboutImage} ></img> 

</Stack>
    </Stack>
  )
}

export default AboutPage