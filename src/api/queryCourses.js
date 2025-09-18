import axios from 'axios'

export async function queryCourses(answers, top_k = 40) {
  // Build the query string (embedding input)
  const query = `${answers.discipline || ''} courses ${answers.degree || ''} ${answers.study_level || ''} Duration ${answers.duration || ''} under ${answers.budget || ''} GBP in ${answers.country || ''}`.trim()

  console.log("👉 Sending query:", query) // Debug log

  // Send to FastAPI
  const res = await axios.post('/api/search', {
    query,
    answers,
    top_k,
  })

  // Return matches array
  return res.data.matches || []
}
