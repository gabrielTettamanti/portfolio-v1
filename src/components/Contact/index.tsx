import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './styles.css'

function Contact() {
    return (
        <footer className="contact-container">
            <div>

            </div>
            <address className="contact-buttons">
                <a href="">
                    <p className="contact-button cv-p">Curriculum Vitae</p>
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faInstagram} className="contact-button contact-icon" />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faEnvelope} className="contact-button contact-icon" />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faGithub} className="contact-button contact-icon" />
                </a>
            </address>
        </footer>
    );
};

export default Contact;