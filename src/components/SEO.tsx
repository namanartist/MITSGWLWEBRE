import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description = "Madhav Institute of Technology & Science (MITS), Gwalior is a premier engineering institution in India, offering UG, PG, and Doctoral programs.",
  canonical,
  ogType = "website",
  ogImage = "https://web.mitsgwalior.in/images/mits_logo.png",
  keywords = "MITS Gwalior, Engineering College, Gwalior, B.Tech, M.Tech, Ph.D, Education, Technology, Science"
}) => {
  const siteTitle = "MITS Gwalior";
  const fullTitle = `${title} | ${siteTitle}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};
