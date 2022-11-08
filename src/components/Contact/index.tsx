import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './styles.css'
import useTime from "../hooks/useTime";

function Contact() {
    const dayTime = useTime()
    return (
        <footer>
            <div className={`contact-container-${dayTime}`}>
                <div className="contact-buttons">
                </div>
                <a href="#repositories-list">
                    <FontAwesomeIcon icon={faArrowDown} className="arrow-down-scroller" />
                </a>
                <address className="contact-buttons">
                    <a href="">
                        <p className="contact-button cv-p">Curriculum Vitae</p>
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faLinkedin} className="contact-button contact-icon" />
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faEnvelope} className="contact-button contact-icon" />
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faGithub} className="contact-button contact-icon" />
                    </a>
                </address>
            </div>
            <div className="background-footer-filling"/>
        </footer>
    );
};

export default Contact;