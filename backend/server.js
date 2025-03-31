import express from "express";
import dotenv from "dotenv";

import authRoutes from "./Routes/authRoutes.js"


const app = express();
dotenv.config();
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
    console.log("server started at http://localhost:5000");
  });