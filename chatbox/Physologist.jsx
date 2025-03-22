import React from 'react'
import image1 from "./2.png"
import "./Physologist.css"
export const Physologist = () => {
  return (
   <div className="physologist">
    <div className="p-img">
   <img src={image1} alt="p-img" className='p-image'/>
   </div>
   <div className="p-content">
    <h2>Get support with online therapy</h2>
    <p>Want a little extra help? You can get ongoing support, treatment and guidance from a licensed therapist when you sign up for online therapy.</p>
   <button type="Submit" className='p-btn'>Get Started</button>
   </div>
   </div>
  )
}
