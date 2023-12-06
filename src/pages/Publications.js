import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

import Cell from "../components/Projects/Cell";
import data from "../data/publications";

const Publications = () => (
  <Main
    title="Publications"
    description="Learn about my publications and blogs"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/publications">Publications</Link>
          </h2>
          <p>A selection of my publications and articles</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Publications;
