import React from 'react';
import clsx from 'clsx';

export default function TilesGrid({ options, selected, onSelect }) {
  return (
    <div className="steps grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {options.map((opt) => {
        const isSelected = selected === opt;

        return (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={clsx(
              'p-4 rounded-2xl border flex items-center justify-center text-center transition-all duration-300 break-words min-h-[60px] small-padding',
              isSelected
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                : 'bg-white border-gray-200 hover:shadow-md'
            )}
          >
            <div className="font-medium text-sm sm:text-base">{opt}</div>
          </button>
        );
      })}
    </div>
  );
}
