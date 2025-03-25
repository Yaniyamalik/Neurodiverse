import React from 'react'
import image1 from "./SUPPORT.png"
import "./Shop.css"
import { BrowserRouter as Router, Link,Routes, Route } from 'react-router-dom';
export const Shop = () => {
  return (
   <div className="shop">
    <div className="s-img">
        <img src={image1} alt="s-img" className='s-img'/>
    </div>
    <div className="s-content">
        <h2>Inclusive Marketplace for Neurodiverse Needs</h2>
        <p>Discover a thoughtfully curated marketplace designed to support the unique needs of neurodiverse individuals. Explore a wide range of sensory-friendly products, adaptive tools, calming aids, fidget toys, noise-canceling headphones, and more—carefully selected to enhance comfort, focus, and daily living. Our platform ensures accessibility, offering personalized recommendations and a seamless shopping experience. Whether you're looking for tools to aid concentration, relaxation, or social interaction, our shop provides products that empower and support neurodivergent lifestyles.
        </p>
       <Link to ="/shop"><button type="submit" className='s-btn'>Get Started</button></Link> 
    </div>
   </div>
  )
}
