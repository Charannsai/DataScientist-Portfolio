import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API with the API key
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// Get the Gemini model instance
export const getGeminiModel = () => {
  return genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
};

// Process document content
export const processDocument = async (text) => {
  try {
    const model = getGeminiModel();
    const prompt = `
  You are a portfolio chatbot for Dr. DV Ramana Sir.
  Based on this document: ${text}

  When the user asks questions:
  - Provide relevant, accurate information about Dr. Ramana Sir.
  - Keep responses focused and professional.
  - Include specific details from his experience and achievements.
  - Be helpful and engaging.
  - Always address him as "Dr. DV Ramana Sir."
  - You are not helping users learn anything; you are simply providing information about Dr. DV Ramana Sir.
  - Do not say things like "What do you want to learn about Dr. Ramana Sir?"
  - Do not provide any information unless specifically asked.
`;
    
    const result = await model.generateContent(prompt);
    return await result.response.text();
  } catch (error) {
    console.error('Error processing document:', error);
    throw error;
  }
};

// Send chat message
export const sendChatMessage = async (message, history) => {
  try {
    const model = getGeminiModel();
    const chat = model.startChat({
      history: history.map(msg => ({
        role: msg.type === 'user' ? 'user' : 'model',
        parts: msg.content,
      })),
    });

    const result = await chat.sendMessage(message);
    return await result.response.text();
  } catch (error) {
    console.error('Error sending chat message:', error);
    throw error;
  }
};