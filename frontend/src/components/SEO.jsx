import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import {
  SEO_DEFAULTS,
  SEO_PAGES,
  SITE_NAME,
  SITE_URL,
  getCaseSEO,
  getInsightSEO,
  CORE_KEYWORDS,
} from "../data/seo";

/**
 * Per-page SEO component.
 * Renders <title>, meta description, Open Graph, Twitter card, canonical URL,
 * and optional JSON-LD structured data.
 *
 * Resolves SEO data automatically from the current pathname unless explicit
 * props are passed.
 */
export default function SEO(props = {}) {
  const { pathname } = useLocation();
  const fromPath = resolveSEOForPath(pathname);
  const merged = { ...SEO_DEFAULTS, ...fromPath, ...props };

  const {
    title,
    description,
    image,
    type = "website",
    keywords,
    noindex = false,
    article,
    schema, // optional extra JSON-LD payload
  } = merged;

  const finalTitle = title || `${SITE_NAME} — Capital · Strategy · Sustainability`;
  const finalDescription = description || SEO_DEFAULTS.description;
  const canonical = `${SITE_URL}${pathname}`;
  const ogImage = image || SEO_DEFAULTS.image;
  const kwString = (keywords || CORE_KEYWORDS).join(", ");

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={kwString} />
      {noindex ? <meta name="robots" content="noindex,nofollow" /> : <meta name="robots" content="index,follow,max-image-preview:large" />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@datapoolwaters" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Article-specific tags */}
      {type === "article" && article?.datePublished && (
        <meta property="article:published_time" content={article.datePublished} />
      )}
      {type === "article" && article?.author && (
        <meta property="article:author" content={article.author} />
      )}

      {/* JSON-LD Article structured data */}
      {type === "article" && article && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.headline,
            description: finalDescription,
            image: article.image || ogImage,
            datePublished: article.datePublished,
            author: {
              "@type": "Organization",
              name: article.author || SITE_NAME,
              url: SITE_URL,
            },
            publisher: {
              "@type": "Organization",
              name: SITE_NAME,
              logo: { "@type": "ImageObject", url: `${SITE_URL}/assets/dpw-horizontal.svg` },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
            keywords: kwString,
          })}
        </script>
      )}

      {/* Optional custom JSON-LD payload (e.g. Organization, BreadcrumbList) */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}

// Resolve SEO config for a path, handling dynamic routes.
function resolveSEOForPath(pathname) {
  if (SEO_PAGES[pathname]) return SEO_PAGES[pathname];

  // /success-stories/:slug
  const caseMatch = pathname.match(/^\/success-stories\/([^/]+)$/);
  if (caseMatch) return getCaseSEO(caseMatch[1]) || {};

  // /insights/:slug
  const insightMatch = pathname.match(/^\/insights\/([^/]+)$/);
  if (insightMatch) return getInsightSEO(insightMatch[1]) || {};

  return {};
}
