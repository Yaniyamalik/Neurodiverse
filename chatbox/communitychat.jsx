import React from 'react'
import { io } from 'socket.io-client'
import { useEffect,useState} from 'react';
import image1 from "./com-chat.jpg"
import image2 from "./3.png"
import "./Communitychat.css"
import {nanoid} from "nanoid";
const socket = io("http://localhost:8000");
function Communitychat() {
  const [message,setMessage]=useState("")
  const[chat,setChat]=useState([])

  useEffect(()=>{
    socket.on("chat",(payload)=>{
      setChat((prevChat) => [...prevChat, payload]);
    })
    return()=>{
        socket.disconnect()
       } 
     },[])

     const sendchat=(e)=>{
        e.preventDefault()
        if (message.trim() === "") return; 
     
        const newMessage = { id: nanoid(), message };
        socket.emit("chat",{message})
       setMessage('')
     
       };
    

    return (
      <div className="com-chat">
        <div className="com-chatt">
          <img src={image2} className='com-image'/>
        </div>
        <div className="chat">
       <img src={image1} className="comchat-img" />
         {chat.map((payload) => (
             <p key={payload.id} className='cc-p'>{payload.message }</p>
           ))}
     
       <form  onSubmit={sendchat} className='cc-form'>
         <input type='text'name="chat" className='cc-input'
          value={message} 
         onChange={(e)=>setMessage(e.target.value)}/>
         <button type='submit' className='cc-button'> Send</button>
       </form>
       </div>
       </div>
       )
    }
export default Communitychat
     