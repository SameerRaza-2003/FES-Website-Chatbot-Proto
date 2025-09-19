import React, { useEffect, useState } from 'react';
import { queryCourses } from '../../api/queryCourses';

export default function Results({ answers }) {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(0);

  const per = 5;
  const pages = Math.max(1, Math.ceil(results.length / per));

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    queryCourses(answers, 40)
      .then(data => mounted && setResults(data || []))
      .catch(err => {
        console.error(err);
        setResults([]);
      })
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
  }, [answers]);

  const start = results.length === 0 ? 0 : page * per + 1;
  const end = Math.min(results.length, (page + 1) * per);

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Recommended Courses</h3>

      {loading ? (
        <div className="p-8 text-gray-500 text-center">Loading...</div>
      ) : results.length === 0 ? (
        <div className="p-8 text-gray-500 text-center">No courses found</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.slice(page * per, page * per + per).map((r, idx) => (
              <div
                key={r.course_id || r.id || idx}
                className="p-6 border rounded-3xl bg-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                {/* Top Row */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    {/* Course title as bluish text */}
                    <div className="text-lg font-semibold text-indigo-600 hover:text-indigo-700 transition-colors duration-200">
                      {r.course_title || 'Untitled course'}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {r.institute_name || 'Unknown'} {r.country ? `• ${r.country}` : ''}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">{r.duration || ''}</div>
                    <div className="text-lg font-bold text-gray-800 mt-1">
                      {r.course_fee ? `${r.course_fee} ${r.currency || ''}` : 'Free'}
                    </div>
                  </div>
                </div>

                {/* Discipline / specialization */}
                { (r.discipline || r.specialization) && (
                  <div className="text-sm text-gray-600 mt-2">
                    {r.discipline || ''} {r.specialization ? `• ${r.specialization}` : ''}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="text-sm text-gray-500">
              Showing {start} - {end} of {results.length}
            </div>
            <div className="flex gap-2">
              <button
                className="px-4 py-2 border rounded-md text-sm disabled:opacity-40 hover:bg-gray-100 transition-colors"
                onClick={() => setPage(p => Math.max(0, p - 1))}
                disabled={page === 0}
              >
                Prev
              </button>
              <button
                className="px-4 py-2 border rounded-md text-sm disabled:opacity-40 hover:bg-gray-100 transition-colors"
                onClick={() => setPage(p => Math.min(pages - 1, p + 1))}
                disabled={page >= pages - 1}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
