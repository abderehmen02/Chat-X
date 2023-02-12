import {createTheme} from '@mui/material'
const theme = createTheme({
    palette : {
        primary : {
            main : '#53E05D' ,
            dark : '#289430'
        } ,
        secondary :  {
            main : '#E08A3D' ,
            dark : '#945F2F'
        } ,
        standard: {
            main : '#5222E0'
        } ,
        error :{
            main : '#F52F32'
        } ,
        dark  : {
          main : '#6D6D6D' ,
          light : '#A3A3A3' ,
          dark : '#363636'
        } ,
        white : {
          main : '#ECECEC' ,
          light : '#ECECEC' ,
          dark : '#E3E3E3'
        }
    } ,
      components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            backgroundColor : 'red' ,
            color : '#5222E0' ,
            borderRadius : '8px' ,
            paddingTop : '8px' ,
            paddingBottom : '8px' ,
            paddingRight : '60px' ,
            paddingLeft : '60px' ,
            minWidth : '200px' ,
                        boxShadow : '1px 2px 4px black' ,
            "&:hover" : {
            backgroundColor: '#289430' , 
            color :'#fff'  ,
            } , 
          },
        },
                {
          props: { variant: 'error' },
          style: {
            backgroundColor : 'white' ,
            color : 'red' ,
            borderRadius : '8px' ,
            paddingTop : '8px' ,
            paddingBottom : '8px' ,
            paddingRight : '16px' ,
            paddingLeft : '16px' ,         
            border : '2px solid red' ,
            "&:hover" : {
            backgroundColor : 'red' ,
            color : 'white'  ,
  
            }
          },
        },
                {
          props: { variant: 'primary' },
          style: {
            backgroundColor : 'white' ,
            color : '#2075A8' ,
            borderRadius : '8px' ,
            paddingTop : '8px' ,
            paddingBottom : '8px' ,
            paddingRight : '16px' ,
            paddingLeft : '16px' ,
            border : '2px solid #2075A8' ,
            "&:hover" : {
            backgroundColor : '#2075A8' ,
            color : 'white'  ,
         }
          },
        },


        {
          props: { variant: 'outlined' },
          style: {
            minWidth : '200px' ,
            backgroundColor : 'white' ,
            color : 'black' ,
            cursor: 'pointer' ,
            borderRadius : '8px' ,
            paddingTop : '8px' ,
            paddingBottom : '8px' ,
            paddingRight : '60px' ,
            paddingLeft : '60px' ,
                                    boxShadow : '1px 2px 4px black' ,

            "&:hover" : {
              backgroundColor : 'black' ,
              color : 'white' ,
              border: '1px solid #fff' ,
            }
          },
        },
        {
          props: { variant: 'standard' },
          style: {
            minWidth : '200px' ,
            backgroundColor : '#5222E0' ,
            // backgroundColor : '#16A1F5' ,
            color : 'white' ,
            // border :'2px solid black' ,
            cursor: 'pointer' ,
            borderRadius : '10px' ,
            paddingTop : '12px' ,
            paddingBottom : '12px' ,
            paddingRight : '24px' ,
            paddingLeft : '24px' ,
            fontWeight : 'bold' ,
                                    boxShadow : '1px 2px 4px black' ,

            "&:hover" : {
              backgroundColor : 'white' ,
              color : '#5222E0' ,
              // border: '1.5px solid #F5F11D' ,
              // adding one pixel in the padding for the border
            // paddingTop : '8px' ,
            // paddingBottom : '8px' ,
            // paddingRight : '18px' ,
            // paddingLeft : '18px' ,
            }
          },
        },
      ],
    },
  },

})

theme.typography.h1 = {
  fontSize: '40px',
  fontFamily : 'IM Fell Double Pica, serif' ,
  fontFamily: 'Noto Sans , sans-serif' ,
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2.4rem',
//   },
};
theme.typography.h2 = {
    fontSize : '32px' , 
  fontFamily: 'Noto Sans , sans-serif' ,
}

theme.typography.h3 = {
    fontSize : '24px' ,
  fontFamily: 'Noto Sans , sans-serif' ,
    }
theme.typography.h4 = {
  fontSize : '20px' ,
  fontFamily : 'sans-serif'
}
// theme.components.MuiButton.variants = [
//         {
//           props: { variant: 'contained' },
//           style: {
//             backgroundColor : '#53E05D' ,
//             color : '#5222E0' ,
//             borderRadius : '8px' ,
//             paddingTop : '8px' ,
//             paddingBottom : '8px' ,
//             paddingRight : '60px' ,
//             paddingLeft : '60px' ,
//             minWidth : '200px' ,
//                         boxShadow : '1px 2px 4px black' ,
//             "&:hover" : {
//             backgroundColor: '#289430' , 
//             color :'#fff'  ,
//             } , 
//             [theme.breakpoints.down("sm")] : {
//             paddingTop : '4px' ,
//             paddingBottom : '4px' ,
//             paddingRight : '30px' ,
//             paddingLeft : '30px' ,
//              }
//           },
//         },
//                 {
//           props: { variant: 'error' },
//           style: {
//             backgroundColor : 'white' ,
//             color : 'red' ,
//             borderRadius : '8px' ,
//             paddingTop : '8px' ,
//             paddingBottom : '8px' ,
//             paddingRight : '16px' ,
//             paddingLeft : '16px' ,         
//             border : '2px solid red' ,
//             "&:hover" : {
//             backgroundColor : 'red' ,
//             color : 'white'  ,
  
//             }
//           },
//         },
//                 {
//           props: { variant: 'primary' },
//           style: {
//             backgroundColor : 'white' ,
//             color : '#2075A8' ,
//             borderRadius : '8px' ,
//             paddingTop : '8px' ,
//             paddingBottom : '8px' ,
//             paddingRight : '16px' ,
//             paddingLeft : '16px' ,
//             border : '2px solid #2075A8' ,
//             "&:hover" : {
//             backgroundColor : '#2075A8' ,
//             color : 'white'  ,
//          }
//           },
//         },


//         {
//           props: { variant: 'outlined' },
//           style: {
//             minWidth : '200px' ,
//             backgroundColor : 'white' ,
//             color : 'black' ,
//             cursor: 'pointer' ,
//             borderRadius : '8px' ,
//             paddingTop : '8px' ,
//             paddingBottom : '8px' ,
//             paddingRight : '60px' ,
//             paddingLeft : '60px' ,
//                                     boxShadow : '1px 2px 4px black' ,

//             "&:hover" : {
//               backgroundColor : 'black' ,
//               color : 'white' ,
//               border: '1px solid #fff' ,
//             } , 
//                         [theme.breakpoints.down("sm")] : {
//             paddingTop : '4px' ,
//             paddingBottom : '4px' ,
//             paddingRight : '30px' ,
//             paddingLeft : '30px' ,
//              }            
//           },
//         },
//         {
//           props: { variant: 'standard' },
//           style: {
//             minWidth : '200px' ,
//             backgroundColor : '#5222E0' ,
//             // backgroundColor : '#16A1F5' ,
//             color : 'white' ,
//             // border :'2px solid black' ,
//             cursor: 'pointer' ,
//             borderRadius : '10px' ,
//             paddingTop : '12px' ,
//             paddingBottom : '12px' ,
//             paddingRight : '24px' ,
//             paddingLeft : '24px' ,
//             fontWeight : 'bold' ,
//                                     boxShadow : '1px 2px 4px black' ,

//             "&:hover" : {
//               backgroundColor : 'white' ,
//               color : '#5222E0' ,
//               // border: '1.5px solid #F5F11D' ,
//               // adding one pixel in the padding for the border
//             // paddingTop : '8px' ,
//             // paddingBottom : '8px' ,
//             // paddingRight : '18px' ,
//             // paddingLeft : '18px' ,
//             } ,
//                       [theme.breakpoints.down("sm")] : {
//             paddingTop : '6px' ,
//             paddingBottom : '6px' ,
//             paddingRight : '15px' ,
//             paddingLeft : '15px' ,
//              }


//           },
//         },
//       ]




export default theme