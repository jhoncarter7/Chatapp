import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import mongodbConnection from "./db/mongodb.db.js";
import cors from "cors";

//config
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true, // this is to allow the cookie to be sent back and forth
  })
);
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello");
});

//routes
app.use("/api/v1/auth", authRoutes);

//server
app.listen(port, () => {
  mongodbConnection();
  console.log(`Server is running on port ${port}`);
});
