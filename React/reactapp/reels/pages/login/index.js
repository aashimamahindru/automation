import React from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"

// neeche wali command to optmize images in next not compulsory use for optimization,I should be capital automatically compresss krna pdta h
import Image from "next/image"
import logo from '../../asset/Instagram..jpg'
import { Carousel } from "react-responsive-carousel";
import bg1 from '../../asset/bg1.jpg'
import bg2 from '../../asset/bg2.jpg'
import bg3 from '../../asset/bg3.jpg'
import bg4 from '../../asset/bg4.jpg'
import bg5 from '../../asset/bg5.jpg'



function index() {
  return (
    <div className="login-container">
    <div className='insta-mob-bg'>
    <div className='carousel'>
            <Carousel autoPlay="true" interval="2000" 
            infinteLoop={true}
            showArrows={false}
            showThumbs={false}
            showIndicators={false}
            stopOnHover
            showStatus={false}
            >
            <Image src={bg1} />
            <Image src={bg2} />
            <Image src={bg3} />
            <Image src={bg4} />
            <Image src={bg5} />
            </Carousel>
    </div>
    </div>
    <div>
        <div className='login-card'>
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
     <div style={{color:"blue", marginTop:"0.5rem"}}>Forget Password{" "}</div>

       

        <Button
        style={{marginTop:"1rem"}}
        variant="contained"
        component="label"
        fullWidth
        >
          Log in
        </Button>
        </div>
        <div className='bottom-card'>
          Dont't Have an account?{" "}
          <span style={{color:"blueviolet"}}>Signup</span>
        </div>
    </div>
    </div>
  );
}

export default index