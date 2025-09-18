import React from 'react';

export default function ProfileSummary({ answers, onEdit }) {
  // Helper: format keys nicely
  const formatKey = (k) =>
    k.replace(/_/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="p-4 w-full mx-auto bg-gray-50 rounded-xl shadow-md transition-shadow duration-300 sm:p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-base font-semibold text-gray-800">Your Search Profile</h3>
          <p className="text-xs text-gray-500 mt-0.5">Review before recommendations</p>
        </div>
        <button
          className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 hover:underline transition-colors duration-200"
          onClick={() => onEdit('discipline')}
        >
          Edit
        </button>
      </div>

      {/* Fields */}
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-3">
        {Object.entries(answers).map(([k, v]) => (
          <div
            key={k}
            className="p-3 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 break-words"
          >
            <div className="text-xs text-gray-400 truncate">{formatKey(k)}</div>
            <div className="text-sm font-medium text-gray-800 mt-1 break-words">
              {v?.toString() || '—'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
