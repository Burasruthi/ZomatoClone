import React from 'react'
import './login.css'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  

const Login = () => {
  return (
    <>
        <div className='login'>

            <div className='login-top'>
                <h3>Login</h3>
                <p>&#10006;</p>
            </div>
            <div className='loginbody'>
                <img style={{height: "22px", width: "30px"}}
                        src="https://b.zmtcdn.com/images/flags_z10/in.png?output-format=webp"
                        alt="flag"
                    />
                <span>+91</span>
                <FontAwesomeIcon icon={faAngleDown} />
               
                <input type='text'placeholder='Phone'/><br></br>
                
                
            </div>
            <div className='logindown'>
                 <p>Send One Time Password</p>
                 <i>Or</i><br></br>
                 <div className='logindown1'>
                 <span style={{color:"red", fontSize:"25px"}}> &#x2709;</span>
                 <span style={{padding:"5px", fontSize:"15px"}}>Continue With Email</span>
                </div>
                <div className='logindown1'>
                    <img style={{height:"20px", width:"20px"}} src="https://images.icon-icons.com/2699/PNG/512/google_logo_icon_169090.png"/>
                    <span style={{paddingLeft:"10px",paddingTop:"10px"}}>Sign in with Google</span>
                </div>

            </div>
            <div className='down'>
                <p>New To Zomato? <span style={{color: "red"}}>Create account</span></p>
                
            </div>
          
           
        </div>
    </>
  )
}

export default Login
