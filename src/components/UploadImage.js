import React , {useState , useContext } from 'react'
import shortid from 'shortid'
import { db, FirebaseStorage , auth } from '../firebase'
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import '../stylesheets/posts.css'
import { Data } from '../App'
import { Stack , TextField, Button } from '@mui/material'



function UploadImage() {
    //hooks
const [Caption, setCaption] = useState('')
const [Image, setImage] = useState(null)
const [Upload, setUpload] = useState(0)
const data = useContext(Data).user
const userdbdata = useContext(Data).userdbdata 

 // functions declarations
const handleFiles = (event)=>{
if(event.target.files[0]){
setImage(event.target.files[0])
}
}
const uploadFile = ()=>{
const id = shortid.generate()
    const UploadTask = FirebaseStorage.ref(`/images/${Image.name}`).put(Image)
    UploadTask.on("state_changed" , (snapshot)=>{
        const progress = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100
        setUpload(progress)
    } , (err) =>{
        console.log(err)
        alert(err.message)
    } ,()=> {
     FirebaseStorage.ref("images").child(Image.name).getDownloadURL().then(
   (url) =>{     db.collection("posts").doc(id).set({
     timestamp : firebase.firestore.FieldValue.serverTimestamp() ,
     caption: Caption , 
    image : url   ,
    key: id, 
likes: [] ,
         }) ;
        setImage(null) ; setCaption('') ; setUpload(0) ;
 db.collection('users')
.doc(data.uid).collection('posts').doc(id).set({
    image: url , caption: Caption , key: id, userId: data.uid ,
    likes: [] ,
  timestamp : firebase.firestore.FieldValue.serverTimestamp() ,
userName: userdbdata.userName , 
profilePic: userdbdata.ProfilePic
})
    } 
     )
       }   )
  
}
// functios excuting


return(
        <Stack   borderRadius={1} width="50vw"  alignItems="center"  padding={4} spacing={2}  bgcolor="white.light" >
        <TextField value={Caption} onChange={(event)=>{setCaption(event.target.value)}} fullWidth multiline rows={3}  variant="filled" sx={{width : '100%'  }}  ></TextField>
        <Stack width='100%' justifyContent="space-around" direction="row" spacing="32px" > <Button
  variant="outlined"
  component="label"
>
  Upload File
  <input
    type="file"
    hidden
    onChange={handleFiles}
  />
</Button> <Button variant="contained" onClick={uploadFile} > Submit </Button> </Stack>
      </Stack>

)  

{/* <Stack>
<div className='uploadInfo' >
<Button style={{marginTop: 10}} color='secondary' variant='contained'  onClick={uploadFile} > Upload </Button></div>
<div className='postInfo'>
<input className='fileInput' type='file' onChange={handleFiles}></input>
<input className='captionInput' placeholder='enter your caption' value={Caption} onChange={(event)=>{setCaption(event.target.value)}} ></input>
</div>
</Stack> */}
}

export default UploadImage
