import React, { useRef } from 'react'
import './header.css'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Header = () => {
  
  let hanburgEle =useRef()
  let showMenu = ()=>{
    hanburgEle.current.classList.toggle('active')
    document.body.classList.add('active')
  }
  let removeMenu=()=>{
    hanburgEle.current.classList.remove('active')
  }
  

  let ele=useRef();

  let sigEle = useRef()
 console.log(ele.current)
 console.log(sigEle.current)
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


let showSignUp = () => {
  let isActive = sigEle.current.classList.toggle('active');
  if (isActive) {
    document.querySelector(".header").classList.add("dark");
    document.body.classList.add("darkBg");
  } else {
    document.querySelector(".header").classList.remove("dark");
    document.body.classList.remove("darkBg");
  }
};

   let removeSignUp=()=>{
      sigEle.current.classList.remove('active');
      document.querySelector(".header").classList.remove("dark");
      document.body.classList.remove('darkBg')
  }
  return (
    <>
        <div className='header'>
            <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="image"/>
            <h1>zomato</h1>
            <h4>Find the best restaurants, cafés <br></br><span>and bars in India</span></h4>
            <div className='nav' ref={hanburgEle}>
              <h4>Zomato</h4>
              <a>Add restaurants</a>
              <a onClick={showLogin}>Log in</a>
              <a onClick={showSignUp}>Sign up</a>
              <div className='wrong'>
                  <p onClick={removeMenu}>&#10006;</p>
              </div>
            </div>
            {/* <img style={{ width: "40px", height: "50px", cursor: "pointer"}} src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"/> */}
            <div class="hamburger"><p onClick={showMenu}>&#9776;</p></div>

          
        </div>
        <div className='login' ref={ele}>
          <form>
         
          
                      <div className='login-top'>
                          <h3>Login</h3>
                          <p onClick={removeLogin}>&#10006;</p>
                      </div>
                      <div className='loginbody'>
                          <img 
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
                      </div>
                      <div>
                        <div className='logindown1'>
                           <span className='logindown1-inner'> &#x2709;</span>
                           <span>Continue With Email</span>
                        </div>
                        <div className='logindown1'>
                            <img  src="https://images.icon-icons.com/2699/PNG/512/google_logo_icon_169090.png"/>
                            <span style={{paddingLeft:"10px",paddingTop:"10px"}}>Sign in with Google</span>
                        </div>
                    
                      </div>
                      <div className='down'>
                            <hr></hr>
                          <p>New To Zomato? <span style={{color: "red"}}>Create account</span></p>
                          
                      </div>
                    
                     
                 
          </form>
          
        </div>
        <div  className='signup' ref={sigEle}>
          <form>
            <div className='signuptop'>
                <h3>Sign Up</h3>
                <p style={{margin: "23px", fontSize:"20px", cursor:"pointer"}} onClick={removeSignUp}>&#10006;</p>
            </div>
            <div className='signup-text'>
                <input type="text" placeholder='Full Name'/><br></br>
                <input type="text" placeholder='Email'/><br></br>
                
                
            </div>
            <div className='signup-checkbox'>
                <input type='checkbox'/><p >I agree to Zomato's <span style={{color:"red"}}>Terms of Services, Privacy Policy </span>and <span style={{color:"red"}}>Content Polices</span> </p>
            </div>
            <div className='sigupdown1'>
                <p>Create account</p><br></br>
                <i>Or</i>
                
            </div>
            <div className='signupdown2'>
                <img style={{height:"20px", width:"20px"}} src="https://images.icon-icons.com/2699/PNG/512/google_logo_icon_169090.png"/>
                <span style={{paddingLeft:"5px",paddingTop:"10px"}}>Sign in with Google</span>
            </div>
            <div className='sinupdown3'>
                <hr></hr>
                <p>Already have an account? <span style={{color:"red"}}>Log in</span> </p>
            </div>
          </form>
          
        </div>
       
    </>
  )
}

export default Header