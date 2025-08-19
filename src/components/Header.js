import React, { useRef } from 'react'
import './header.css'


const Header = () => {

  let ele=useRef();

  let showLogin=()=>{
    ele.current.classList.toggle('active')
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
        <div className='log' ref={ele}>
          <form>
          <input type="text" placeholder='hello'/>
        </form>

        </div>
       
    </>
  )
}

export default Header