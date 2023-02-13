import { Stack , styled , Typography , Avatar , List , ListItem , ListItemButton , ListItemText , TextField , Button , InputAdornment  } from '@mui/material'
import React  , {useContext  , useState , useEffect}from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Data } from '../../App';
import { useHistory } from 'react-router-dom';
import  {db} from  '../../firebase'

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





function Nav() {
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




  return (
  <Stack alignItems="center"  direction="row" width="100vw" margin={2} justifyContent="space-around">
<Stack>
 <StyledTextField
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
  <List  >
          <ListItem disablePadding sx={{backgroundColor:"#fff" , borderRadius: '16px' , border : '1px solid black' }}>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
</List>
</Stack>












<Stack onClick={showProfile} sx={{cursor: "pointer"}} direction="row" spacing="8px" alignItems="center" >  <Avatar  src={userdb && userdb.data().ProfilePic} ></Avatar>      <Typography variant='h5' color="white.light" sx={{"&:hover"  : {color: '#E3E3E3' }}} >{  userdbData?.userName}</Typography>
</Stack>
<Button variant="contained" sx={{height : 'inherit'}} >Log out</Button>
    </Stack>
  )
}

export default Nav