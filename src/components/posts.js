import React ,{useEffect , useContext , useState} from 'react'
import '../stylesheets/posts.css'
import * as firebase from 'firebase/app'
import { Data } from '../App'
import { Stack } from '@mui/material'
import Post from './post'
import { db, FirebaseStorage , auth } from '../firebase'
import { Typography } from '@material-ui/core'
let today = new Date();
let yesterday = new Date();
yesterday.setDate(today.getDate() - 1)



const NoPosts =()=>{
    return <Stack alignItems="center" width={{xs: '80vw' , md: '50vw'}} padding={4} bgcolor="white.light"  ><Typography color="secodary.dark" textAlign="center" width="100%"  >  You have no posts currently !!  </Typography></Stack>
}

function posts() {
    const data = useContext(Data).user
    const userdbdata = useContext(Data).userdbdata
    const [Posts, setPosts] = useState([])
    const [Followings, setFollowings] = useState([])
    const [LoadingFollowing, setLoadingFollowing] = useState(true)
    const [Loading, setLoading] = useState(true)
    const [FollowingsData, setFollowingsData] = useState(null)

useEffect(() => {
    if(userdbdata){
       
    userdbdata.followings.forEach(item => {
    
db.collection('users').doc(item).collection('posts').where('timestamp' , '>' , firebase.firestore.Timestamp.fromDate(yesterday) ).onSnapshot(snapShot =>{
    setPosts([])
 snapShot.forEach(doc => { 
    setPosts((prv)=>{return [...prv , doc.data()]})})
})        
    }); 
    }
}, [userdbdata])

    return (

        <Stack  >
    {!Posts.length && <NoPosts/> }
    {Posts.map(item =>{
        return <div className='SinglePostDiv' > <Post likes={item.likes} postkey={item.key} userName={item.UserName} image={item.image} userId={item.userId} caption={item.caption}
ProfilePic={item.profilePic}  
Timestamp={item.timestamp}
/> </div>
    } )}      
        </Stack>
    )
}

export default posts
