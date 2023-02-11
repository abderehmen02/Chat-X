import { Stack , styled , Typography , Avatar , TextField , Button , InputAdornment  } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircle from '@mui/icons-material/AccountCircle';



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
  return (
    <Stack  direction="row" width="100vw" margin={2} justifyContent="space-around">
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

<Stack direction="row" spacing="8px" alignItems="center" >  <Avatar></Avatar>      <Typography variant='h4' color="white.light" >Chat WX </Typography>
</Stack>
<Button variant="outlined" >Log out</Button>
    </Stack>


  )
}

export default Nav