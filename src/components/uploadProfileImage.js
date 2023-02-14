import React , {useState , useContext } from 'react'
import { Button , Stack , LinearProgress, Typography } from '@mui/material'
import { motion  , AnimatePresence} from 'framer-motion'
import shortid from 'shortid'
import { db, FirebaseStorage , auth } from '../firebase'
import { useHistory } from 'react-router-dom'
import 'firebase/firestore'
import { Data } from '../App'
function UploadProfileImg({setProfileImageModel}) {
    //hooks
const [Image, setImage] = useState(null)
const [User, setUser] = useState(null)
const [Loading, setLoading] = useState(true)
const [Upload, setUpload] = useState(0)
const history = useHistory()
const data = useContext(Data).user
const [Message, setMessage] = useState("")
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
   (url) =>{     db.collection("users").doc(data.uid).update({
    ProfilePic : url   ,
         }).then(()=>{
             setImage(null)  ; setUpload(0) ; setProfileImageModel(false)
         })
    } 
     )
       }   )
  
}
console.log(Message)
// functios excuting
return(<Stack padding={2} spacing={2} bgcolor='secondary.light' >
<LinearProgress value={Upload} variant="determinate"  />
<Stack direction={{md : 'row'}} spacing={{md : 2 , xs: 1}} >
<Button disabled={!Image} onClick={uploadFile} variant="contained" > Submit </Button> 
<Button
  variant="outlined"
  component="label"
>
  Upload File
  <input
    type="file"
    hidden
    onChange={(e)=>handleFiles(e)}
  />
</Button></Stack>
<Typography variant='h3' color="primary.dark" >{Message}</Typography> 
</Stack>

)  
}

export default UploadProfileImg
