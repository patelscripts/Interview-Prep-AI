const questionAnswerPrompt = (role,experience,topicsToFocus,numberOfQuestions) => 
`You are an expert AI trained to generate high-quality technical interview questions and answers.

Task:
- Role: ${role}
- Candidate Experience: ${experience} years
- Focus Topics: ${topicsToFocus}

Instructions:
- Generate exactly ${numberOfQuestions} interview questions.
- Questions should be relevant to the role and experience level.
- Cover both theory and practical concepts.
- For each question, provide a clear, beginner-friendly answer.
- If needed, include a short and simple code example.
- Keep answers concise but informative.
- Maintain clean formatting.

Output Format (IMPORTANT):
Return ONLY a valid JSON array like this:

[
  {
    "question": "Your question here?",
    "answer": "Detailed answer here."
  }
]

Do NOT include any extra text, explanation, or markdown.
`;

// Explain Concept in Depth
const conceptExplainPrompt = (question) => `
You are an expert programming teacher.

Task:
- Explain the following interview question in depth as if teaching a beginner developer.

Question:"${question}"

Instructions:
- Break down the concept step-by-step.
- Use simple language.
- Add examples where needed.
- If helpful, include a small code snippet.
- Keep formatting clean and structured.

Output Format (IMPORTANT):
Return ONLY a valid JSON object like this:

{
  "title": "Short title of the concept",
  "explanation": "Detailed explanation here"
}

Do NOT include any extra text outside JSON.
`;

module.exports = {questionAnswerPrompt, conceptExplainPrompt};
