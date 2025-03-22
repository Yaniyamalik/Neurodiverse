import express from  "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import { Server } from "socket.io"
import { createServer } from "http"
import { Chat } from "./models/chat.model.js"
const app=express()

const server=createServer(app)
const io=new Server(server,{
    cors:{
        origin:process.env.CORS_ORIGIN,
        credentials: true
    }
})

io.on("connection",(socket)=>{
    //console.log("User connected",socket.id);
   


    socket.on("chat",(payload)=>{
        //console.log("this is payload");
      
        io.emit("chat",payload)
});

socket.on("join_room",({username,room})=>{
   socket.join(room)
   //console.log(`${username} joined room: ${room}`);
});

socket.on("chat_room", ({ id, message, room }) => {
   // console.log(`Message in Room ${room}:`, message);
    io.to(room).emit("chat", { id, message });
  });

  
  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });
});



app.use(cors({
 origin:process.env.CORS_ORIGIN,
 credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

import userRouter from './routes/user.route.js' 

app.use("/api/v1/users", userRouter)




export default server
