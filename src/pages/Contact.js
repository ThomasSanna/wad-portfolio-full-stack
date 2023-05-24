import React from "react";
import Header from "../components/Header.js";
import '../styles/Contact.css'
import '../styles/reset.css'

function Contact() {
    return (
        <div>
            <Header />
            <div className="page-container">
                <h1>Contact</h1>
                <p>This is the contact page.</p>
            </div>
        </div>
    );  
}

export default Contact;
