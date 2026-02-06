import React from "react";

export const PersonSchema = () => {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Riccardo Rizzo",
    url: "https://www.riccardorizzo.eu",
    image: "https://www.riccardorizzo.eu/images/riky_squared.jpg",
    email: "mailto:rizzo.riccardo.83@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/rikyrizzo/",
      "https://github.com/riccione83",
      "https://x.com/riccione83",
    ],
    jobTitle: "Engineering Manager",
    worksFor: {
      "@type": "Organization",
      name: "Togather",
      url: "https://www.togather.com",
    },
    description:
      "Engineering Manager and Technical Lead specialised in web development, cloud architecture, and high-performing engineering teams.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "UK",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
    />
  );
};

export const WebSiteSchema = () => {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Riccardo Rizzo",
    url: "https://www.riccardorizzo.eu",
    inLanguage: "en-GB",
    description:
      "Personal website of Riccardo Rizzo, Engineering Manager and Technical Lead focused on product delivery and team growth.",
    publisher: {
      "@type": "Person",
      name: "Riccardo Rizzo",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
    />
  );
};

export default function StructuredData() {
  return (
    <>
      <PersonSchema />
      <WebSiteSchema />
    </>
  );
}
