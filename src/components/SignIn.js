import React ,  {useState} from 'react'
import { Modal } from '@material-ui/core';
import {auth} from '../firebase'
import {  BrowserRouter as Router,Link , useParams,  Route, Switch} from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import '../stylesheets/SignIn.css';
import SignInImage from '../Images/SignInImg.png'
import { FormControl, styled , Button ,Stack, TextField , Box ,  Typography } from '@mui/material';
import {TopNav , SideBar} from './nav/unlogedNav'

const StyledTextField =  styled(TextField)(({theme})=>({
 '& label': {
    color: '#fff' ,
    textShadow : 'none'
  },
   '& label.Mui-focused': {
    textShadow  : 'none'
  },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
       '&:hover fieldset': {
         borderColor: theme.palette.primary.main,
       },
    },
  
}));

function SignIn() {
const [Nav, setNav] = useState(false)
const [Email, setEmail] = useState('')
const [Password, setPassword] = useState('')
const history = useHistory()

    const authSignIn = (event)=>{
        event.preventDefault()
    auth.signInWithEmailAndPassword(Email , Password).then(res =>{
    
    }).then(()=>{
        history.push('/landing')
    }).catch(err=>{
        alert(err.message)
    })
    }
     const [Open, setOpen] = useState(true)
    return (
        <Stack  sx={{ border: '2px solid red'  , position : 'relative' , alignItems: 'center' , backgroundColor: 'secondary.dark' , width: '100vw' , minHeight: '100vh' }} onClick={()=>{setNav(false)}} spacing="64px" >
        <TopNav Nav={Nav} setNav={setNav} />
        <SideBar Nav={Nav} setNav={setNav} />
        <Stack direction={{xs: "column" , md: 'row'}} spacing={{xs: '40px'}} width="90%"  justifyContent="space-around" >
        <Stack spacing={5} width={{ xs: '100%'  , md: '40vw'}}  >
            <Typography textAlign="center" color="primary" variant="h2" >Sign In</Typography>
            <FormControl>
            <Stack spacing={2} >
            <StyledTextField value={Email} onChange={(e)=>setEmail(e.target.value)}  variant="outlined" sx={{textShadow : 'none'}} label="email" ></StyledTextField>
            <StyledTextField value={Password} onChange={(e)=>setPassword(e.target.value)} variant='outlined'  type="password" label="password" > </StyledTextField>
            <Button type='submit' variant="contained"  onClick={authSignIn}>Login</Button>
            </Stack>
            </FormControl>
            <Stack width="100%" alignItems="center"  spacing={2} >
                <Typography color="white.light" variant="h3" >Don't have an account ?</Typography>
                <Link style={{textDecoration: 'none' , color: 'inherit'  , width:'100%'  }} to="/regester" ><Button variant="standard" sx={{width : '100%'}} > Regester </Button></Link>
            </Stack>
        </Stack>
        <Box display={{xs: 'none' , md: 'block'}} >
        <img src={SignInImage}  ></img>
        </Box>
        </Stack>
        </Stack>
    )
//     <div>

//         <Modal className="SignInModal" open={Open} onClose={()=>{setOpen(false)   ; history.push('/')}}>
// <div class='SignInRealModal'>
// <h4 className='signIntittle'>Sign In</h4>
// <Input value={Email} onChange={(event)=>{setEmail(event.target.value)}} className='userName SignInInput' placeholder="User Name"></Input>
// <Input value={Password} onChange={(event)=>{setPassword(event.target.value)}} className='lastName SignInInput' placeholder="Password"></Input>
// <div className='SignInButtons'>
// <Button className='SignInButton button' onClick={authSignIn} variant='contained' color='secondary' >Sgin In</Button>
// <Link to='/SignUp' style={{textDecoration: 'none'}}>
// <Button className='SignUpButton button' variant='contained' color='secondary'>Sign Up</Button>
// </Link>
// </div>
// </div>
// </Modal>
// </div>
}

export default SignIn
