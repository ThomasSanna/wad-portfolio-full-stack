import React, { useEffect, useState } from "react";
import Header from "../components/Header.js";
import "../styles/Contact.css";
import "../styles/reset.css";
import logowad from "../utilities/imgs/logowad.png";
import linkedin from "../utilities/imgs/linkedin-svgrepo-com.svg";
import github from "../utilities/imgs/github-142-svgrepo-com.svg";
import twitter from "../utilities/imgs/twitter-svgrepo-com.svg";

function Contact() {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    document.title = "WadeeKT - Contact Me";
  });

  return (
    <div className={`b-contact ${isMounted ? "b-contact-enter" : ""}`}>
      <Header />
      <div className="page-container contact-container">
        <h1>Contact Me</h1>
        <span className="logo-page-cont">
          <img className="logo-page-wad" src={logowad} alt="Logo WadeeKT" />
        </span>
        <div className="sections">
          <div className="i-reseaux-cont-cont">
            <div className="i-reseaux-cont">
              <a
                title="My GitHub !"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/WadeeKT"
              >
                <img className="i-reseaux i-github" src={github} alt="github profil" />
              </a>
              <a
                title="My Twitter !"
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/WadeeKT"
              >
                <img
                  className="i-reseaux i-twitter"
                  src={twitter}
                  alt="twitter profil"
                />
              </a>
              <a
                title="My Linkedin !"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/thomas-sanna-b74600277/"
              >
                <img
                  className="i-reseaux i-linkedin"
                  src={linkedin}
                  alt="linkedin profil"
                />
              </a>
            </div>
            <div className="form-cont">
                <form className="form">
                    <input type="text" id="name" placeholder="Your name" />
                    <input type="email" id="email" placeholder="Your email" />
                    <textarea id="message" placeholder="Your message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
