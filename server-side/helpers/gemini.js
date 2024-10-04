// Make sure to include these imports:
const { GoogleGenerativeAI } =require("@google/generative-ai");
require('dotenv').config()


const gemini = async (employeeName)=>{

        // const employeeName = "Harry Potter"
        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
        const prompt = `Give me the summary of the story about ${employeeName} from Novel Harry Potter`;
        
        const result = await model.generateContent(prompt);
        return result.response.text();
}

module.exports = gemini