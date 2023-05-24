import React from "react";
import Header from "../components/Header.js";
import '../styles/Portfolio.css'
import '../styles/reset.css'

function Portfolio() {
    return (
        <div>
            <Header />
            <div className="page-container">
                <h1>Portfolio</h1>
                <p>This is the portfolio page.</p>
            </div>
        </div>
    );
}

export default Portfolio;