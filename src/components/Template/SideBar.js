import React from "react";
import { Link } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/riky_squared.jpg`} alt="" />
      </Link>
      <header>
        <h2>Riccardo Rizzo</h2>
        <p>
          <a href="mailto:rizzo.riccardo.83@gmail.com">Email me</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Riccardo. I am a engineering manager and tech enthusiast.
        Worked with mobile appications, frontend and backend.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes("/resume") ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Riccardo Rizzo <Link to="/">riccardorizzo.eu</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
