import React from "react";
import Header from "../components/Header.js";
import "../styles/Contact.css";
import "../styles/reset.css";
import logowad from "../utilities/imgs/logowad.png";
import linkedin from "../utilities/imgs/linkedin-svgrepo-com.svg";
import github from "../utilities/imgs/github-142-svgrepo-com.svg";
import twitter from "../utilities/imgs/twitter-svgrepo-com.svg";

function Contact() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha384-e2NqBzzw5b9caQ7e3nKm1RkCdFT+KhO7YMyt+JhzA1aB1g9/AK3OW0h4Sx9w9BrB"
        crossorigin="anonymous"
      />
      <Header />
      <div className="page-container">
        <h1>Contact Me</h1>
        <span className="logo-page-cont">
          <img className="logo-page-wad" src={logowad} alt="Logo WadeeKT" />
        </span>
        <div className="sections">
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
  );
}

export default Contact;
