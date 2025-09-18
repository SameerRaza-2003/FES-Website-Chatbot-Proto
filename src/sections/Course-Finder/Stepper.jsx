import React from 'react';
import '../../assets/stepper.css';

export default function Stepper({ steps, current }) {
  return (
    <div className="stepper">
      {/* Full Connector Line */}
      <div className="stepper-line" />

      {/* Active Progress Line */}
      <div
        className="stepper-progress"
        style={{ width: `${(current / (steps.length - 1)) * 100}%` }}
      />

      <div className="stepper-steps">
        {steps.map((step, i) => (
          <div key={step.key} className="stepper-step">
            {/* Step Circle */}
            <div
              className={`stepper-circle ${i <= current ? 'active' : ''}`}
            >
              {i + 1}
            </div>

            {/* Step Label */}
            <div
              className={`stepper-label ${i === current ? 'current' : ''}`}
            >
              {step.title}
            </div>
          </div>
        ))}
      </div>

      {/* Step Counter */}
      <div className="stepper-counter">
        Step {current + 1} of {steps.length}
      </div>
    </div>
  );
}
