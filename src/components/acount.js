import React , {useState , useEffect  , useContext} from 'react'
import { db } from '../firebase'
import { useParams , useHistory} from 'react-router-dom'
import { Data } from '../App'
import UploadProfileImg from './uploadProfileImage'
import Post from './post'
import '../stylesheets/profile.css'
import { Avatar } from '@material-ui/core'
import { Button , Checkbox ,   Dialog   , Stack , FormControlLabel  , Tooltip , Typography } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SimplePersonImage from '../Images/unknownPerson.jpg'


let newFollower = []
let newFollowing = []
let followerdata = []
let followingdata = []

function Acount() {
//hooks
    const params = useParams()
    const history = useHistory()
    const [FollowingModal, setFollowingModal] = useState(false)
    const [Posts, setPosts] = useState([])
    const [ProfileImgModal, setProfileImgModal] = useState(false)
    const [addedIcon, setAddedIcon] = useState(false)
    const [Followings, setFollowings] = useState([])
    const [ProfilePicSrc, setProfilePicSrc] = useState('')
    const [LoadingFollowings, setLoadingFollowings] = useState(false)
    const [IsAded, setIsAded] = useState(false)
    const [AddIcon, setAddIcon] = useState(true)
    const [Followers, setFollowers] = useState([])
    const [FollowersLoading, setFollowersLoading] = useState([])
    const data = useContext(Data).user
    const userdb = useContext(Data).userdb
    const userdbdata = useContext(Data).userdbdata
    const [LoadingFollowers, setLoadingFollowers] = useState(true)
    const [FollowerModal, setFollowerModal] = useState(false)
    const [UserName, setUserName] = useState('')
    const [PostLoading, setPostLoading] = useState(true)
    const [Reload, setReload] = useState(false)

useEffect(() => {
 
    followerdata = [] 
    setFollowers([])
    setFollowings([])
    setPosts([])
    setFollowerModal(false)
    setFollowingModal(false)
    setPostLoading(true)
db.collection('users').doc(params.id).collection('posts').onSnapshot(snapShot =>{
    setPosts([])
snapShot.forEach(doc=>{
    setPosts((posts)=>{return [...posts , doc.data() ]})
  
})
setPostLoading(false)
})
db.collection('users').doc(params.id).onSnapshot(snapShot =>{
    let user = snapShot.data()
    setProfilePicSrc(user.ProfilePic)
 setUserName(user.userName)
    setFollowers(user.followers)
    // edit following datda here
})
db.collection('users').doc(params.id).onSnapshot(snapShot=>{
    setFollowings(snapShot.data().followings)
})

}, [params])

useEffect(() => {
    if(Followers.includes(data.uid) ){
        setIsAded(true)
    }
    else setIsAded(false)
    Followers.forEach(follower =>{
 db.collection('users').doc(follower).get().then((snapShot)=>{
if(!followerdata.some(item =>{
    return item.id === snapShot.id
})){
followerdata = [...followerdata , { data: snapShot.data() , id: snapShot.id }]}
if(followerdata.length === Followers.length){
    setLoadingFollowers(false)
}

    })
})         
followingdata = []
Followings.forEach(item =>{
    db.collection('users').doc(item).get().then((snapShot)=>{
        if(!followingdata.some(item =>{
        return     item.id ===  snapShot.id
        })){
followingdata = [...followingdata , {data: snapShot.data() , id: snapShot.id}] }
        if(followingdata.length === Followings.length){
            setLoadingFollowings(false)
        }
    })
})

return ()=>{
    followerdata = []
    followingdata = []
}
    
}, [Followers , Followings])









if(PostLoading){
    return <h1>Loading...</h1>
}
//functions declarations

const NoPosts =()=>{
    return <Stack alignItems="center" width="50vw" padding={2} bgcolor="white.light" ><Typography color="secodary.dark" textAlign="center" width="100%"  >  You have no posts currently !!  </Typography></Stack>
}



const AddIconChanged =()=>{

    setAddIcon(false) 
//----------------------------------------
    if(!(Followers.includes(data.uid))){ 
     newFollower = [...Followers , data.uid]
db.collection('users').doc(params.id).update({
  followers: newFollower
}).then(()=>{
    newFollowing =  [...userdb.data().followings , params.id] ;
db.collection('users').doc(data.uid).update({
  followings: newFollowing 
}).then(()=>{
    window.location.reload()
})
})  
}
     if (Followers.includes(data.uid)){
        
         newFollower = Followers.filter(item =>{
             return  item !== data.uid
         })
     
        db.collection('users').doc(params.id).update({
            followers: newFollower
        }).then(()=>{setAddIcon(true) ;
        if(userdb.data().followings.includes(params.id)){
    newFollowing = userdb.data().followings.filter( (item )=> { return item !== params.id }) ;
db.collection('users').doc(data.uid).update({
  followings: newFollowing 
}).then(()=>{
    window.location.reload()
})

}
        })
    }
}





const FollowingComponent = ()=>{

if(Followings.length === 0){
   return <Typography padding={3}  bgcolor='secondary.light' sx={{fontSize:'24px'}} > No Followings ! </Typography>
}
if(LoadingFollowings){
    return <Typography variaant="h4" > Loading...  </Typography>
}
   return  <Stack   padding={2} spacing={5}  bgcolor="secondary.light" >
  <h4 style={{textAlign: 'center'  , fontSize: '32px', textTransform : 'capitalize' }} > Followings  </h4>
        <Stack spacing={2} margin={1} width="30vw"  >
        {followingdata.map((item)=>{
           return <Typography textAlign="center" border='1px solid black'  padding='8px 16px'  bgcolor="white.light"  borderRadius={1} onClick={()=>{history.push(`/acount/${item.id}`)  ; window.location.reload() ;   }} > {item.data.FirstName}   {item.data.lastName} </Typography>
        })}
        </Stack>
    </Stack>
}
const FollowersComponent = ()=>{

if(Followers.length === 0){
   return <Typography padding={3}  bgcolor='secondary.light' sx={{fontSize:'24px'}} > No Followers ! </Typography>
}
 return  <Stack   padding={2} spacing={5}  bgcolor="secondary.light" >
         <h4 style={{textAlign: 'center'  , fontSize: '32px', textTransform : 'capitalize' }} > Followers  </h4>
        <Stack spacing={2} margin={1} width="30vw"  >{
followerdata.map(item =>{
    return <Typography textAlign="center" border='1px solid black'  padding='8px 16px'  bgcolor="white.light"  borderRadius={1} onClick={()=>{history.push(`/acount/${item.id}`)  ; window.location.reload() ;   }} > {item.data.FirstName}   {item.data.lastName} </Typography>
})}
        </Stack>
    </Stack>}

{/* <motion.div  variants={myVarients} className='followingsComponent' initial='ComponentSmall' animate='DisplayComponent'   className='followersComponent' >
<div className='followers'>
{
followerdata.map(user =>{
    return <Typography textAlign="center" border='1px solid black'  padding='8px 16px'  bgcolor="white.light"  borderRadius={1} onClick={()=>{history.push(`/acount/${item.id}`)  ; window.location.reload() ;   }} > {item.data.FirstName}   {item.data.lastName} </Typography>
})
}</Stack>
</motion.div> */}

/// this is my profile
 if(params.id === data.uid){
     return   <Stack sx={{width : "100vw"  , minHeight: '100vh' ,backgroundColor : 'secondary.dark'  , alignItems: 'center' }} >
      <Dialog open={ProfileImgModal} onClose={()=>{setProfileImgModal(false)}}>
      <UploadProfileImg setProfileImageModel={setProfileImgModal} />
      </Dialog>
         <Dialog open={FollowerModal} onClose={()=>{setFollowerModal(false)}}>
         <FollowersComponent/>      
         </Dialog>
         <Dialog open={FollowingModal} onClose={()=>{setFollowingModal(false)}} >
         <FollowingComponent/>
         </Dialog>
        <Stack   margin={4}  direction="row" width='60vw' alignItems="center" justifyContent='space-around' spacing={2} padding='24px 12px'  >
        <Stack spacing="2px"   >
        <Tooltip title="upload image"  >
        <Avatar style={{width : '100px' , height : '100px' }} src={ProfilePicSrc} sx={{boxShadow : '2px 2px 4px black'   }}   onClick={()=>setProfileImgModal(true)}></Avatar >
        </Tooltip>
  </Stack>     <Stack spacing={2} > 
                           <h4 style={{textAlign: 'center'  , fontSize: '24px', textTransform : 'capitalize' , color: '#fff'}} >{userdbdata.FirstName}  {userdbdata.lastName}  /     {userdbdata.userName} </h4>
            <Stack sx={{height: '40px'}} direction="row" height="fitContent"  spacing="16px" >
                <button className='followingBtn'   onClick={()=>{setFollowingModal(true)}}  > followings </button>
                <button className='followersBtn'  onClick={()=>{setFollowerModal(true)}}  > followers </button>
            </Stack>
        </Stack>
        </Stack>
          <Stack spacing={2} >
            {!Posts.length && <NoPosts/>  }
        </Stack>
                <Stack width='50vw'>
                  {Posts.map(item =>{
/// person profile 
         return <div className='postInProfile'>
          <Post    likes={item.likes} postkey={item.key} userName={item.UserName} image={item.image} userId={item.userId} caption={item.caption}
 ProfilePic={item.profilePic} 
 Timestamp={item.timestamp} /></div>
     } )}
            </Stack>
                
     </Stack>
 }


//  <motion.div variants={myVarients} initial='hidden' animate='visible' className="profile mine gradient-border "> 
//      <div className='header' >
//      <div className='identity'>
//        <motion.div variants={myVarients} className='UserName' whileHover='zoomIn' initial='outside' animate='zoom' >{userdbdata.userName}</motion.div>
// <motion.div whileHover='zoomIn' variants={myVarients} initial='outsideRight' animate='drag' > <Avatar className={classes.avatar}  src={ProfilePicSrc}  /> </motion.div> </div>
// <div className='buttonsPfofile' >
// <Button color="primary" onClick={()=>{setProfileImgModal(true)}} className={classes.btn  }  variant='outlined' > Upload Profile Image </Button>
// <Button color='secondary'  onClick={()=>{setFollowerModal(true)}} className={classes.btn } variant='outlined' > Followers </Button>
// <Button color='secondary'  onClick={()=>{setFollowingModal(true)}}  className={classes.btn } variant='outlined' >Followings</Button>  
//  </div> 
{/* <Dialog open={FollowerModal} onClose={()=>{setFollowerModal(false)}}>
   <FollowersComponent/>      
 </Dialog> */}
{/* <Dialog open={FollowingModal} onClose={()=>{setFollowingModal(false)}} >
    <FollowingComponent/>
</Dialog> */}
{/* <Dialog open={ProfileImgModal} onClose={()=>{setProfileImgModal(false)}}>
<UploadProfileImg/>
</Dialog> */}

//  </div> 
//             <motion.div initial={{x: '100vw'}} animate={{x: 0 , transition: { duration: 0.5 }}} className='postsProfile' >
//  {Posts.map(item =>{
//         return <div className='postInProfile'>
//          <Post    likes={item.likes} postkey={item.key} userName={item.UserName} image={item.image} userId={item.userId} caption={item.caption}
// ProfilePic={item.profilePic} 
// Timestamp={item.timestamp} /></div>
//     } )}      

//             </motion.div>
//         </motion.div>


// this is another one profile
    return (    <Stack sx={{width : "100vw"  , minHeight: '100vh' ,backgroundColor : 'secondary.dark'  , alignItems: 'center' }} >
         <Dialog open={FollowerModal} onClose={()=>{setFollowerModal(false)}}>
         <FollowersComponent/>      
         </Dialog>
         <Dialog open={FollowingModal} onClose={()=>{setFollowingModal(false)}} >
         <FollowingComponent/>
         </Dialog>
        <Stack   margin={4}  direction="row" width='60vw' alignItems="center" justifyContent='space-around' spacing={2} padding='24px 12px'  >
        <Stack spacing="2px"   >
        <Avatar style={{width : '100px' , height : '100px' }} src={ProfilePicSrc ||SimplePersonImage} sx={{boxShadow : '2px 2px 4px black'   }}  > </Avatar>
  </Stack>     <Stack spacing={2} > 
                           <h4 style={{textAlign: 'center'  , fontSize: '24px', textTransform : 'capitalize' , color: '#fff'}} >{UserName} </h4>
            <Stack height='40px' s direction="row"   spacing="16px" >
                <button className='followingBtn'   onClick={()=>{setFollowingModal(true)}}  > followings </button>
                <button className='followersBtn'  onClick={()=>{setFollowerModal(true)}}  > followers </button>
<button className='outlined' variant="standard" style={{display :'flex' , alignItems: 'center' , gap : '8px' }} > <Checkbox 
    onChange={AddIconChanged } 
    checked={IsAded}
    disabled={!AddIcon}
    icon={<CheckCircleOutlineIcon/>}
    checkedIcon={<CheckCircleIcon  />}
    ></Checkbox><p> {IsAded ? 'followed'  : 'following'}</p>
</button>
            </Stack>
        </Stack>
        </Stack>
          <Stack spacing={2} >
            {!Posts.length && <NoPosts/>  }
        </Stack>
                <Stack width='50vw'>
                  {Posts.map(item =>{
/// person profile 
         return <div className='postInProfile'>
          <Post    likes={item.likes} postkey={item.key} userName={item.UserName} image={item.image} userId={item.userId} caption={item.caption}
 ProfilePic={item.profilePic} 
 Timestamp={item.timestamp} /></div>
     } )}
            </Stack>
                
     </Stack>

)
//         <motion.div variants={myVarients} initial='hidden' animate='visible' className="profile another  gradient-borderAutherProfile ">
//        <div className='header' >
// <div className='identity anotherAcoutIdentity'>
// <motion.div variants={myVarients} initial='outsideRight' animate='drag' > <Avatar className={classes.avatar}  src={ProfilePicSrc}  /> </motion.div>
//     <motion.div className='UserName' variants={myVarients}  initial='outside' animate='zoom' >{UserName}</motion.div>
//     <FormControlLabel control={  <Checkbox 
//     onChange={AddIconChanged } 
//     checked={IsAded}
//     disabled={!AddIcon} color="secondry"
//     className={classes.formControl}
//     icon={<ControlPointDuplicateIcon/>}
// checkedIcon={<CheckCircleIcon className={classes.checked} />}
// ></Checkbox>}></FormControlLabel>
//     <Dialog open={FollowerModal} onClose={()=>{setFollowerModal(false)}}>
//    <FollowersComponent/>      
//  </Dialog>
// <Dialog open={FollowingModal} onClose={()=>{setFollowingModal(false)}} >
//     <FollowingComponent/>
// </Dialog>
// </div>
// <div className='buttonsPfofile' >
//  <Button  color='secondary' variant='contained' className={classes.btn} variant='outlined' onClick={()=>{setFollowerModal(true)}} > Followers </Button>
//  <Button  color='secondary' variant='contained' className={classes.btn} variant='outlined' onClick={()=>{setFollowingModal(true)}} >Followings</Button>    </div>
//   <motion.div whileHover={{scale: 1.5 }} >
// </motion.div>
 
//       </div>
//                  <motion.div initial={{x: '100vw'}} animate={{x: 0 , transition: { duration: 0.5 }}} className='postsProfile' >

            
//  {Posts.map(item =>{
//         return <div className='postInProfile'>
//          <Post likes={item.likes} postkey={item.key} userName={item.UserName} image={item.image} userId={item.userId} caption={item.caption}
// ProfilePic={item.profilePic} 
// Timestamp={item.timestamp}/> </div>
//     } )}    
//             </motion.div>
//         </motion.div>

}

export default Acount
