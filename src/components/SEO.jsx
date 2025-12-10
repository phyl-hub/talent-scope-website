import React from 'react';
import { Helmet } from 'react-helmet-async';

const siteUrl = 'https://talent-scope.io';
const defaultImage = `${siteUrl}/images/high-energy-sdr-team.jpg`;

export default function SEO({
  title = 'Hire Solar Appointment Setters | Remote Solar Sales Staffing | Talent Scope',
  description = 'Hire pre-vetted solar appointment setters and remote solar sales reps. AI-vetted D2D veterans weekly. Flat $1k/mo solar staffing for dealers. Watch Zoom recordings, book instantly.',
  path = '/',
  image = defaultImage,
  type = 'website',
  keywords = 'solar appointment setters, remote solar sales reps, D2D solar sales, virtual solar sales team, solar setter recruitment, hire solar setters, solar sales staffing, AI-vetted solar talent, solar telesales, solar dealer staffing',
  jsonLd = null,
}) {
  const url = `${siteUrl}${path}`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Talent Scope" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Talent Scope" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* PWA / Colors */}
      <meta name="theme-color" content="#0f172a" />

      {/* Additional SEO meta tags */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="language" content="English" />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
