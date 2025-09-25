// src/Country_Finder/country_results.jsx
import React from "react";

const countryFlags = {
  uae: "ae",
  australia: "au",
  us: "us",
  indonesia: "id",
  ireland: "ie",
  germany: "de",
  hungary: "hu",
  malaysia: "my",
  canada: "ca",
  netherlands: "nl",
  turkey: "tr",
  uk: "gb",
};

export default function CountryResults({ results }) {
  if (!results || !results.matches) return null;

  const topMatches = [...results.matches]
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
        🎓 Your Top Study Abroad Matches
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {topMatches.map((country) => (
          <div
            key={country.id}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center border border-gray-200 hover:shadow-lg transition"
          >
            <img
              src={`https://flagcdn.com/w160/${countryFlags[country.id]}.png`}
              alt={country.name}
              className="w-20 h-14 rounded mb-4"
            />

            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {country.name}
            </h3>
            <p className="text-sm text-blue-600 font-medium mb-4">
              {country.match_percent.toFixed(1)}% Match
            </p>

            <ul className="text-sm text-gray-600 space-y-2 mb-4 text-left">
              <li>
                <span className="font-medium">💰 Tuition:</span> {country.tuition}
              </li>
              <li>
                <span className="font-medium">🏡 PR:</span> {country.pr_summary}
              </li>
              <li>
                <span className="font-medium">💼 Part-time:</span> {country.part_time}
              </li>
              <li>
                <span className="font-medium">🕌 Cultural Fit:</span>{" "}
                {country.pakistani_perspective?.cultural_fit || "Moderate"}
              </li>
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-inner">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">
          📌 Why these countries?
        </h3>
        {/* Split explanation into paragraphs for readability */}
        {results.ai_explanation
          .split(/\n+/)
          .map((para, idx) => (
            <p key={idx} className="text-gray-700 mb-3 whitespace-pre-line">
              {para}
            </p>
          ))}
      </div>
    </div>
  );
}
