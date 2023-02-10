import React , {useState , useEffect} from 'react'
import { auth  , db} from '../firebase'
import { Modal } from '@material-ui/core'
import * as firebase from 'firebase/app'
import { motion } from 'framer-motion'
import 'firebase/firestore'
import '../stylesheets/welcome.css'
import signUpImage  from '../Images/regesterImg.png'
import { useHistory } from 'react-router-dom'
import { Stack ,styled ,  Button, Typography, TextField } from '@mui/material'
import { SideBar, TopNav } from './nav/unlogedNav'
function SignUp() {

//hooks
const [Nav, setNav] = useState(false)
const [UserName, setUserName] = useState('')
const [FirstName, setFirstName] = useState('')
const [LastName, setLastName] = useState('')
const [password, setPassword] = useState('')
const [age, setAge] = useState(new Date())
const [email, setEmail] = useState('')
const [VerefyModal, setVerefyModal] = useState(false)
const history = useHistory()



const StyledTextField =  styled(TextField)(({theme})=>({
  width: '100%'  ,
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






// functions
const add = (event)=>{ 
    event.preventDefault() ;
auth.createUserWithEmailAndPassword(email, password).then(res =>{ 
auth.currentUser.updateProfile({
    displayNamem: UserName,
})
db.collection('users').doc(res.user.uid).set({age , FirstName , lastName: LastName , email , followings: [] , profilePic: null , followers : [] ,userName: UserName  , timestamp : firebase.firestore.FieldValue.serverTimestamp()  })
}).catch(err => alert(err.message)
)
}
const addAndVerify = ()=>{
  event.preventDefault() ;
auth.createUserWithEmailAndPassword(email, password).then(res =>{ 
auth.currentUser.updateProfile({
    displayNamem: UserName,
})
auth.currentUser.sendEmailVerification().then(function() {
        alert("Verification link sent to your email. Kinldy check to verify your account")
    }).catch(function(error) {
alert(error.message)
    });
}).catch(err => alert(err.message)
)
}
    return (
   <Stack sx={{backgroundColor: 'secondary.main' , width:"100vw" , minHeight: '100vh' , alignItems: 'center'  }}  onClick={()=>{setNav(false)}} >
<TopNav Nav={Nav} setNav={setNav} />
<SideBar Nav={Nav} setNav={setNav} />
<Stack direction="row" width="90%"  alignItems="center" justifyContent="space-around" >
<Stack alignItems="center" spacing={2} >
  <Stack alignItems="center" spacing={1}  >
    <Typography sx={{fontSize : '24px'}} textAlign="center" color="#fff" >Already have an account ?</Typography>
    <Button variant="contained" sx={{width:"100%"}} >Login</Button>
  </Stack>
  <img src={signUpImage}  ></img>
</Stack>
<Stack alignItems="center" spacing={2} >
<Typography variant="h3" color="primary" textAlign="center" margin="8px" >Sign Up</Typography>
<Stack spacing={2} direction="row" >
      <StyledTextField label="first name" />
      <StyledTextField label="last name" />
      </Stack>
      <StyledTextField label="user name" />
      <StyledTextField label="email" />
      <StyledTextField label="password"  type="password" />
      <StyledTextField label="age" type="number" />
      <Button sx={{width : '100%'}} variant="outlined" >submit</Button>
 </Stack>
</Stack>
   </Stack>  
    )
//             <motion.div className="SignUpForm"  initial={{x: '100vw' }} animate={{x:0 }}  transition={{duration: 0.5 }}>
//       <motion.div initial={{y: '100vh' }} animate={{y: 0}} transition={{duration: 0.5 , delay: 0.5}} className='SignUpTittle' >Sign Up</motion.div>
//         <motion.div className='form' initial={{ scale: 0.2 }} animate={{scale: 1}} transition={{duration: 0.5 , delay: 0.5}} >
//            <div> <label>UserName:</label><input type="text" value={UserName} onChange={event => { setUserName(event.target.value)}} ></input></div>
// <div><label>First Name:</label><input type='text' value={FirstName} onChange={event =>{setFirstName(event.target.value)}} ></input></div>
// <div>  <label >Last Name:</label>  <input type="text" value={LastName} onChange={event =>{setLastName(event.target.value)}}></input>  </div>
// <div>  <label>password:</label><input type="password" value={password} onChange={event => {setPassword(event.target.value)}}></input></div>
// <div>  <label>age:</label> <input type="date" value={age} onChange={event =>{setAge(event.target.value)}}></input></div>
// <div><label>Email:</label><input onChange={e =>{setEmail(e.target.value)}} value={email} ></input></div>
// </motion.div>
// <div className='SignUpButtons'>
// <div>  <Button color='primary' variant='contained' onClick={()=>{ if(
//   // email && password && UserName && FirstName && 
//   LastName  ){ setVerefyModal(true)} else{alert('please fill out the required information')} }} >Next</Button></div>
// <div>  <Button color='primary' variant='contained' onClick={()=>{history.push('/')}}>Returnn</Button></div>
// </div>
//   <Modal onClose={()=>{setVerefyModal(false)}} open={VerefyModal} >
//   <motion.div initial={{scale: 0.3}} animate={{scale: 1}} transition={{duration: 0.5}}  className='verifyComponent'>
// <h1 className='VeriffyTittle' >please verity your account</h1>
// <div className='verifyBtns'>
//   <Button color='primary' variant='outlined' onClick={addAndVerify}> Verrity Email </Button>
//   <Button color='secondry' variant='contained' onClick={add}> Not Now       </Button>
// </div>
// </motion.div>
//   </Modal>

//    </motion.div>

}

export default SignUp
