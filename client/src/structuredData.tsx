import React from "react";

export const StructuredData: React.FC = () => {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Riccardo Rizzo",
    url: "https://www.riccardorizzo.eu",
    image: "https://www.riccardorizzo.eu/images/riky_squared.jpg",
    sameAs: [
      "https://github.com/riccione83",
      "https://www.linkedin.com/in/rikyrizzo/",
      "https://x.com/riccione83",
      "https://www.facebook.com/riccione83",
    ],
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Togather",
    },
    description:
      "Software engineer specialising in web development and cloud architecture with over 5 years of experience.",
    knowsAbout: [
      "Web Development",
      "React",
      "TypeScript",
      "Node.js",
      "Cloud Architecture",
      "AWS",
      "Google Cloud",
      "Engineering Management",
      "Team Leadership",
      "iOS Development",
      "Swift",
      "System Architecture",
      "Agile Methodologies",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Milan",
    },
    seeks: {
      "@type": "JobPosting",
      description:
        "Seeking opportunities in software engineering leadership, technical management, or senior developer roles.",
    },
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "AWS",
      "Google Cloud",
      "iOS Development",
      "Swift",
      "Engineering Management",
      "Team Leadership",
      "System Architecture",
      "Agile Methodologies",
      "Cloud Architecture",
      "CI/CD",
      "Product Development",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Computer Science",
        educationalLevel: "Graduate",
        recognizedBy: {
          "@type": "CollegeOrUniversity",
          name: "University of Milan",
        },
      },
    ],
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "Technical Lead",
        occupationLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressCountry: "Italy",
          },
        },
        skills:
          "React, TypeScript, Node.js, AWS, Team Leadership, Agile, CI/CD, System Architecture",
        description:
          "Leading technical development and engineering teams for web and cloud applications.",
      },
    ],
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://www.riccardorizzo.eu",
    name: "Riccardo Rizzo | Software Engineer",
    description:
      "Personal website of Riccardo Rizzo, a software engineer specialising in web development and cloud architecture.",
    author: {
      "@type": "Person",
      name: "Riccardo Rizzo",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.riccardorizzo.eu/#search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  // Add professional portfolio data
  const portfolioData = {
    "@context": "https://schema.org",
    "@type": "Collection",
    name: "Riccardo Rizzo's Professional Portfolio",
    description:
      "A collection of professional work, projects, and publications by Riccardo Rizzo",
    url: "https://www.riccardorizzo.eu/#portfolio",
    itemListElement: [
      {
        "@type": "Book",
        name: "La Sicurezza Informatica",
        author: {
          "@type": "Person",
          name: "Riccardo Rizzo",
        },
        url: "https://www.amazon.co.uk/Sicurezza-Informatica-Riccardo/dp/8826491836/",
        datePublished: "2017-10-25",
      },
      {
        "@type": "Book",
        name: "Intelligenza Artificiale",
        author: {
          "@type": "Person",
          name: "Riccardo Rizzo",
        },
        url: "https://www.amazon.co.uk/Intelligenza-Artificiale-Riccardo-Rizzo/dp/8822899202/",
        datePublished: "2017-11-04",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(personData)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteData)}</script>
      <script type="application/ld+json">
        {JSON.stringify(portfolioData)}
      </script>
    </>
  );
};

export default StructuredData;
