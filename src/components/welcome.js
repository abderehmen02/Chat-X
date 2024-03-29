import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {Stack, Typography , Button} from '@mui/material'
import logo from '../Images/logo.png'
import '../stylesheets/welcome.css'
import {useHistory} from 'react-router-dom'
import { auth } from '../firebase' 
import {TopNav  , SideBar} from './nav/unlogedNav'
import HomeImage from '../Images/homeImg.png'



function welcome() {
const history = useHistory()
const [Nav, setNav] = useState(false)
const signInAsAGuest = ()=>{
auth.signInWithEmailAndPassword( process.env.REACT_APP_EmailGuest , process.env.REACT_APP_passwordGuest ).then(()=>{
history.push('/landing')
}).catch(err => alert(err))
} 
    return (
        <Stack spacing="40px" direction="column"  width='100vw' sx={{backgroundColor : 'secondary.dark' , alignItems:"center" , minHeight: '100vh'   }} onClick={()=>{setNav(false)}} >
<TopNav setNav={setNav} Nav={Nav} />
<SideBar Nav={Nav} setNav={setNav} logo={logo} />
<Stack  spacing={{xs: '40px'}}  direction={{xs: 'column-reverse' , md : 'row'}} sx={{ width : '95%' , justifyContent :'space-around' , alignItems: 'center' }}  >
<img height="300px"   src={HomeImage} ></img>
<Stack spacing={5} alignItems="center" height='60vh' >
<Stack alignItems="center" >
<Typography  variant='h2' textAlign='center'  color="primary" >Welcome to CHAT WX</Typography>
<Typography color="#fff" >Where all comunities come together</Typography>
</Stack>
<Stack direction='column' gap="4px" height="100%"  width={{xs: '80vw' , md : "inherit"}}   justifyContent="space-around" >
<Stack direction={{xs: 'column' , md : 'row'}} spacing={2} width="100%" ><Link to="/login" style={{textDecoration : 'none' , width: "100%" }} > <Button sx={{width : '100%'}} variant='contained'  >Log In</Button></Link><Link to="/regester" style={{textDecoration : 'none'}}><Button sx={{width : '100%'}} variant='outlined'   >Regester</Button></Link> </Stack>
<Button width="100%" variant="standard" onClick={signInAsAGuest} >Sign In As A Guest</Button>
<Button variant="contained" width="100%" ><Link to="/about" style={{textDecoration : 'none' }} >About This Project</Link></Button>
          {/* <div className='buttons'  >
     <div className='btn' >       <Button size='large'   variant='contained' color='secondry' ><Link style={{textDecoration : 'none'}} to='/SignIn'>Sign In</Link></Button></div>
      <div className='btn' >      <Button size='large' variant='contained' color='primary' ><Link  style={{textDecoration: 'none'}} to='/SignUp'>Sign Up</Link></Button></div>
      <div className='btn' onClick={signInAsAGuest} > <Button size='large'  variant="contained" color="secondary" > Sign In As A Guest  </Button> </div>
        </div> */}
</Stack>
</Stack>
</Stack>
</Stack>
    )



    //        <section className='welcomeBackground' >
    // <h2>
    //    Hello October!
    //   </h2>
 
    //  <div className="leaf mobileHide" >
    //   <div>  <img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png" height="75px" width="75px"/></div>
    //   <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png" height="75px" width="75px"/></div>
    //   <div>  <img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png" height="75px" width="75px" /></div>
    //   <div><img  src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png" height="75px" width="75px"/></div>
    //    <div> <img src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" height="75px" width="75px"/></div>
    //  <div>   <img src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png" height="75px" width="75px"/></div>
    //  <div><img src="http://cdn.clipart-db.ru/rastr/autumn_leaves_025.png" height="75px" width="75px"/> </div>
            
    //  </div> 
     
    //  <div className="leaf leaf1 mobileHide " >
    //  <div>  <img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png" height="75px" width="75px"/></div>
    //   <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png" height="75px" width="75px"/></div>
    //   <div>  <img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png" height="75px" width="75px" /></div>
    //   <div><img  src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png" height="75px" width="75px"/></div>
    //    <div> <img src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" height="75px" width="75px"/></div>
    //  <div>   <img src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png" height="75px" width="75px"/></div>
    //  <div><img src="http://cdn.clipart-db.ru/rastr/autumn_leaves_025.png" height="75px" width="75px"/></div>
            
    //  </div>
     
    //  <div className="leaf leaf2 mobileHide">
    //  <div>  <img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png" height="75px" width="75px"/></div>
    //   <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png" height="75px" width="75px"/></div>
    //   <div>  <img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png" height="75px" width="75px" /></div>
    //   <div><img  src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png" height="75px" width="75px"/></div>

    //    <div> <img src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" height="75px" width="75px"/></div>
    //  <div>   <img src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png" height="75px" width="75px"/></div>
    //  <div><img src="http://cdn.clipart-db.ru/rastr/autumn_leaves_025.png" height="75px" width="75px"/></div>
            
    //  </div>
    //  </section>
}

export default welcome
