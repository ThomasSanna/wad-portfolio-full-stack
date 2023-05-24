import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/HeaderHome.css";
import "../styles/reset.css";
import logowad from "../utilities/imgs/logowad.png";
import linkedin from "../utilities/imgs/linkedin-svgrepo-com.svg";
import github from "../utilities/imgs/github-142-svgrepo-com.svg";
import twitter from "../utilities/imgs/twitter-svgrepo-com.svg";

const HeaderHome = () => {
  useEffect(() => {
    let houvert = false;
    const opening = document.querySelector(".h-opening");
    const menu = document.querySelector(".h-menu-ouvrant");

    opening.addEventListener("click", () => {
      menu.style.right = "0";
      menu.style.animation = "rtol .2s ease forwards";
      menu.style.display = "flex";
      opening.style.opacity = "0";
      houvert = !houvert;
    });

    document.addEventListener("click", (e) => {
      if (houvert) {
        if (
          e.target.className !== "h-premier" &&
          e.target.className !== "h-opening"
        ) {
          menu.style.animation = "ltor .2s ease forwards";
          opening.style.opacity = "1";
          setTimeout(() => {
            menu.style.right = "-49vw";
            menu.style.display = "none";
          }, 200);

          houvert = !houvert;
        }
      }
    });
  });

  return (
    <div className="h-header">
      <div className="h-menu-responsive">
        <div className="h-opening">...</div>
        <div className="h-menu-ouvrant">
          <div className="h-premier">
            <ul className="h-liste-onglets">
              <li>
                <NavLink
                  to="/"
                  activeClassName="active"
                  className="h-menu-texte"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  activeClassName="active"
                  className="h-menu-texte"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  activeClassName="active"
                  className="h-menu-texte"
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  activeClassName="active"
                  className="h-menu-texte"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <NavLink to="/" className="h-image-menu">
              <img
                className="h-logo-menu"
                src={logowad}
                alt="Logo WadeeKT redirige vers Home."
              />
            </NavLink>
          </div>

          <div className="h-sec-int">
            <div className="h-second">
              <a
                title="My GitHub !"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/WadeeKT"
              >
                <img
                  className="h-reseaux github"
                  src={github}
                  alt="github profil"
                />
              </a>
              <a
                title="My Twitter !"
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/WadeeKT"
              >
                <img
                  className="h-reseaux twitter"
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
                  className="h-reseaux linkedin"
                  src={linkedin}
                  alt="linkedin profil"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
