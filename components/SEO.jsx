import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { seoData } from "../portfolio";

function SEO() {
  const {
    name,
    jobTitle,
    skills,
    author,
    description,
    image,
    url,
    keywords,
    twitter,
    socialLinks,
  } = seoData;
  const title = `${name} | ${jobTitle}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebSite", "ProfilePage"],
    name: name,
    url: url,
    mainEntity: {
      "@type": "Person",
      name: name,
      url: url,
      image: image,
      jobTitle: jobTitle,
      description: description,
      sameAs: Object.values(socialLinks),
      knowsAbout: skills,
    },
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <link rel="canonical" href={url} />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Title and Main Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="application-name" content={name} />
      <meta name="apple-mobile-web-app-title" content={name} />
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <link rel="author" href={url} />
      <meta name="keywords" content={keywords.join(", ")} />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="profile" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitter?.site} />
      <meta name="twitter:creator" content={twitter?.creator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 2),
        }}
      />

      {/* Favicons */}
      <link rel="apple-touch-icon" sizes="180x180" href="./favicon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="./favicon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="./favicon.png" />

      {/* Verification Tags */}
      {/* <meta
        name="google-site-verification"
        content="IGjNdVFWj4etSWkG0ppYttTNrxa7Mz0U08uJq8T48VE"
      /> */}
      <meta
        name="google-site-verification"
        content="ELB_vUPdHzKluiiPGhpV3ORRmCo1ogHoTYwRMp6Bm54"
      />
      <meta name="msvalidate.01" content="DD992E9CC85A0E458EA3599D0526C78A" />
    </Head>
  );
}

SEO.prototype = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    author: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    skills: PropTypes.arrayOf(PropTypes.string),
    twitter: { site: PropTypes.string, creator: PropTypes.string },
    socialLinks: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default SEO;
