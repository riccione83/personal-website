import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";
import EmailLink from "../components/Contact/EmailLink";
import ContactIcons from "../components/Contact/ContactIcons";

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Michael D'Angelo via email @ hi@mldangelo.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>
          <EmailLink />
          Feel free to get in touch. You can email me{" "}
          <a href="mailto:rizzo.riccardo.83@gmail.com">here</a>{" "}
        </p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
