import fs from "fs";
import { openai } from "../config/openai.js";
import { Resume } from "../models/Resume.js";

export const analyzeResume = async (req, res) => {
  try {
    const filePath = req.file.path;
    const resumeText = fs.readFileSync(filePath, "utf8");

    const prompt = `
    You are an AI Resume Analyzer.
    Analyze the following resume text and return:
    1. Candidate's name
    2. Email
    3. Key skills
    4. Work experience summary
    5. Strengths and Weaknesses
    6. Overall profile summary.

    Resume Text:
    ${resumeText}
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const analysis = response.choices[0].message.content;

    const resume = new Resume({
      name: "Unknown",
      email: "N/A",
      skills: [],
      experience: "",
      analysis,
    });

    await resume.save();

    res.status(200).json({ message: "Resume analyzed successfully!", analysis });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error analyzing resume" });
  }
};


export const quickAnalyzeResume = async (req, res) => {
  try {
    const filePath = req.file.path;
    const resumeText = fs.readFileSync(filePath, "utf8");

    const prompt = `
You are an AI Resume Analyzer.
Analyze the following resume and return only:

- Resume Score: (0-100)
- Role Fit: (Frontend / Backend / Manager / Other)
- Strengths: List top 3 strengths
- Weaknesses: List top 3 weaknesses

Resume Text:
${resumeText}

Return only text in this format:

Score: <number>
Role Fit: <role>
Strengths: <comma-separated list>
Weaknesses: <comma-separated list>
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const analysisText = response.choices[0].message.content;

    res.status(200).send(analysisText);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error analyzing resume");
  }
};
