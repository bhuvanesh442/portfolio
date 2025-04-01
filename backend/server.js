import express from "express";
import dotenv from "dotenv";

import authRoutes from "./Routes/authRoutes.js"

const app = express();
dotenv.config();
app.use(express.json());

app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
  });