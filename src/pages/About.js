import Header from "../components/Header.js";
import React from "react";
import "../styles/About.css";
import "../styles/reset.css";
import logowad from "../utilities/imgs/logowad.png";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div>
      <Header />
      <div className="page-container">
        <h1>About Me</h1>
        <span className="logo-page-cont">
          <img className="logo-page-wad" src={logowad} alt="Logo WadeeKT" />
        </span>
        <div className="about-container">
          <section className="presentation-section sections">
            <div className="div-title-section">
              <h2 className="title-section">Presentation</h2>{" "}
            </div>
            <div className="bio">
              <h3>SANNA (WadeeKT) Thomas</h3>
              <p>
                I am a passionate front-end web developer with nearly a year of
                experience in the field. My goal is to create exceptional online
                experiences using the latest technologies.
              </p>
              <p>
                I have expertise in programming languages such as HTML,
                JavaScript, CSS, as well as frameworks like React, Vue.js, and
                Sass. I also have skills in PHP, MySQL, and Python. I have even
                explored the world of Lisp.
              </p>
              <p>
                As a freelance developer, I pay great attention to my clients'
                expectations. I listen to their needs, ensure a clear
                understanding of their objectives, and work closely with them to
                deliver customized solutions that meet their requirements.
              </p>
              <p>
                One of my strengths lies in my mastery of color theory, allowing
                me to create visually appealing and harmonious designs. You can
                explore some of my work on my{" "}
                <NavLink className="liens" to="/portfolio">
                  Portfolio page
                </NavLink>
                .
              </p>
            </div>
          </section>
        </div>
        <NavLink to="/contact">
          <section className="contact-section sections">
            <div className="div-title-section">
              <h2 className="title-section">Contact</h2>
            </div>

            <div className="contact">
              <div className="contact-info">
                <p>
                  <span className="bold">Email :</span>{" "}
                  <a className="liens" href="mailto:thomassanna1e@gmail.com">
                    thomassanna1e@gmail.com
                  </a>
                </p>
                <p>
                  <span className="bold">Phone :</span>{" "}
                  <a className="liens" href="tel:+336 67 38 13 35">
                    +33 6 67 38 13 35
                  </a>
                </p>
                <p>
                  <span className="bold">Location :</span> Ajaccio, Corsica,
                  France
                </p>
                <p className="liens-cont">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="bold liens"
                    href="https://github.com/wadeekt"
                  >
                    GitHub
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="bold liens"
                    href="https://www.linkedin.com/in/thomas-sanna-b74600277/"
                  >
                    Linkedin
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="bold liens"
                    href="https://twitter.com/WadeeKT"
                  >
                    Twitter
                  </a>
                </p>
              </div>
            </div>
          </section>
        </NavLink>
      </div>
    </div>
  );
}

export default About;
