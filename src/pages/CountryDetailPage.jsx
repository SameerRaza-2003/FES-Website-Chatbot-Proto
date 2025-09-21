import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Users, GraduationCap, BookOpen, Star, DollarSign, MapPin } from 'lucide-react'
import { countries } from '../data/countries'

// Extended country data with detailed information
const countryDetails = {
  'united-kingdom': {
    universities: 150,
    students: '2.3M',
    programs: '50K+',
    satisfaction: '94%',
    highlights: [
      'Home to Oxford and Cambridge Universities',
      'Rich cultural heritage and history',
      'Gateway to Europe',
      'Strong job market post-graduation'
    ],
    topUniversities: [
      'University of Oxford',
      'University of Cambridge', 
      'Imperial College London',
      'London School of Economics'
    ],
    popularPrograms: [
      'Business & Management',
      'Engineering',
      'Medicine',
      'Computer Science'
    ],
    costs: {
      tuition: '£15,000 - £35,000',
      living: '£12,000 - £18,000'
    }
  },
  'australia': {
    universities: 43,
    students: '1.5M',
    programs: '22K+',
    satisfaction: '92%',
    highlights: [
      'World-class research facilities',
      'Beautiful natural landscapes',
      'Multicultural society',
      'Post-study work opportunities'
    ],
    topUniversities: [
      'University of Melbourne',
      'Australian National University',
      'University of Sydney',
      'University of Queensland'
    ],
    popularPrograms: [
      'Engineering',
      'Business',
      'Health Sciences',
      'Information Technology'
    ],
    costs: {
      tuition: 'AUD $25,000 - $45,000',
      living: 'AUD $20,000 - $27,000'
    }
  },
  'united-states': {
    universities: 4000,
    students: '20M',
    programs: '100K+',
    satisfaction: '89%',
    highlights: [
      'World\'s largest higher education system',
      'Leading research and innovation',
      'Diverse academic opportunities',
      'Strong alumni networks globally'
    ],
    topUniversities: [
      'Harvard University',
      'Stanford University',
      'MIT',
      'University of California, Berkeley'
    ],
    popularPrograms: [
      'Computer Science',
      'Business Administration',
      'Engineering',
      'Medicine'
    ],
    costs: {
      tuition: '$25,000 - $55,000',
      living: '$15,000 - $25,000'
    }
  },
  'canada': {
    universities: 98,
    students: '2.1M',
    programs: '15K+',
    satisfaction: '96%',
    highlights: [
      'High quality of life',
      'Affordable education',
      'Pathway to permanent residency',
      'Bilingual environment'
    ],
    topUniversities: [
      'University of Toronto',
      'McGill University',
      'University of British Columbia',
      'University of Waterloo'
    ],
    popularPrograms: [
      'Computer Science',
      'Engineering',
      'Business',
      'Health Sciences'
    ],
    costs: {
      tuition: 'CAD $15,000 - $35,000',
      living: 'CAD $12,000 - $18,000'
    }
  },
  'germany': {
    universities: 400,
    students: '2.9M',
    programs: '20K+',
    satisfaction: '91%',
    highlights: [
      'Tuition-free public universities',
      'Strong engineering programs',
      'Central location in Europe',
      'Excellent job prospects'
    ],
    topUniversities: [
      'Technical University of Munich',
      'Ludwig Maximilian University',
      'Heidelberg University',
      'Humboldt University'
    ],
    popularPrograms: [
      'Engineering',
      'Computer Science',
      'Business',
      'Natural Sciences'
    ],
    costs: {
      tuition: '€0 - €3,000 (Public)',
      living: '€8,000 - €12,000'
    }
  },
  'netherlands': {
    universities: 75,
    students: '850K',
    programs: '2K+',
    satisfaction: '93%',
    highlights: [
      'Programs taught in English',
      'Innovative teaching methods',
      'High quality of life',
      'Strategic location in Europe'
    ],
    topUniversities: [
      'University of Amsterdam',
      'Delft University of Technology',
      'Leiden University',
      'Utrecht University'
    ],
    popularPrograms: [
      'Engineering',
      'Business',
      'Social Sciences',
      'Arts & Design'
    ],
    costs: {
      tuition: '€2,200 - €20,000',
      living: '€10,000 - €15,000'
    }
  }
}

export default function CountryDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [country, setCountry] = useState(null)
  const [details, setDetails] = useState(null)

  useEffect(() => {
    const foundCountry = countries.find(c => c.slug === slug)
    const foundDetails = countryDetails[slug]
    
    if (foundCountry) {
      setCountry(foundCountry)
      setDetails(foundDetails || {
        universities: 'N/A',
        students: 'N/A', 
        programs: 'N/A',
        satisfaction: 'N/A',
        highlights: ['Coming soon...'],
        topUniversities: ['Information coming soon'],
        popularPrograms: ['Information coming soon'],
        costs: { tuition: 'Contact us', living: 'Contact us' }
      })
    }
  }, [slug])

  if (!country) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Country not found</h1>
          <button
            onClick={() => navigate('/countries')}
            className="px-6 py-3 bg-fes-blue text-white rounded-full hover:bg-fes-deep transition-colors duration-300"
          >
            Back to Countries
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header Section */}
      <div className="pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate('/countries')}
            className="flex items-center text-fes-blue hover:text-fes-deep transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Countries
          </motion.button>

          {/* Country Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  className="w-32 h-24 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {country.name}
                </h1>
                <p className="text-xl text-fes-blue font-semibold mb-4">
                  {country.tagline}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {country.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Statistics Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
          >
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <GraduationCap className="w-8 h-8 text-fes-blue mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">{details.universities}</div>
              <div className="text-sm text-gray-600">Universities</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <Users className="w-8 h-8 text-fes-blue mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">{details.students}</div>
              <div className="text-sm text-gray-600">Students</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <BookOpen className="w-8 h-8 text-fes-blue mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">{details.programs}</div>
              <div className="text-sm text-gray-600">Programs</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <Star className="w-8 h-8 text-fes-blue mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">{details.satisfaction}</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h2>
              <ul className="space-y-4">
                {details.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-fes-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Cost Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 text-fes-blue mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">Tuition Fees</div>
                    <div className="text-gray-600">{details.costs.tuition}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-fes-blue mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">Living Costs</div>
                    <div className="text-gray-600">{details.costs.living}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Universities and Programs */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Top Universities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Universities</h2>
              <ul className="space-y-3">
                {details.topUniversities.map((university, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-fes-blue/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-fes-blue font-semibold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{university}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Popular Programs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Programs</h2>
              <div className="grid grid-cols-2 gap-3">
                {details.popularPrograms.map((program, index) => (
                  <div key={index} className="bg-fes-blue/5 rounded-lg p-3 text-center">
                    <span className="text-gray-700 text-sm font-medium">{program}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-fes-blue to-fes-deep rounded-2xl p-8 text-white text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="mb-6 opacity-90">
              Get personalized guidance for studying in {country.name}. Our experts are here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/course-finder')}
                className="px-6 py-3 bg-white text-fes-blue rounded-full hover:bg-gray-100 transition-colors duration-300 font-semibold"
              >
                Find Courses
              </button>
              <button
                onClick={() => navigate('/book-session')}
                className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300 font-semibold"
              >
                Book Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
