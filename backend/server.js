import express from "express";
import authRoutes from "./Routes/authRoutes.js"


const app = express();

app.use("/auth", authRoutes);

app.listen(5000, () => {
    console.log("server started at http://localhost:5000");
  });