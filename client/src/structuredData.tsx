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
      "Software engineer specialising in web development and cloud architecture, building modern and scalable applications.",
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
            addressCountry: "United Kingdom",
          },
        },
        skills:
          "React, TypeScript, Node.js, AWS, Team Leadership, Agile, CI/CD, System Architecture",
        description:
          "Leading technical development and engineering teams for web and cloud applications.",
      },
    ],
    workExperience: [
      {
        "@type": "WorkPosition",
        name: "Technical Lead",
        worksFor: {
          "@type": "Organization",
          name: "Togather",
          url: "https://www.togather.com",
        },
        startDate: "2024-05-01",
        description:
          "Togather provides a cutting-edge platform that revolutionises the way people connect and collaborate for events. Combining advanced technology with user-friendly design, Togather streamlines the planning process, enabling users to easily organise and promote events while fostering meaningful connections.",
        skills:
          "React, TypeScript, Node.js, AWS, Team Leadership, Agile, CI/CD, System Architecture",
        responsibilities: [
          "Spearheaded the development and optimisation of the Togather platform",
          "Drove team growth and development, fostering a culture of innovation",
          "Led recruitment and onboarding processes for technical talent",
          "Provided technical insights for product development",
          "Mentored team members for continuous learning and professional development",
        ],
      },
      {
        "@type": "WorkPosition",
        name: "Engineering Manager",
        worksFor: {
          "@type": "Organization",
          name: "MachineMax Ltd",
          url: "https://www.machinemax.com",
        },
        startDate: "2018-09-01",
        endDate: "2024-04-01",
        description:
          "MachineMax offers a unique and innovative solution that helps businesses manage their heavy equipment more efficiently. The solution combines IoT sensors, machine learning algorithms, and a cloud-based platform to provide real-time insights into machine utilisation, maintenance, and performance.",
        skills:
          "React, TypeScript, IoT, Cloud Architecture, Engineering Management, Agile, Product Development, Team Scaling",
        responsibilities: [
          "Scaled the engineering team from 4 to 18 members",
          "Implemented a modern React architecture that improved application performance by 40%",
          "Contributed to the selection and onboarding of a new CTO",
          "Participated in product development and design phases",
          "Led mentorship and professional development initiatives",
        ],
      },
      {
        "@type": "WorkPosition",
        name: "Freelance iOS Developer and Book Author",
        startDate: "2014-03-01",
        endDate: "2018-08-01",
        description:
          "Independent software developer specialising in iOS applications and technical author with published works on Artificial Intelligence and Computer Security.",
        skills:
          "Swift, Objective-C, iOS Development, Ruby on Rails, Technical Writing, Windows Development, C#",
        responsibilities: [
          "Developed multiple commercial iOS applications with a combined user base of over 50,000",
          "Authored two technical books on Artificial Intelligence and Computer Security",
          "Contributed articles on Swift Development to various websites",
          "Maintained an active GitHub account with numerous personal projects",
        ],
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
