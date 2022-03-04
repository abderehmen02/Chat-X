import React , {useState , useEffect } from 'react'
import {  Input } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { db } from '../firebase';
import { useHistory } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle'
import '../stylesheets/search.css'
import logo from '../Images/logo.png'
import { motion } from 'framer-motion';
function search() {
    // hooks
const [UserSearched, setUserSearched] = useState([])
const history = useHistory()
// effects
useEffect(() => {
    db.collection('users').orderBy('timestamp').limit(3).get().then(
(users)=> {users.docs.forEach(user =>{
    setUserSearched(value=>{
    return [...value , user]
})})
}   
)
}, [])



    //function declaration
const research = (event)=>{
    setUserSearched([])
db.collection('users').where('userName' , '==' , event.target.value).get().then(
(users)=> {users.docs.forEach(user =>{
    setUserSearched(value=>{
    return [...value , user]
})})
}   
)
}
    return (
        <motion.div className='searchPage' initial={{y: '100vh'}} animate={{y: 0 , transition:{duration: 0.5} }} >
  <motion.div
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

    className='logoOverlay' ></motion.div> </motion.div> 
<div className='searchBar'> <Input startAdornment={<AccountCircle/>} onChange={research}  ></Input> <SearchIcon/> </div>     
<div>
{UserSearched.map(user =>{
    return <motion.div  className='users' initial={{x: '100vw'}} animate={{x: 0 , transform: {duration: 0.5 , delay: 0.5}}} className='user' onClick={()=>{ history.push(`/acount/${user.id}`)}}>
     {user.data().FirstName}  {user.data().lastName} 
     </motion.div>
})}
</div>
        </motion.div>
    )
}
export default search
