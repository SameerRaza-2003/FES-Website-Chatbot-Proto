import React, { useState } from 'react';
import TilesGrid from './TilesGrid';

const OPTIONS = {
  discipline: ['Business & Management', 'Law', 'Engineering', 'Computer Science', 'Arts', 'Health'],
  study_level: ['Undergraduate', 'Postgraduate'],
  degree: ['Bachelors', 'Masters', 'Diploma', 'PhD'],
  duration: ['1 year', '2 year', '3 year', '4 year', '>4 years'],
  budget: ['10000', '15000', '20000', '30000', 'No limit'],
  country: ['United Kingdom'],
};

export default function QuestionStep({ stepKey, title, onAnswer, initial }) {
  const [selected, setSelected] = useState(initial || null);

  const handleSelect = (val) => {
    setSelected(val);
    onAnswer(stepKey, val);
  };

  return (
    <div className="mt-6 p-6 bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 small-padding">
      {/* Question Title */}
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-500 mt-2">Choose one option (tap to select)</p>

      {/* Options Grid */}
      <div className="mt-6">
        <TilesGrid options={OPTIONS[stepKey] || []} selected={selected} onSelect={handleSelect} />
      </div>
    </div>
  );
}
