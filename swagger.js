<<<<<<< HEAD
// swagger.js
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "AI Resume Analyzer API",
      version: "1.0.0",
      description: "Analyze resumes using OpenAI GPT models",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"], // ye route files se docs read karega
};

export const swaggerSpec = swaggerJSDoc(options);
export const swaggerUI = swaggerUi;
=======
// swagger.js
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "AI Resume Analyzer API",
      version: "1.0.0",
      description: "Analyze resumes using OpenAI GPT models",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"], // ye route files se docs read karega
};

export const swaggerSpec = swaggerJSDoc(options);
export const swaggerUI = swaggerUi;
>>>>>>> 4b6456d9c6392b1b7c70f3559e50805f40e4600f
