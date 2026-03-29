const { GoogleGenAI } = require("@google/genai");
const {
  conceptExplainPrompt,
  questionAnswerPrompt,
} = require("../utils/prompts");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

//@desc Generate interview questions and answers
//@route POST /api/ai/generate-questions
//@access Private
const generateInterviewQuestions = async (req, res) => {
  try {
    const { role, experience, topicsToFocus, numberOfQuestions } = req.body;

    //validation
    if (!role || !experience || !topicsToFocus || !numberOfQuestions) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const prompt = questionAnswerPrompt(
      role,
      experience,
      topicsToFocus,
      numberOfQuestions
    );

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash", // safer model
      contents: prompt,
    });

    //  correct response extraction
    const rawText =
      response?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    if (!rawText) {
      return res.status(500).json({
        message: "Empty response from AI",
      });
    }

    //  clean markdown
    const cleanedText = rawText
      .replace(/^```json\s*/i, "")
      .replace(/```$/, "")
      .trim();

    //  safe JSON parse
    let data;
    try {
      data = JSON.parse(cleanedText);
    } catch (err) {
      return res.status(500).json({
        message: "Invalid JSON from AI",
        raw: cleanedText,
      });
    }

    //  send response
    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({
      message: "Failed to generate questions",
      error: error.message,
    });
  }
};

//@desc Generate explanation for a question
//@route POST /api/ai/generate-explanation
//@access Private
const generateConceptExplanation = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        message: "Question is required",
      });
    }

    const prompt = conceptExplainPrompt(question);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const rawText =
      response?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    if (!rawText) {
      return res.status(500).json({
        message: "Empty response from AI",
      });
    }

    const cleanedText = rawText
      .replace(/^```json\s*/i, "")
      .replace(/```$/, "")
      .trim();
    let data;
    try {
      data = JSON.parse(cleanedText);
    } catch (err) {
      return res.status(500).json({
        message: "Invalid JSON from AI",
        raw: cleanedText,
      });
    }

    // send proper object
    return res.status(200).json(data);

  } catch (error) {
    console.error("EXPLANATION ERROR:", error);

    return res.status(500).json({
      message: "Failed to generate explanation",
      error: error.message,
    });
  }
};

module.exports = {
  generateInterviewQuestions,
  generateConceptExplanation,
};