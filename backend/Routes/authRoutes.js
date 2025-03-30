import express from "express";
import { login } from "../Controller/authController.js";

const router = express.Router();

router.get("/login",login )

export default router;