import React from 'react'
import "./Stressmanagement.css"
import image1 from "./3.png"
import { BrowserRouter as Router, Link,Routes, Route } from 'react-router-dom';
export const Stressmanagement = () => {
  return (
   <div className="stress">
    <div className="st-content">
        <h2>Stress Management for Neurodiverse Individuals</h2>
        <p>Neurodiverse individuals often experience stress differently, and our platform provides tailored support to help manage it effectively. Immerse yourself in binaural music designed to enhance relaxation and focus. Connect with anonymous listeners who understand and offer a safe, judgment-free space to express yourself. Explore guided mindfulness exercises, personalized coping strategies, and interactive tools to regulate emotions. Whether you need a calming break or a supportive conversation, our platform empowers you to navigate stress in a way that suits your unique needs.</p>
       <Link to ="/anger"><button type="submit" className='st-btn'>Get Started</button></Link> 
    </div>
    <div className="st-img">
        <img src={image1} alt="st-img" className='st-img'/>
    </div>
   </div>
   
  )
}
