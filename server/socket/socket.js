import {Server} from "socket.io"
import {createServer} from "http"
import express from "express"

const app = express()

const server = createServer(app)

const io = new Server(server,  {
cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"]
}
})

export const getRecevierSocletId = (receiverId)=> {
    return useSocketMap[receiverId]
}
//useSocketMap is used to store the userId and socketId of all connected clients
const useSocketMap = {}  // {userId: socketId}

io.on("connection", (socket)=> {
console.log("User connected", socket.id)

const userId = socket.handshake.query.userId

if(userId != "undefined") useSocketMap[userId] = socket.id

//io.emit is used to send event to all connected clients
//with event we are sending arrays of active users to all connected clients
io.emit("onlineUsers", Object.keys(useSocketMap))

//socket.on is used to listen for an event both from the client and server
socket.on("disconnect", ()=> {
    console.log("User disconnected", socket.id)
    delete useSocketMap[userId]
    io.emit("onlineUsers", Object.keys(useSocketMap))
})
})


export  {app, server, io}

//socket.emit is used to send event to specific client
//socket.broadcast.emit is used to send event to all connected clients except the one who sent the event
//socket.to(socketId).emit is used to send event to specific client
//io.to(roomId).emit is used to send event to all clients in a specific room
//socket.broadcast.to(roomId).emit is used to send event to all clients in a specific room except the one who sent the event
//socket.join(roomId) is used to join a specific room
//socket.leave(roomId) is used to leave a specific room
//socket.rooms is used to get all rooms of a specific client
//socket.id is used to get the id of a specific client
//socket.handshake.query is used to get the query parameters of a specific client
//socket.on is used to listen for an event
//socket.emit is used to send an event