import Header from "../components/Header.js";
import React from "react";
import '../styles/About.css'
import '../styles/reset.css'

function About() {
  return (
    <div>
      <Header />
      <div className="page-container">
        <h1>About</h1>
        <p>This is the about page.</p>
      </div>
    </div>
  );
}

export default About;
