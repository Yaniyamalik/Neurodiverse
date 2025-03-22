import { Listener_item } from "./listeneritem"
import "./listenercompo.css"
import { useNavigate } from 'react-router-dom';

import React from 'react'


const Listenercomponent = ()=> {
  const navigate = useNavigate();

  const handleChatStart = (listener) => {
    navigate(`/chat`, { state: { listenerId: listener.id, roomId: listener.roomId } });
  };
  return (
   <div className="listener-container">
   {Listener_item.map((listener) => (
    <div className="listener-card">
    <img src={listener.avatar} className="listener-avatar" />
    <h2 className="listener-name">{listener.username}</h2>
    <p className="listener-desription">{listener.description}</p>
    <button 
     type="button" 
     onClick={() => handleChatStart(listener)}
   
     className="l-btn">Message Listener</button>
    </div>
   ))}
       
   </div>
  )
}


export default Listenercomponent
