import { Stack , styled , Typography , Avatar , TextField , Button , InputAdornment  } from '@mui/material'
import React  , {useContext}from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Data } from '../../App';
import { useHistory } from 'react-router-dom';


const StyledTextField =  styled(TextField)(({theme})=>({
 '& label': {
    color: '#fff' ,
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
    const userAuthData = userData.user

const showProfile=()=>{
    history.push(`/acount/${userAuthData.uid}`)
}



  return (
  <Stack alignItems="center"  direction="row" width="100vw" margin={2} justifyContent="space-around">
 <StyledTextField
        helperText="search for any person"
        id="input-with-icon-textfield"
        sx={{textAlign : 'right'}}
        textAlign="right"
        label="Search"
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

<Stack direction="row" spacing="8px" alignItems="center" >  <Avatar onClick={showProfile} ></Avatar>      <Typography variant='h4' color="white.light" >Chat WX </Typography>
</Stack>
<Button variant="contained" sx={{height : 'inherit'}} >Log out</Button>
    </Stack>


  )
}

export default Nav