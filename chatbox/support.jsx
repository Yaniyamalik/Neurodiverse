import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useLocation } from 'react-router-dom';
import { nanoid } from "nanoid";
import image2 from "./2.png"
import image1 from "./support.jpg"
import "./Support.css"

const socket = io("http://localhost:8000");

export const Support = () => {
  const location = useLocation();
  const { listenerId, roomId } = location.state || {};

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [username, setUsername] = useState("user123");

  useEffect(() => {
    if (roomId) {
      socket.emit("join_room", { username, room: roomId });
    }

    // socket.on("chat", (payload) => {
    //   setChat((prevChat) => [...prevChat, payload]);
    // });

    return () => {
      socket.off("chat");
    };
  }, [roomId, username]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;
       
    const newMessage = { id: nanoid(), message, room: roomId };
    socket.emit("chat", newMessage); 
    
    setChat((prevChat) => [...prevChat, newMessage]); 
    setMessage('');
  };

  return (
    <div className="support-chat">
        <div className="healer">
        <img src={image2} className='sup-img'/></div>
    <div className="support">
        <img src={image1} className='s-img'/>
      <h2>Chat with Listener {listenerId}</h2>
      {chat.map((msg) => (
        <p key={msg.id} className='s-p'>{msg.message}</p>
      ))}
      <form onSubmit={sendMessage}>
        <input 
          type="text" 
          value={message} 
          className='s-input'
          onChange={(e) => setMessage(e.target.value)} 
        />
        <button type="submit" className='s-button'>Send</button>
      </form>
    </div>
    </div>
  );
};
