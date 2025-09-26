// src/Country_Finder/Quiz.jsx
import React, { useState } from "react";
import { quizQuestions } from "./questions";
import "./quiz.css";
import CountryResults from "./country_results";

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const totalSteps = quizQuestions.length;
  const question = quizQuestions[currentStep];

  const handleAnswer = async (option) => {
    const updatedAnswers = {
      ...answers,
      [question.id]: option.value,
    };
    setAnswers(updatedAnswers);

    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Quiz finished → send answers to backend
      setLoading(true);
      try {
        const res = await fetch("http://127.0.0.1:8000/recommend", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedAnswers),
        });
        const data = await res.json();
        setResult(data);
      } catch (err) {
        console.error("Error fetching recommendation:", err);
      }
      setLoading(false);
    }
  };

  const progressPercent = ((currentStep + 1) / totalSteps) * 100;

  if (loading) {
    return (
      <div className="quiz-card text-center">
        <h2 className="quiz-title">🌍 Country Finder Quiz</h2>
        <p className="loading-text">🔎 Finding the best countries for you...</p>
      </div>
    );
  }

  if (result) {
    return <CountryResults results={result} />;
  }

  return (
    <div className="quiz-card">
      {/* Header */}
      <h2 className="quiz-title">🌍 Country Finder Quiz</h2>
      <p className="quiz-subtitle">
        Answer a few quick questions and discover the top countries that fit
        your study goals 🎓✈️
      </p>

      {/* Progress Bar */}
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Step Count */}
      <p className="step-text">
        Step {currentStep + 1} of {totalSteps}
      </p>

      {/* Question */}
      <h2 className="question-text">{question.question}</h2>

      {/* Options */}
      <div className="options-grid">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(option)}
            className="option-button"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
