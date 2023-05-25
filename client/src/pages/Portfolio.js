import React, {useEffect, useState} from "react";
import Header from "../components/Header.js";
import '../styles/Portfolio.css'
import '../styles/reset.css'
import logowad from "../utilities/imgs/logowad.png";


function Portfolio() {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        document.title = "WadeeKT - Portfolio";
      });

    return (
        <div className={`b-portfolio ${isMounted ? "b-portfolio-enter" : ""}`}>
            <Header />
            <div className="page-container">
                <h1>Portfolio</h1>
                <span className="logo-page-cont">
                    <img className="logo-page-wad" src={logowad} alt="Logo WadeeKT" />
                </span>
            </div>
        </div>
    );
}

export default Portfolio;