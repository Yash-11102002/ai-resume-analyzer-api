AI Resume Analyzer API is a backend API built using Node.js, Express, and MongoDB that allows you to analyze resumes automatically using OpenAI GPT models.
It extracts key information, predicts role fit, evaluates strengths & weaknesses, and generates an overall resume score.

This API is ideal for HR systems, recruitment platforms, or anyone who wants to automate resume screening.

Features:
Upload resumes and analyze them using AI
Extract candidate information like:
Name
Email
Key skills
Work experience summary
AI-powered enhancements:
Strengths and Weaknesses detection
Role fit prediction (Frontend / Backend / Managerial / etc.)
Score resumes (0–100) based on skills and experience
Compare multiple resumes easily
RESTful API design for easy integration

Tech Stack:
-Node.js – Backend server
-Express.js – REST API framework
-MongoDB – Database to store resume data
-Multer – File upload handling
-OpenAI API – AI-based resume analysis
-Swagger UI – API testing

Folder Structure:
ai-resume-analyzer-api/
├── config/
│   ├── db.js          # MongoDB connection
│   └── openai.js      # OpenAI API config
├── controllers/
│   └── resumeController.js  # Resume analysis logic
├── middleware/
│   └── uploadMiddleware.js  # File upload handling
├── models/
│   └── Resume.js      # MongoDB model
├── routes/
│   └── resumeRoutes.js # API endpoints
├── app.js             # Main server file
├── package.json       # NPM dependencies
├── .env               # Environment variables (ignored in Git)
└── README.md          # Project documentation

Setup
Prerequisites:
Node.js installed
MongoDB installed and running locally
OpenAI API key (set in .env)

Steps
Clone the repository:

git clone https://github.com/Yash-11102002/ai-resume-analyzer-api.git
cd ai-resume-analyzer-api

Install dependencies:
npm install

Create .env file and add your OpenAI key:

PORT=5000
MONGO_URI=<your_mongo_connection_string>
OPENAI_API_KEY=<your_openai_api_key>

Start MongoDB locally
Run server:
npm run dev

Server will run on: http://localhost:5000

Swagger UI:-
Test all API endpoints easily using Swagger:
http://localhost:5000/api-docs