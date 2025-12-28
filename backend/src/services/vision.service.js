import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildVisionPrompt } from "../utils/promptBuilder.js";
import { formatVisionResponse } from "../utils/responseFormatter.js";
import dotenv from 'dotenv';
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * Analyze images using Gemini 2.5 Pro (Vision)
 */
export const analyzeImagesWithVision = async (images) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const promptText = buildVisionPrompt();

    // Convert images to Gemini format
    const imageParts = images.map((img) => ({
      inlineData: {
        data: img.buffer.toString("base64"),
        mimeType: img.mimetype
      }
    }));

    const result = await model.generateContent([
      promptText,
      ...imageParts
    ]);

    const rawOutput = result.response.text();

    return formatVisionResponse(rawOutput);

  } catch (error) {
    console.error(error);
    throw new Error("Gemini vision analysis failed");
  }
};
