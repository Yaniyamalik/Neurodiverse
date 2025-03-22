import React from 'react'
import image1 from "./4.png"
import Listenercomponent from './listenercomponent'
import "./Listener.css"
export const Listener = () => {
  return (
   <div className="listener">
    <div className="l-img">
   <img src={image1} alt="listener" className='l-image'/>
   </div>
   <div className="l-content">
    <h2>Anonymous virtual chat with caring listeners </h2>
    <p>Need to talk to someone? Our trained volunteer listeners are available 24/7 to give emotional support over online chat. It’s anonymous and completely free. When you need someone to talk to, we’re here to listen and help you feel better.</p>
    <Listenercomponent/>
   </div>
   </div>
  )
}
