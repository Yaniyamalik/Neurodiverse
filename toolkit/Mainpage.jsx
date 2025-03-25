import React from 'react'
import { Socislex } from './Socislex'
import { Stressmanagement } from './Stressmanagement'
import { Shop } from './Shop'
import image1 from "./1.png"
import "./Mainpage.css"

export const Mainpage = () => {
  return (
    <div className="main">
        <div className="main-poster">
            <img src={image1} alt="main-poster" className='main-img'/>
            <Socislex/>
            <Stressmanagement/>
            <Shop/>
        </div>
    </div>
  )
}
