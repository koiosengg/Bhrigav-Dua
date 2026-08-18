import { useEffect } from "react";

/**
 * JsonLdScript — injects JSON-LD schema into <head> (not the render tree).
 */
export const JsonLdScript = ({ data }) => {
  const json = JSON.stringify(data);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = json;
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, [json]);

  return null;
};

// ─── Schema constants ────────────────────────────────────────────────────────
const BASE_URL = "https://www.bhrigavdua.com";
const PERSON_NAME = "Bhrigav Dua";
const LOGO_URL = `${BASE_URL}/favicon.svg`;

// ─── Person / Organization Schema ───────────────────────────────────────────
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": PERSON_NAME,
  "url": BASE_URL,
  "image": LOGO_URL,
  "description": "Crafting visuals for films, commercials & digital content. Combining technical expertise with visual direction to elevate storytelling across formats.",
  "jobTitle": "Cinematographer & Film Producer",
  "worksFor": { "@type": "Organization", "name": "Freelance" },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.instagram.com/bhrigavdua",
    "https://www.linkedin.com/in/bhrigav-dua"
  ]
};

export const cinematographerPersonSchema = {
  ...personSchema,
  "description": "Cinematographer. Crafting visuals for films, commercials & digital content. Combining technical expertise with visual direction to elevate storytelling across formats.",
  "jobTitle": "Cinematographer"
};

export const producerPersonSchema = {
  ...personSchema,
  "description": "Producer. End-to-end production for films, commercials & digital content. Delivering reliable, creative production for brands, agencies & filmmakers.",
  "jobTitle": "Film Producer"
};

// ─── WebSite Schema ──────────────────────────────────────────────────────────
export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": PERSON_NAME,
  "url": BASE_URL,
  "publisher": {
    "@type": "Person",
    "name": PERSON_NAME
  }
};

// ─── Breadcrumb helper ───────────────────────────────────────────────────────
export const getBreadcrumbSchema = (pageName, pagePath) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
    { "@type": "ListItem", "position": 2, "name": pageName, "item": `${BASE_URL}${pagePath}` }
  ]
});

// ─── Page-level bundles ──────────────────────────────────────────────────────
export const HomePageStructuredData = () => (
  <>
    <JsonLdScript data={personSchema} />
    <JsonLdScript data={webSiteSchema} />
  </>
);

export const CinematographyPageStructuredData = () => (
  <>
    <JsonLdScript data={cinematographerPersonSchema} />
    <JsonLdScript data={getBreadcrumbSchema("Cinematographer", "/cinematographer")} />
  </>
);

export const ProducerPageStructuredData = () => (
  <>
    <JsonLdScript data={producerPersonSchema} />
    <JsonLdScript data={getBreadcrumbSchema("Producer", "/producer")} />
  </>
);

export const WorkPageStructuredData = () => (
  <>
    <JsonLdScript data={cinematographerPersonSchema} />
    <JsonLdScript data={getBreadcrumbSchema("Work", "/cinematographer/work")} />
  </>
);
