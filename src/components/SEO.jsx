import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "FES Higher Education Consultants - Study Overseas | FES Mentora",
  description = "Professional overseas education consultancy services by FES Higher Education Consultants. Expert guidance for university applications, student visa assistance, career counseling, and admission guidance worldwide.",
  keywords = "higher education consultants, study overseas, overseas education services, professional education consultants, student visa assistance, career counseling, admission guidance, international education",
  image = "/og-image.jpg",
  url = "https://fesmentora.com",
  type = "website",
  author = "FES Higher Education Consultants",
  canonical,
  noindex = false,
  structuredData
}) => {
  const siteTitle = "FES Mentora";
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;
  const fullUrl = url.startsWith('http') ? url : `https://fesmentora.com${url}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@fesconsultancy" />
      <meta name="twitter:creator" content="@fesconsultancy" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
