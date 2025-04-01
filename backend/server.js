import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./Routes/authRoutes.js"
import connectDB from "./config/db.js";
import projectRoutes from "./Routes/projectRoutes.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
    connectDB()
  });