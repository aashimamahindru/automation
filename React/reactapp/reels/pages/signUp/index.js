import React from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// neeche wali command to optmize images in next not compulsory use for optimization,I should be capital
import Image from "next/image"
import IconButton from "@mui/material/IconButton";
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

        <Button

        color="secondary"
        variant="outlined"
        component="label"
        fullWidth size="small"
        >
        <IconButton color="secondary">
          <CloudUploadIcon/>
        </IconButton>
        Upload Profile Image
        <input hidden accept='image/*' multiple type="file"/>
        </Button>

        <Button
        style={{marginTop:"1rem"}}
        variant="contained"
        component="label"
        fullWidth
        >
          Sign Up
        </Button>
        <div className='tnc'>
        By signing up, you agree to our Terms, Conditions and Cookies policy.

        </div>

        </div>
        <div className='bottom-card'>
          Already Have an account?{" "}
          <span style={{color:"blueviolet"}}>Login</span>
        </div>
    </div>
  );
}

export default index