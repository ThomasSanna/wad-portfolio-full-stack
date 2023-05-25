import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Home.css";
import "../styles/reset.css";
import background from "../utilities/videos/BackgroundHome.mp4";
import playbutton from "../utilities/imgs/play-button-svgrepo-com.svg";
import pausebutton from "../utilities/imgs/pause-button-svgrepo-com.svg";
import github from "../utilities/imgs/github-142-svgrepo-com.svg";
import linkedin from "../utilities/imgs/linkedin-svgrepo-com.svg";
import twitter from "../utilities/imgs/twitter-svgrepo-com.svg";
import email from "../utilities/imgs/email.svg";
import HeaderHome from "../components/HeaderHome";

function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    document.title = "WadeeKT - Welcome";
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const PlayPauseEvent = () => {
    const video = document.getElementById("VideoHome");
    const button = document.querySelector(".play-pause-button");
    return () => {
      if (video.paused) {
        video.play();
        button.src = playbutton;
      } else {
        video.pause();
        button.src = pausebutton;
      }
    };
  };

  return (
      
    <div className={`home ${isMounted ? "home-enter" : ""}`}>
      <video autoPlay muted loop id="VideoHome">
        <source src={background} type="video/mp4" />
      </video>

      <div className="home-container">
      <HeaderHome />
        <div className="home-card">
          <div className="play-pause-container">
            <img
              onClick={PlayPauseEvent()}
              className="play-pause-button"
              src={playbutton}
              alt=""
            />
          </div>
          <div className="profile-container">
            <NavLink exact to="/about" className="div-image">
              <img
                className="profile-image"
                src="https://avatars.githubusercontent.com/u/78679521?v=4"
                alt=""
              />
            </NavLink>
            <div className="div-name">
              <h1 className="profile-name profile-text">SANNA Thomas</h1>
            </div>
            <div className="div-title">
              <h3 className="profile-title profile-text">
                Web Front-End Developer
              </h3>
            </div>
            <div className="div-button">
              <button className="profile-button" title="Contact me !">
                <a href="mailto:thomassanna1e@gmail.com">Contact me !</a>
              </button>
            </div>
            <div className="div-reseaux">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/WadeeKT"
            >
              <img
                className="reseaux-image github"
                src={github}
                alt="logo github"
                title="My Github !"
              />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/thomas-sanna-b74600277/"
            >
              <img
                className="reseaux-image linkedin"
                src={linkedin}
                alt="logo linkedin"
                title="My Linkedin !"
              />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/WadeeKT"
            >
              <img
                className="reseaux-image twitter"
                src={twitter}
                alt="logo twitter"
                title="My Twitter !"
              />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="mailto:thomassanna1e@gmail.com"
            >
              <img
                className="reseaux-image email"
                src={email}
                alt="logo email"
                title="Contact me !"
              />
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
