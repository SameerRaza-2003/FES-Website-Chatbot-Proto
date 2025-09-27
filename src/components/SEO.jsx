import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "FES Consultancy - Study Abroad Education Consultants",
  description = "Expert education consultancy services for studying abroad. Get personalized guidance for university applications, visa assistance, and career counseling for UK, USA, Canada, Australia and more.",
  keywords = "study abroad, education consultancy, university applications, student visa, overseas education, study in UK, study in USA, study in Canada, study in Australia",
  image = "/og-image.jpg",
  url = "https://fesmentora.com",
  type = "website",
  author = "FES Consultancy",
  canonical,
  noindex = false,
  structuredData
}) => {
  const siteTitle = "FES Consultancy";
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
