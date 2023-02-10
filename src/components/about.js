import { Stack , Typography } from '@mui/material'
import React, { useState } from 'react'
import { SideBar, TopNav } from './nav/unlogedNav'
import AboutImage from '../Images/AboutImg.png'



function AboutPage() {
    const [Nav, setNav] = useState(false)
  return (
    <Stack>
<TopNav Nav={Nav} setNav={setNav} ></TopNav>
<SideBar  Nav={Nav} setNav={setNav} />
<Stack direction="row">
<Stack>
    <Typography></Typography>
</Stack>
<img src={AboutImg} ></img> 
<Stack>
    <Typography variant='h3' >What Is ChatWX</Typography>
    <Typography variant="paragraph" >
        Chat WX is an web app similar to instagram  
where you can follow other people , see their 
posts and daily events , engage in their content
by cheking their new posts , linking and 
comenting on their posts 
    </Typography>
</Stack>
</Stack>
    </Stack>
  )
}

export default AboutPage