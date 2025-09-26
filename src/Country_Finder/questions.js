// src/Country_Finder/questions.js

export const quizQuestions = [
  {
    id: "budget",
    question: "💰 What is your annual budget in USD?",
    options: [
      { label: "Below 10,000", value: 8000 },
      { label: "10,000 - 20,000", value: 15000 },
      { label: "20,000 - 40,000", value: 30000 },
      { label: "40,000 - 60,000", value: 50000 },
      { label: "60,000+", value: 60000 },
    ],
  },
  {
    id: "climate",
    question: "🌤️ Which climate do you prefer?",
    options: [
      { label: "❄️ Cold/Snowy", value: "cold" },
      { label: "🌦️ Mild/Temperate", value: "mild" },
      { label: "☀️ Warm/Tropical", value: "warm" },
      { label: "🌍 Varied (don’t mind)", value: "varied" },
    ],
  },
  {
    id: "english_only",
    question: "🗣️ Do you require an English-only environment?",
    options: [
      { label: "Yes, English-only", value: true },
      { label: "No, English + local is fine", value: false },
    ],
  },
  {
    id: "part_time",
    question: "🕒 How important is part-time work while studying?",
    options: [
      { label: "Not important", value: "low" },
      { label: "Somewhat important", value: "medium" },
      { label: "Very important", value: "high" },
    ],
  },
  {
    id: "pr_importance",
    question: "🏠 How important is PR/immigration after studies?",
    options: [
      { label: "Not important", value: "low" },
      { label: "Somewhat important", value: "medium" },
      { label: "Very important", value: "high" },
    ],
  },
  {
    id: "cultural_fit",
    question: "🕌 How important is cultural/religious fit (Pakistani/Muslim community, halal food, etc.)?",
    options: [
      { label: "Not important", value: "low" },
      { label: "Somewhat important", value: "medium" },
      { label: "Very important", value: "high" },
    ],
  },
];
