import React, { useRef } from 'react'
import './section.css'
import { data } from './data'
import '../components/header.css'

const Section = () => {

    
  return (
    <>
    
    <div className='section'>
      <h1>Popular locations in  <img src="https://b.zmtcdn.com/images/flags_z10/in.png?output-format=webp" alt="india flag"/> India</h1>
      <p>From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.</p>
    </div>
    

   
    <div className='cards'>
        {data.map((item)=>(
            <div className='inner-cards'>
                <p key={item.id}>{item.title}</p>
                <i>&#8250;</i>
            </div>
           
            
        ))}
    </div>
    
    </>
  )
}

export default Section
