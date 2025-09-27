import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { countries } from '../data/countries'
import { countryDetails } from '../data/countryDetails'
import SEO from '../components/SEO'
import { countrySEOData, generateCountryStructuredData } from '../data/seoData'
import { ActionButtonGroup } from '../components/ActionButtons'
import { 
  StatsGrid, 
  InfoCard, 
  HighlightsList, 
  CostInfo, 
  UniversitiesList, 
  ProgramsGrid 
} from '../components/InfoCards'

export default function CountryDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [country, setCountry] = useState(null)
  const [details, setDetails] = useState(null)

  useEffect(() => {
    // Scroll to top when component mounts or slug changes
    window.scrollTo(0, 0)
    
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

  const seoData = countrySEOData[slug] || {
    title: `Study in ${country.name} - Universities & Guide | FES Consultancy`,
    description: `Complete guide to studying in ${country.name}. Learn about universities, application processes, costs, scholarships, and visa requirements.`,
    keywords: `study in ${country.name}, ${country.name} universities, ${country.name} education, student visa ${country.name}`
  }

  return (
    <>
      <SEO 
        {...seoData}
        url={`/countries/${slug}`}
        structuredData={generateCountryStructuredData(country)}
      />
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
          <StatsGrid stats={details} className="mb-8" />

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <InfoCard 
              title="Key Highlights" 
              delay={0.4} 
              direction={-1}
            >
              <HighlightsList highlights={details.highlights} />
            </InfoCard>

            <InfoCard 
              title="Cost Information" 
              delay={0.4} 
              direction={1}
            >
              <CostInfo costs={details.costs} />
            </InfoCard>
          </div>

          {/* Universities and Programs */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <InfoCard 
              title="Top Universities" 
              delay={0.6}
            >
              <UniversitiesList universities={details.topUniversities} />
            </InfoCard>

            <InfoCard 
              title="Popular Programs" 
              delay={0.6}
            >
              <ProgramsGrid programs={details.popularPrograms} />
            </InfoCard>
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
            <ActionButtonGroup 
              courseTitle="Find Courses"
              bookTitle="Book Consultation"
              showAI={false}
              size="medium"
              layout="horizontal"
            />
          </motion.div>
        </div>
      </div>
    </div>
    </>
  )
}
