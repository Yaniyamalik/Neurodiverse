import React from 'react'
import image1 from "./3.png"
import { BrowserRouter as Router, Link,Routes, Route } from 'react-router-dom';
import "./Community.css"
export const Community = () => {
  return (
   <div className="community">
    
    <div className="c-content">
        <h2>An Online Therapy Community That Many Call Home</h2>
        <p>No matter who you are or what you’ve going through, you’re not alone. There are many people who are just like you at Neurospace. This is a place where you’ll be heard and cared for. We might be strangers on the surface, but underneath we’re just the friends you haven’t met yet</p>
       <Link to ="/community"><button type="submit" className='c-btn'>Get Started</button></Link> 
    </div>
    <div className="c-img">
        <img src={image1} alt="c-img" className='com-img'/>
    </div>
   </div>
  )
}
