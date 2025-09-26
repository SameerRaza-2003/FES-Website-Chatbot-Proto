import React, { useState } from 'react'
import QuestionStep from '../sections/Course-Finder/QuestionStep'
import ProfileSummary from '../sections/Course-Finder/ProfileSummary'
import Results from '../sections/Course-Finder/Results'
import Stepper from '../sections/Course-Finder/Stepper'

const STEPS = [
  { key: 'discipline', title: 'Discipline' },
  { key: 'degree', title: 'Degree' },
  { key: 'duration', title: 'Duration' },
  { key: 'budget', title: 'Budget' },
  { key: 'country', title: 'Country' }
]

export default function CourseFinder() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({
    discipline: null,
    degree: null,
    duration: null,
    budget: null,
    country: 'United Kingdom'
  })

  const handleAnswer = (key, val) => {
    // If degree is changed, reset duration as the options will be different
    if (key === 'degree') {
      setAnswers(a => ({ ...a, [key]: val, duration: null }))
    } else {
      setAnswers(a => ({ ...a, [key]: val }))
    }
    // auto-advance
    setTimeout(() => setCurrent(c => Math.min(STEPS.length - 1, c + 1)), 100)
  }

  const goTo = (idx) => setCurrent(idx)

  return (
    <div className="w-full max-w-7xl mx-auto p-8 md:p-12">
      <Stepper steps={STEPS} current={current} />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8 min-h-[600px]">
        <div className="md:col-span-3 flex flex-col gap-6">
          <div className="p-6 border rounded-lg bg-white shadow-sm">
            <QuestionStep
              stepKey={STEPS[current].key}
              title={STEPS[current].title}
              onAnswer={handleAnswer}
              initial={answers[STEPS[current].key]}
              answers={answers}
            />
          </div>

          <Results answers={answers} />
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <ProfileSummary
              answers={answers}
              onEdit={(k) => {
                const idx = STEPS.findIndex(s => s.key === k)
                if (idx >= 0) setCurrent(idx)
              }}
            />
          </div>
        </div>

      </div>
    </div>
  )
}
