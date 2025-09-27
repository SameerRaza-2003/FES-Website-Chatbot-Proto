// SEO data configurations for different pages
export const seoConfig = {
  home: {
    title: "FES Consultancy - Study Abroad Education Consultants",
    description: "Expert education consultancy services for studying abroad. Get personalized guidance for university applications, visa assistance, and career counseling for UK, USA, Canada, Australia and more.",
    keywords: "study abroad, education consultancy, university applications, student visa, overseas education, study in UK, study in USA, study in Canada, study in Australia, education consultant near me",
    url: "/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "FES Consultancy",
      "description": "Expert education consultancy services for studying abroad",
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
    title: "Education Consultancy Services - FES Consultancy",
    description: "Comprehensive education consultancy services including university selection, application assistance, visa guidance, scholarship advice, and career counseling for international students.",
    keywords: "education consultancy services, university applications, student visa assistance, scholarship guidance, career counseling, study abroad services",
    url: "/services",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Education Consultancy Services",
      "provider": {
        "@type": "Organization",
        "name": "FES Consultancy"
      },
      "description": "Comprehensive education consultancy services for international students",
      "serviceType": "Educational Consulting"
    }
  },

  about: {
    title: "About FES Consultancy - Expert Education Consultants",
    description: "Learn about FES Consultancy's mission to help students achieve their international education dreams. Our experienced team provides personalized guidance for studying abroad.",
    keywords: "about FES consultancy, education consultants, study abroad experts, international education guidance, student counseling team",
    url: "/about"
  },

  contact: {
    title: "Contact FES Consultancy - Get Expert Education Guidance",
    description: "Contact FES Consultancy for personalized education consultancy services. Book a consultation to discuss your study abroad plans and get expert guidance.",
    keywords: "contact education consultant, study abroad consultation, book appointment, education guidance, international student services",
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
    title: "Study in UK - Universities, Costs & Applications | FES Consultancy",
    description: "Complete guide to studying in the UK. Explore top universities, application processes, costs, scholarships, and visa requirements. Get expert guidance from FES Consultancy.",
    keywords: "study in UK, UK universities, British education, UK student visa, study in England, UK university applications, scholarships UK"
  },
  usa: {
    title: "Study in USA - Top Universities & Application Guide | FES Consultancy",
    description: "Discover opportunities to study in the USA. Learn about top American universities, application requirements, costs, scholarships, and F-1 visa process.",
    keywords: "study in USA, American universities, US education, F1 visa, study in America, US university applications, scholarships USA"
  },
  canada: {
    title: "Study in Canada - Universities, Immigration & Costs | FES Consultancy",
    description: "Your complete guide to studying in Canada. Explore Canadian universities, immigration pathways, costs, scholarships, and post-graduation work opportunities.",
    keywords: "study in Canada, Canadian universities, Canada education, study permit, Canadian immigration, scholarships Canada"
  },
  australia: {
    title: "Study in Australia - Universities & Student Visa Guide | FES Consultancy",
    description: "Everything you need to know about studying in Australia. Top universities, application process, student visa requirements, costs, and post-study work options.",
    keywords: "study in Australia, Australian universities, Australia education, student visa Australia, scholarships Australia"
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
