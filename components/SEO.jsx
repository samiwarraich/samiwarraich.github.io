import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import { seoData } from "../portfolio";

function SEO() {
  return (
    <Head>
      {/* Settings */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Search Engines */}
      <meta name="robots" content="all" />
      <meta
        name="google-site-verification"
        content="ELB_vUPdHzKluiiPGhpV3ORRmCo1ogHoTYwRMp6Bm54"
      />
      <meta name="msvalidate.01" content="DD992E9CC85A0E458EA3599D0526C78A" />
      <meta name="msnbot" content="preview"></meta>
      <link rel="manifest" href="/manifest.json" />
      <link rel="canonical" href={seoData.url} />

      {/* Page Information */}
      <title lang="en-US">{seoData.title}</title>
      <meta name="title" content={seoData.title} />
      <meta name="description" content={seoData.description} />
      <meta name="author" content={seoData.author} />
      <meta name="keywords" content={seoData.keywords.join(", ")} />

      {/* For Google */}
      <meta itemProp="name" content={seoData.title} />
      <meta itemProp="description" content={seoData.description} />
      <meta itemProp="image" content={seoData.image} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoData.url} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:image" content={seoData.image} />
      <meta property="og:site_name" content={seoData.title} />
      <meta property="og:see_also" content={seoData.url} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoData.url} />
      <meta property="twitter:title" content={seoData.title} />
      <meta property="twitter:description" content={seoData.description} />
      <meta property="twitter:image" content={seoData.image} />

      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="120x120" href="./favicon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="./favicon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="./favicon.png" />
    </Head>
  );
}

SEO.prototype = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default SEO;
