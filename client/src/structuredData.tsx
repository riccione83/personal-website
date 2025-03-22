import React from "react";

// Organization schema for your personal brand
export const OrganizationSchema = () => {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Riccardo Rizzo",
    url: "https://www.riccardorizzo.eu",
    image: "https://www.riccardorizzo.eu/images/riky_squared.jpg",
    sameAs: [
      "https://www.linkedin.com/in/riccardorizzo/",
      "https://github.com/rrizzo",
    ],
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Tech Industry",
    },
    description:
      "Software engineer specialising in web development and cloud architecture, building modern and scalable applications.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
    />
  );
};

// Job posting schema for career opportunities
export const JobPostingSchema = () => {
  const today = new Date();
  const sixMonthsFromNow = new Date();
  sixMonthsFromNow.setMonth(today.getMonth() + 6);

  const jobData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Engineering Leadership - CTO, Engineering Manager, Co-founder",
    description:
      "Open to opportunities in high-impact engineering leadership roles including CTO, VP of Engineering, Engineering Manager, or technical Co-founder positions. Offering extensive experience in scaling engineering teams, implementing robust technical architectures, and driving product innovation.",
    datePosted: today.toISOString().split("T")[0],
    validThrough: sixMonthsFromNow.toISOString().split("T")[0],
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "Open to Opportunities",
      sameAs: "https://www.riccardorizzo.eu",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "United Kingdom",
        addressLocality: "London",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "GBP",
      value: {
        "@type": "QuantitativeValue",
        minValue: 120000,
        maxValue: 180000,
        unitText: "YEAR",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jobData) }}
    />
  );
};

// Default export for all structured data
export default function StructuredData() {
  return (
    <>
      <OrganizationSchema />
      <JobPostingSchema />
    </>
  );
}
