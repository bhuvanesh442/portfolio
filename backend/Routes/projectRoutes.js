import express from "express";
import { addProject, editProject, deleteProject, getProjects, getProjectById } from "../controller/projectcontroller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();


router.post("/add", authMiddleware, addProject);
router.put("/:id", authMiddleware, editProject);
router.delete("/:id", authMiddleware, deleteProject);

router.get("/", getProjects);
router.get("/:id", getProjectById); 

export default router;
