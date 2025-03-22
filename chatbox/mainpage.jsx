import image1 from "./1.png"
import React from 'react'
import { Listener } from "./listener"
import { Community } from "./community"
import { Physologist } from "./Physologist"
import "./Mainpage.css"
export const Mainpage = () => {
  return (
    <div className="mainpage">
        <img src={image1} alt="support" className="main-image"/>
        <Listener/>
        <Community/>
        <Physologist/>
        
    </div>
  )
}

