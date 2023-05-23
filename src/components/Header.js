import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import "../styles/reset.css";
import logowad from "../utilities/imgs/logowad.png";

function Header() {
    return (
        <div className="header">
            <div className="navbar">
                <ul className="navul">
                    <li>
                        <NavLink to="/" exact className="navlink-pc">
                                <img src={logowad} alt="" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" exact activeClassName="nav-pc-active" className="navlink-pc">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="nav-pc-active" className="navlink-pc">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" activeClassName="nav-pc-active" className="navlink-pc">
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="nav-pc-active" className="navlink-pc">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="menu-responsive">
                <div>...</div>
                <div className="menu-ouvrant">
                    <ul>
                        <li>
                            <NavLink to="/" exact activeClassName="menu-active">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="menu-active">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio" activeClassName="menu-active">
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeClassName="menu-active">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Header;