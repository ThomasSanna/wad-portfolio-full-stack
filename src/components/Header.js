import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import "../styles/reset.css";
import logowad from "../utilities/imgs/logowad.png";
import linkedin from "../utilities/imgs/linkedin-svgrepo-com.svg";
import github from "../utilities/imgs/github-142-svgrepo-com.svg";
import twitter from "../utilities/imgs/twitter-svgrepo-com.svg";

function Header() {
    useEffect(() => {
        
    });
    return (
        <div className="header">
            <div className="navbar">
                <ul className="navul">
                    <li>
                        <NavLink to="/" exact className="navlink-pc-img">
                                <img className="nav-img" src={logowad} alt="Logo WadeeKT Envoie vers Home" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" exact activeClassName="active" className="navlink-pc">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active" className="navlink-pc">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" activeClassName="active" className="navlink-pc">
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active" className="navlink-pc">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="menu-responsive">
                <div className="opening">...</div>
                <div className="menu-ouvrant">

                    <div className="premier">
                        <ul className="liste-onglets">
                            <li>
                                <NavLink to="/" exact activeClassName="menu-active" className="menu-texte">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" activeClassName="menu-active" className="menu-texte">
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/portfolio" activeClassName="menu-active" className="menu-texte">
                                    Portfolio
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" activeClassName="menu-active" className="menu-texte">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <NavLink to="/" className="image-menu">
                            <img className="logo-menu" src={logowad} alt="Logo WadeeKT redirige vers Home."/>
                        </NavLink>
                    </div>

                    <div className="sec-int">
                        <div className="second">
                            <a href="https://github.com/WadeeKT">
                                <img className="reseaux github" src={github} alt="github profil"/>
                            </a>
                            <a href="https://twitter.com/WadeeKT">
                                <img className="reseaux twitter" src={twitter} alt="twitter profil"/>
                            </a>
                            <a href="https://www.linkedin.com/in/thomas-sanna-b74600277/">
                                <img className="reseaux linkedin" src={linkedin} alt="linkedin profil"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;