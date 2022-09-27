import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './styles.css'
import useTime from "../hooks/useTime";

function Contact() {
    const dayTime = useTime()
    return (
        <footer>
            <div className={`contact-container-${dayTime}`}>
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
            </div>
            <div className="background-footer-filling"/>
        </footer>
    );
};

export default Contact;