import React from 'react'
import TextField from "@mui/material/TextField";
// neeche wali command to optmize images in next not compulsory use for optimization,I should be capital
import Image from "next/image"

import logo from '../../asset/Instagram..jpg'

function index() {
  return (
    <div className="signup-container">
        <div className='signup-card'>
        <Image src={logo}/>
        {/* //key value pair from props - */}
        <TextField id="outlined-basic" 
         size="small"
         label="Email"
         variant="outlined"
         fullWidth margin='dense'
          /> 
        <TextField id="outlined-basic" 
         size="small"
         label="Password"
         variant="outlined"
         fullWidth margin='dense'
         type="password" 
        //  to hide password while writing
        /> 
         <TextField id="outlined-basic" 
         size="small"
         label="Full Name"
         variant="outlined"
         fullWidth margin='dense'
          /> 

        </div>
    </div>
  )
}

export default index