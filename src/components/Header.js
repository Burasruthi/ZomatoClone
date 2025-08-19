import React, { useRef } from 'react'
import './header.css'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Header = () => {

  let ele=useRef();

  let showLogin=()=>{
    let isActive=ele.current.classList.toggle('active')
    if(isActive){
        document.querySelector(".header").classList.add("dark");
        document.body.classList.add('darkBg')
    }
    else{
       document.querySelector(".header").classList.remove("dark");
        document.body.classList.remove('darkBg')
    }
     
    
  }
  let removeLogin=()=>{
      ele.current.classList.remove('active');
      document.querySelector(".header").classList.remove("dark");
      document.body.classList.remove('darkBg')
  }
  return (
    <>
        <div className='header'>
            <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="image"/>
            <h1>zomato</h1>
            <h4>Find the best restaurants, cafés <br></br><span>and bars in India</span></h4>
            <div className='nav'>
              <a>Add restaurants</a>
              <a onClick={showLogin}>Log in</a>
              <a>Sign up</a>
            </div>
            <img style={{ width: "40px", height: "50px", cursor: "pointer"}} src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"/>
          
        </div>
        <div className='login' ref={ele}>
          <form>
         
          
                      <div className='login-top'>
                          <h3>Login</h3>
                          <p onClick={removeLogin}>&#10006;</p>
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
                    
                     
                 
          </form>
          
        </div>
        <div className='signup'>

        </div>
       
    </>
  )
}

export default Header