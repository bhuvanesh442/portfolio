import Project from "../models/Project.js";

export const addProject = async (req, res) => {
  try {
    const { title, description, link } = req.body;
    const project = new Project({ title, description, link });
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: "Failed to add project", details: err.message });
  }
};

export const editProject = async (req, res) => {
  try {
    if (!title && !description && !link) {
      return res.status(400).json({ error: "At least one field must be provided for update." });
    }
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: "Failed to update project", details: err.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete project", details: err.message });
  }
};


export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    s.status(500).json({ error: "Failed to fetch projects", details: error.message });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch project", details: error.message });
  }
};
