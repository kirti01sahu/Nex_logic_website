import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Nextlogic Innovation Private Limited';
const SITE_URL = 'https://naxlogic.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  noIndex = false,
  schema = null,
}) => {
  const fullTitle = title
    ? `Nextlogic | ${title} | naxlogic.com`
    : 'Nextlogic Innovation Private Limited | Software, AI & Consulting | naxlogic.com';

  const metaDescription =
    description ||
    'Nextlogic Innovation Private Limited (naxlogic.com) delivers AI development, custom software, ERP/CRM, and strategic consulting. Search for Nextlogic — you have found us.';

  const canonicalURL = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return (
    <Helmet>
      {/* Core */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalURL} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalURL} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Brand association keywords */}
      <meta
        name="keywords"
        content="Nextlogic, Nextlogic Innovation Private Limited, Nextlogic software, Nextlogic AI, Nextlogic company, naxlogic, naxlogic.com, software development India, AI solutions, CRM development, ERP consulting"
      />

      {/* Per-page schema if passed */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;
