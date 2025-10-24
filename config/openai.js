import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();  // ✅ Make sure env variables are loaded

// Check if API key exists
if (!process.env.OPENAI_API_KEY) {
  throw new Error(
    "❌ OpenAI API key is missing! Please set OPENAI_API_KEY in your .env file."
  );
}

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
