import React from 'react'
import image1 from "./2.png"
import "./Socialex.css"
import { BrowserRouter as Router, Link,Routes, Route } from 'react-router-dom';
export const Socislex = () => {
  return (
   <div className="social">
    <div className="soc-img">
        <img src={image1} alt="social-img" className='social-img'/>
    </div>
    <div className="social-content">
        <h2>Empowering Social Skills for Neurodiverse Individuals</h2>
        <p>Navigating social interactions can be challenging for neurodiverse individuals. Our platform provides tailored support, offering structured training on social skills, guidance on effective communication, and real-world interaction strategies. Engage in a supportive community designed for neurodivergent individuals to connect, share experiences, and grow together. Explore workshops, interactive learning modules, and a safe space to practice social interactions in everyday scenarios like shopping, professional networking, and casual conversations. Join us in fostering inclusivity, confidence, and meaningful connections.</p>
       <Link to ="/social_exercise"><button type="submit" className='s-btn'>Get Started</button></Link> 
    </div>
    
   </div>
  )
}
