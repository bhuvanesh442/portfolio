import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  video: String,
  photos: [String],
});

export default mongoose.model("Project", projectSchema);