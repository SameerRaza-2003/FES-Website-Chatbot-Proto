import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MultiStepForm() {
  const steps = [
    {
      title: "Personal Info",
      description: "Let's get to know you better",
      fields: [
        { label: "Full Name", name: "fullName", type: "text", required: true, validation: /^[a-zA-Z\s]{2,50}$/ },
        { label: "WhatsApp Number", name: "whatsapp", type: "tel", required: true, validation: /^[0-9]{10,15}$/
 },
        { label: "Email Address", name: "email", type: "email", required: true, validation: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
        { label: "City of Residence", name: "city", type: "text", required: true, validation: /^[a-zA-Z\s]{2,30}$/ }
      ]
    },
    {
      title: "Academic Info",
      description: "Tell us about your education",
      fields: [
        {
          label: "Your Highest Qualification",
          name: "qualification",
          type: "select",
          options: ["High School", "Diploma", "Bachelor's", "Master's", "PhD"],
          required: true
        },
        {
          label: "Your Current/Most Recent Institution Name",
          name: "institution",
          type: "text",
          required: true,
          validation: /^[a-zA-Z0-9\s&'-]{2,100}$/
        },
        {
          label: "Your Major / Field of Study",
          name: "major",
          type: "text",
          required: true,
          validation: /^[a-zA-Z\s]{2,50}$/
        },
        {
          label: "Year of Graduation (or expected)",
          name: "graduationYear",
          type: "number",
          required: true,
          validation: (value) => {
            const year = parseInt(value);
            const currentYear = new Date().getFullYear();
            return year >= currentYear - 10 && year <= currentYear + 5;
          }
        }
      ]
    },
    {
      title: "Study Preferences",
      description: "Your study abroad preferences",
      fields: [
        {
          label: "Which country are you interested in?",
          name: "country",
          type: "select",
          options: ["USA", "UK", "Canada", "Australia", "Germany", "Turkey"],
          required: true
        },
        {
          label: "Preferred Intake",
          name: "intake",
          type: "select",
          options: [
            "September 2025",
            "January 2026",
            "May 2026",
            "September 2026"
          ],
          required: true
        },
        {
          label: "Do you have IELTS/TOEFL or any English proficiency test result?",
          name: "englishTest",
          type: "select",
          options: ["Yes", "No", "Planning to take soon"],
          required: true
        }
      ]
    }
  ];

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [touchedFields, setTouchedFields] = useState(new Set());

  // Load saved form data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('bookSessionFormData');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setFormData(parsed);
      } catch (e) {
        console.error('Failed to load saved form data');
      }
    }
  }, []);

  // Auto-save form data
  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      localStorage.setItem('bookSessionFormData', JSON.stringify(formData));
    }
  }, [formData]);

  const validateField = (name, value, field) => {
    if (field.required && (!value || value.trim() === '')) {
      return `${field.label} is required`;
    }
    
    if (value && field.validation) {
      if (typeof field.validation === 'function') {
        return field.validation(value) ? '' : `Invalid ${field.label.toLowerCase()}`;
      } else if (field.validation instanceof RegExp) {
        return field.validation.test(value) ? '' : `Invalid ${field.label.toLowerCase()}`;
      }
    }
    
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const field = steps[step].fields.find(f => f.name === name);
    
    setFormData({ ...formData, [name]: value });
    setTouchedFields(prev => new Set(prev).add(name));
    
    if (field) {
      const error = validateField(name, value, field);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const field = steps[step].fields.find(f => f.name === name);
    
    if (field) {
      const error = validateField(name, value, field);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const isStepValid = () => {
    return steps[step].fields.every(field => {
      const value = formData[field.name];
      return !validateField(field.name, value, field);
    });
  };

  const nextStep = () => {
    if (isStepValid() && step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!isStepValid()) {
    steps[step].fields.forEach(field => {
      setTouchedFields(prev => new Set(prev).add(field.name));
      const error = validateField(field.name, formData[field.name], field);
      setErrors(prev => ({ ...prev, [field.name]: error }));
    });
    return;
  }

  setIsSubmitting(true);

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbzOPTQ7Grkb2Z7LUkua0JAv-IVnDswxtdi8-1SCh6cMFQsb8ujNo4IsytbveOAEUV5I/exec", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      mode: 'no-cors' // This bypasses CORS but we won't get the response
    });

    setSubmitSuccess(true);
    localStorage.removeItem('bookSessionFormData');
    
  } catch (error) {
    console.error("Network error:", error);
    alert("There was an error submitting your form. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};


  const resetForm = () => {
    setFormData({});
    setErrors({});
    setStep(0);
    setSubmitSuccess(false);
    setTouchedFields(new Set());
  };

  if (submitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8"
      >
        <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h3>
        <p className="text-gray-600 mb-6">Your consultation session has been booked successfully. One of our expert counselors will contact you shortly.</p>
        <button
          onClick={resetForm}
          className="px-6 py-3 bg-gradient-to-r from-fes-blue to-fes-deep text-white rounded-full hover:shadow-lg transition-all duration-300"
        >
          Book Another Session
        </button>
      </motion.div>
    );
  }

  return (
    <section className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-w-3xl h-full flex flex-col justify-center p-0">
        <div className="glass-strong rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-14 flex flex-col h-full">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center bg-gradient-to-r from-fes-blue to-fes-deep bg-clip-text text-transparent">
                {steps[step].title}
              </h2>
              <span className="text-sm text-gray-500">{step + 1} of {steps.length}</span>
            </div>
            <p className="text-gray-600 text-center mb-4 text-sm sm:text-base">
              {steps[step].description}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-fes-blue to-fes-deep h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between">
            <div className="flex-1 min-h-0 pr-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4 sm:space-y-6"
                >
                  {steps[step].fields.map((field, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex flex-col"
                    >
                      <label className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      <div className="relative">
                        {field.type === "select" ? (
                          <select
                            name={field.name}
                            required={field.required}
                            value={formData[field.name] || ""}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full px-4 py-2 rounded-xl border-2 focus:ring-2 focus:ring-fes-blue/20 focus:border-fes-blue focus:outline-none transition-all duration-300 overflow-visible {
                              errors[field.name] && touchedFields.has(field.name)
                                ? 'border-red-500 bg-red-50 shadow-red-200'
                                : formData[field.name]
                                ? 'border-green-500 bg-green-50 shadow-green-200'
                                : 'border-gray-200 glass hover:border-gray-300'
                            }`}
                          >
                            <option value="">Select...</option>
                            {field.options.map((opt, i) => (
                              <option key={i} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            required={field.required}
                            value={formData[field.name] || ""}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={`Enter your ${field.label.toLowerCase()}`}
                            className={`w-full px-4 py-2 rounded-xl border-2 focus:ring-2 focus:ring-fes-blue/20 focus:border-fes-blue focus:outline-none transition-all duration-300 overflow-visible {
                              errors[field.name] && touchedFields.has(field.name)
                                ? 'border-red-500 bg-red-50 shadow-red-200'
                                : formData[field.name]
                                ? 'border-green-500 bg-green-50 shadow-green-200'
                                : 'border-gray-200 glass hover:border-gray-300'
                            }`}
                          />
                        )}
                        {errors[field.name] && touchedFields.has(field.name) && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-1 flex items-center"
                          >
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors[field.name]}
                          </motion.p>
                        )}
                        {formData[field.name] && !errors[field.name] && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute right-3 top-3 text-green-500"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 sm:mt-8">
              {step > 0 && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={prevStep}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </motion.button>
              )}
              {step < steps.length - 1 ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className={`w-full sm:w-auto px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center ${
                    isStepValid()
                      ? 'bg-gradient-to-r from-fes-blue to-fes-deep text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Next
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting || !isStepValid()}
                  className={`w-full sm:w-auto px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center ${
                    isSubmitting || !isStepValid()
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </motion.button>
              )}
            </div>

            {/* Step Indicators */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-3 pb-2">
              {steps.map((_, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => {
                    if (i <= step || (i > 0 && isStepValid())) {
                      setStep(i);
                    }
                  }}
                  className={`w-4 h-4 rounded-full transition-all duration-300 shadow-sm ${
                    i === step
                      ? 'bg-fes-blue scale-125 shadow-lg shadow-fes-blue/30'
                      : i < step
                      ? 'bg-green-500 shadow-md shadow-green-200'
                      : 'bg-gray-300 hover:bg-gray-400 hover:shadow-md'
                  }`}
                />
              ))}
            </div>
          </form>
        </div>
      </div>

      {/* Background blobs */}
      <div className="absolute -right-40 top-20 w-96 h-96 rounded-full bg-gradient-to-br from-fes-blue/30 to-fes-deep/20 blur-3xl mix-blend-overlay pointer-events-none animate-pulse"></div>
      <div className="absolute -left-32 bottom-10 w-72 h-72 rounded-full bg-gradient-to-tr from-green-400/30 to-green-600/20 blur-3xl mix-blend-overlay pointer-events-none animate-pulse"></div>
    </section>
  );
}
