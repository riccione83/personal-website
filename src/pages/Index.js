import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";
import WelcomeMessage from "../components/Contact/WelcomeMessage";

const Index = () => (
  <Main
    description={
      "Riccardo's personal website. London based, " +
      "I'm a seasoned Engineering Manager with a strong track record in web, mobile, and backend applications. Proficient in React, Typescript, Go, and Node.js, I bring expertise in diverse programming languages. My hands-on experience with GCP and AWS cloud infrastructure complements my skills. People management, team mentorship, and recruitment experience define my leadership style."
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">
              <WelcomeMessage />
            </Link>
          </h2>
          <p>
            I&lsquo;m a seasoned Engineering Manager with a strong track record
            in web, mobile, and backend applications. Proficient in React,
            Typescript, Go, and Node.js, I bring expertise in diverse
            programming languages. My hands-on experience with GCP and AWS cloud
            infrastructure complements my skills. People management, team
            mentorship, and recruitment experience define my leadership style.
          </p>
        </div>
      </header>
      <p>
        {" "}
        Welcome to my website. Please feel free to read more{" "}
        <Link to="/about">about me</Link>, or you can check out my{" "}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{" "}
        <Link to="/publications">publications</Link> or{" "}
        <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
