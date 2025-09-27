// SEO data configurations for different pages
export const seoConfig = {
  home: {
    title: "FES Higher Education Consultants - Study Overseas | FES Mentora",
    description: "FES Higher Education Consultants providing excellent overseas education consultancy services. Expert guidance for university applications, student visa assistance, and career counseling worldwide.",
    keywords: "higher education consultants, study overseas, overseas education services, professional education consultants, student visa assistance, career counseling, admission guidance, study abroad consultancy, international education, education consultants",
    url: "/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "FES Higher Education Consultants",
      "description": "Professional overseas education consultancy services providing excellent guidance for international students",
      "url": "https://fesmentora.com",
      "logo": "https://fesmentora.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-XXX-XXX-XXXX",
        "contactType": "Customer Service",
        "availableLanguage": ["English"]
      },
      "sameAs": [
        "https://facebook.com/fesmentora",
        "https://instagram.com/fesmentora",
        "https://linkedin.com/company/fesmentora"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "service": {
        "@type": "Service",
        "name": "Education Consultancy Services",
        "description": "University applications, visa assistance, career counseling for international students"
      }
    }
  },

  countries: {
    title: "Study Abroad Countries - FES Consultancy",
    description: "Explore top study destinations including UK, USA, Canada, Australia, Germany, Netherlands and more. Get expert guidance on universities, costs, and application processes.",
    keywords: "study abroad countries, international education, study destinations, overseas universities, global education opportunities",
    url: "/countries",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Study Abroad Countries",
      "description": "Comprehensive guide to study abroad destinations",
      "url": "https://fesmentora.com/countries"
    }
  },

  services: {
    title: "Overseas Education Services - Professional Education Consultants | FES Mentora",
    description: "Complete overseas education services by professional education consultants. Career counseling, admission guidance, student visa assistance, pre-departure orientation, and post-departure support.",
    keywords: "overseas education services, professional education consultants, career counseling, admission guidance, student visa assistance, pre departure orientation, post departure support, appeals and review, medical requirements, IELTS TOEFL classes",
    url: "/services",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Overseas Education Services",
      "provider": {
        "@type": "Organization",
        "name": "FES Higher Education Consultants"
      },
      "description": "Professional overseas education services including career counseling, admission guidance, student visa assistance, and pre-departure orientation",
      "serviceType": "Higher Education Consulting"
    }
  },

  about: {
    title: "About FES Consultancy - Expert Education Consultants",
    description: "Learn about FES Consultancy's mission to help students achieve their international education dreams. Our experienced team provides personalized guidance for studying abroad.",
    keywords: "about FES consultancy, education consultants, study abroad experts, international education guidance, student counseling team",
    url: "/about"
  },

  contact: {
    title: "Contact FES Higher Education Consultants - Book Consultation | FES Mentora",
    description: "Contact FES Higher Education Consultants for personalized overseas education services. Book a consultation with our professional education consultants for expert guidance.",
    keywords: "contact education consultants, higher education consultants, book consultation, overseas education consultation, professional education guidance, student counseling services",
    url: "/contact",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact FES Consultancy",
      "description": "Get in touch with our education consultancy experts"
    }
  }
};

// Country-specific SEO data
export const countrySEOData = {
  uk: {
    title: "Study in UK - Higher Education Consultants | FES Mentora",
    description: "Study in UK with FES Higher Education Consultants. Expert guidance for UK universities, student visa assistance, admission guidance, and career counseling for British education.",
    keywords: "study in UK, UK higher education, UK student visa assistance, UK university admission guidance, study overseas UK, British higher education consultants, UK education services"
  },
  usa: {
    title: "Study in USA - Overseas Education Services | FES Mentora",
    description: "Study in USA with professional education consultants. Complete guidance for American universities, F-1 student visa assistance, admission guidance, and career counseling.",
    keywords: "study in USA, USA overseas education, F1 student visa assistance, American university admission guidance, USA higher education consultants, study overseas America"
  },
  canada: {
    title: "Study in Canada - Higher Education Consultants | FES Mentora",
    description: "Study in Canada with FES Higher Education Consultants. Expert guidance for Canadian universities, study permit assistance, immigration pathways, and career counseling.",
    keywords: "study in Canada, Canada higher education, study permit assistance, Canadian university admission guidance, Canada overseas education services, Canadian immigration guidance"
  },
  australia: {
    title: "Study in Australia - Professional Education Consultants | FES Mentora",
    description: "Study in Australia with professional education consultants. Complete guidance for Australian universities, student visa assistance, admission guidance, and post-study work options.",
    keywords: "study in Australia, Australia overseas education, Australian student visa assistance, Australia university admission guidance, Australia higher education consultants, study overseas Australia"
  },
  germany: {
    title: "Study in Germany - Free Education & Top Universities | FES Consultancy",
    description: "Discover free and low-cost education opportunities in Germany. Learn about German universities, application processes, language requirements, and student life.",
    keywords: "study in Germany, German universities, free education Germany, Germany student visa, scholarships Germany"
  },
  netherlands: {
    title: "Study in Netherlands - Dutch Universities Guide | FES Consultancy",
    description: "Explore study opportunities in the Netherlands. Top Dutch universities, application requirements, costs, scholarships, and student visa information.",
    keywords: "study in Netherlands, Dutch universities, Netherlands education, Holland universities, scholarships Netherlands"
  }
};

// Generate structured data for country pages
export const generateCountryStructuredData = (country) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": `Study in ${country.name}`,
  "description": `Complete guide to studying in ${country.name}`,
  "url": `https://fesmentora.com/countries/${country.slug}`,
  "about": {
    "@type": "Place",
    "name": country.name,
    "description": `Education opportunities in ${country.name}`
  }
});
