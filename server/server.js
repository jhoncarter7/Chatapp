import express from "express";
import dotenv from "dotenv";
import mongodbConnection from "./db/mongodb.db.js";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js"
import userRoutes from "./routes/user.route.js"
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
import path from 'path';
//config
dotenv.config();

const port = process.env.PORT || 5000;
const __dirname = path.resolve()
//middleware
app.use(express.json());
app.use(cookieParser())
app.get("/", (req, res) => {
  res.send("hello");
});

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/message", messageRoutes);
app.use("/api/v1/user", userRoutes)

app.use(express.static(path.join(__dirname, '/client/dist')))

app.get('*', (req, res)=> {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
})

//server
server.listen(port, () => {
  mongodbConnection();
  console.log(`Server is running on port ${port}`);
});
