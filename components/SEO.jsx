import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { seoData } from "../portfolio";

function SEO() {
  const { title, author, description, image, url, keywords, twitter } = seoData;
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
      <meta name="msnbot" content="preview" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="canonical" href={url} />

      {/* Page Information */}
      <title lang="en-US">{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <link name="author" content={url} />
      <meta name="keywords" content={keywords.join(", ")} />

      {/* For Google */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={twitter?.site} />
      <meta name="twitter:creator" content={twitter?.creator} />
      <meta name="twitter:image" content={image} />

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
    twitter: { site: PropTypes.string, creator: PropTypes.string },
  }).isRequired,
};

export default SEO;
