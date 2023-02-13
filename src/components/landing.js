import React , {useEffect  , useContext , useState}from 'react'
import { Modal, TextField} from '@material-ui/core'
import {auth  } from '../firebase'
import { motion  , AnimatePresence  } from 'framer-motion'
import { useHistory } from 'react-router-dom'
import UploadImage from './UploadImage'
import SearchIcon from '@material-ui/icons/Search';
import Posts from './posts'
import { Data } from '../App'
import Avatar from '@material-ui/core/Avatar'
import '../stylesheets/landing.css'
import {Stack , Button,Typography , Box} from '@mui/material'
import Nav from './nav/loggedNav'









function Landing() {
    // hooks 
const [User, setUser] = useState(null)
const [Loading, setLoading] = useState(true)
const [emailVerrified, setEmailVerrified] = useState(false)
const [VerrifyModal, setVerrifyModal] = useState(false)
const history = useHistory()
const data = useContext(Data).user
const userdb = useContext(Data).userdb
    const [displayList, setDisplayList] = useState(false)


// components
let Verifymessage = ()=>{
    return <div></div>
}
// effects
useEffect(() => {
auth.onAuthStateChanged(authuser =>{
    setUser(authuser)
setLoading(false)
})
}, [User , history])
useEffect(() => {
    auth.onAuthStateChanged(user=>{

 if(user.emailVerified === false){
setEmailVerrified(true)
  }
})
}, [])






// conditions
if(Loading){
    return <h4></h4>
}
    const logOut  = ()=>{
        auth.signOut()
    }
  if(!User){
      history.push('/')
  }
if(emailVerrified){
Verifymessage = ()=>{
    return (
<Stack padding={4} spacing={2} width="50vw" direction="row" alignItems="center" bgcolor="secondary.light" margin="8px" borderRadius={1} >    <Typography> your email is not verrified yet 
    please verrify your Email  
    </Typography>
        <Button  variant='standard' onClick={ ()=>{setVerrifyModal(true)}}>Verriy Email</Button>

    </Stack> )
}
}
// functions
const showProfile=()=>{
    history.push(`/acount/${data.uid}`)
}
const verrify = ()=>{
    auth.currentUser.sendEmailVerification().then(function() {
        alert("Verification link sent to your email. Kinldy check to verify your account")
    }).catch(function(error) {
alert(error.message)
    })
}
const VerifyEmail = ()=>{
    return    <motion.div initial={{scale: 0.2}} animate={{scale: 1 , transform: {duration: 1} }} className='emailVerefication' >
    <h2 className='tittle' > Email Verefication </h2>
         <Button onClick={verrify} color='secondary' variant='outlined' > send a link </Button>
    </motion.div>
}

    return (
        <Stack  sx={{backgroundColor : 'secondary.dark' , width : '100vw' , minHeight: '100vh' , alignItems: 'center'  }} > 
        <Nav displayList={displayList} setDisplayList={setDisplayList} />
        <Modal open={VerrifyModal} onClose={()=>{setVerrifyModal(false)}}>
           <VerifyEmail/>
        </Modal>
        <UploadImage/>
        <Verifymessage onClick={()=>{setDisplayList(false)}} className="verify"/>
<motion.div onClick={()=>{setDisplayList(false)}} className='posts' initial={{x: '100vw'}} animate={{x: 0 , transition: {duration: 0.5}}} >
<Posts/>
</motion.div>
        </Stack>
    )
//             <div className='PageHeader'>
// <motion.div initial={{x: '-100vw'}} animate={{x: 0 , transition: {  duration: 0.5 } }} whileHover={{scale: 1.1}} className='icons' >
// <motion.div whileHover={{scale: 1.3}} className='searchIcon' ><SearchIcon onClick={()=>{history.push('/search')}}/></motion.div>
// <motion.div whileHover={{scale: 1.4}} className='ProfileAvatar' >
// <Avatar alt="Remy Sharp" src={userdb && userdb.data().ProfilePic} onClick={showProfile} /></motion.div>
// <Button onClick={logOut} variant='contained' color='secondary' >Log Out</Button>
// </motion.div>
//  <motion.div initial={{y: '200vh'}} animate={{y:0 , transition:{duration: 0.5} }} >
//  <UploadImage className="uploadmsg"/> </motion.div>
// </div>

}

export default Landing
