import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  skills: [String],
  experience: String,
  analysis: String,
});

export const Resume = mongoose.model("Resume", resumeSchema);
