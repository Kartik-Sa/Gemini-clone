import { GoogleGenAI } from "@google/genai";

// 1. Initialize the new SDK
const ai = new GoogleGenAI({ 
  apiKey: "AIzaSyBVKDbqkvnK_8MtXgGf4Sn7k1MTFCBnYoo" // Please move this to a .env file later!
});

export async function generateAIResponse(prompt) {
  try {
    // 2. Use the new syntax: ai.models.generateContent
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash", // Make sure to use a valid, current model name
      contents: prompt, 
    });
    
    // 3. In the new SDK, .text is a property, not a function!
    console.log(response.text); 
    return response.text;
    
  } catch (error) {
    console.error("Error fetching from Gemini:", error);
    return "Sorry, I encountered an error.";
  }
}