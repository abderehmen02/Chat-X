import { Stack , styled , Typography , Avatar , List , ListItem , Box, ListItemButton , ListItemText , TextField , Button , InputAdornment  } from '@mui/material'
import React  , {useContext  , useState , useEffect}from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MyLogo from '../../Images/logo.png'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Data } from '../../App';
import { useHistory , Link} from 'react-router-dom';
import  {db} from  '../../firebase'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const StyledTextField =  styled(TextField)(({theme})=>({
 '& label': {
    textShadow : 'none'
  },
   '& label.Mui-focused': {
    textShadow  : 'none'
  },
    '& .MuiFilledInput': {
      '& fieldset': {
        borderColor: 'white',
      },
       '&:hover fieldset': {
         borderColor: theme.palette.primary.main,
       },
    },
  
}));





function Nav({displayList , setDisplayList  , logOut}) {
    const history  = useHistory()
    const userData = useContext(Data)
    const userdbData = userData?.userdbdata
    const userAuthData = userData?.user
    const userdb = userData?.userdb
    const [UserSearched, setUserSearched] = useState([])



    console.log(userdbData);
    console.log(userData);

const showProfile=()=>{
    history.push(`/acount/${userAuthData.uid}`)
}





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




useEffect(() => {
    db.collection('users').orderBy('timestamp').limit(3).get().then(
(users)=> {users.docs.forEach(user =>{
    setUserSearched(value=>{
    return [...value , user]
})})
}   
)
}, [])



const MobileNav = ()=>{
  const [ openMobileNav, setOpenModileNav ] = useState(false)
  return <Stack display={{md: 'none'}} >
<Stack alignItems="center" width='100vw' height="10vh" justifyContent="space-around" direction="row" ><FormatListBulletedIcon  onClick={()=>{setOpenModileNav(false)}} display={!openMobileNav} ></FormatListBulletedIcon> <Stack onClick={showProfile} sx={{cursor: "pointer"}} direction="row" spacing="8px" alignItems="center" >  <Avatar style={{width : '30px' , height  : '30px' }} src={userdb && userdb.data().ProfilePic} ></Avatar>      <Typography sx={{fontSize : '24px'}} color="white.light"  >{  userdbData?.userName}</Typography>
</Stack>
<img src={MyLogo} style={{width : '50px' , height : '50px' , borderRadius : '8px'}} ></img>
</Stack> 
 { openMobileNav && <Stack >
<StyledTextField
        placeholder='type the whole username'
        helperText="search for any person"
        id="input-with-icon-textfield"
        sx={{textAlign : 'right'}}
        textAlign="right"
        label="Search"
        onChange={research}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        focus
        variant="standard"
/>

   <Stack sx={{position : 'absolute' , top : '100px' }} spacing="2px" >
{ UserSearched.map(user =>{
    return           <Typography  bgcolor='standard.main' color='white.main'  onClick={(e)=>{ e.stopPropagation()  ;  history.push(`/acount/${user.id}`)}} sx={{ cursor: 'pointer'  , padding : '8px 32px' , border: '1px solid black'  , borderRadius : '8px'}} >{user.data().FirstName + "   " + user.data().lastName}</Typography>
})}
</Stack> 
</Stack> }
  </Stack>
}













  return ( <Box>
<MobileNav/>
  <Stack   display={{xs: 'none' , md : 'flex' }}    alignItems="center"   direction="row" width="100vw"   margin={2} justifyContent="space-around">
<Stack> 
 <StyledTextField
        placeholder='type the whole username'
        onFocus={(e)=>{setDisplayList(true)   } }
        helperText="search for any person"
        id="input-with-icon-textfield"
        sx={{textAlign : 'right'}}
        textAlign="right"
        label="Search"
        onChange={research}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        focus
        variant="standard"
      />
  <Stack sx={{position : 'absolute' , top : '100px' }} spacing="2px" >
{displayList &&  UserSearched.map(user =>{
    return           <Typography  bgcolor='standard.main' color='white.main'  onClick={(e)=>{ e.stopPropagation()  ;  history.push(`/acount/${user.id}`)}} sx={{ cursor: 'pointer'  , padding : '8px 32px' , border: '1px solid black'  , borderRadius : '8px'}} >{user.data().FirstName + "   " + user.data().lastName}</Typography>
})}
</Stack>
</Stack>
<Stack onClick={showProfile} sx={{cursor: "pointer"}} direction="row" spacing="8px" alignItems="center" >  <Avatar  src={userdb && userdb.data().ProfilePic} ></Avatar>      <Typography variant='h5' color="white.light" sx={{"&:hover"  : {color: '#E3E3E3' }}} >{  userdbData?.userName}</Typography>
</Stack>
<Button variant="contained" sx={{height : 'inherit'}} onClick={logOut} >Log out</Button>
    </Stack></Box>
  )
}





export default Nav