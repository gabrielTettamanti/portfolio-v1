/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './styles.css'
import useTime from "../hooks/useTime";
import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const dayTime = useTime()
    const handleMailTo = () => {
        navigator.clipboard.writeText("gabrieltettamanti.dev@gmail.com");
        toast.success("E-mail copiado!!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            })
    }

    return (
        <footer>
            <ToastContainer />
            <div className={`contact-container-${dayTime}`}>
                <div className="contact-buttons">
                </div>
                <a href="#nav-menu">
                    <FontAwesomeIcon icon={faBars} className="arrow-down-scroller" />
                </a>
                <address className="contact-buttons">
                    <a href="https://drive.google.com/file/d/1Vw0-ZFCLEB5ZQtZZPLaLIWL0yj8ZShHp/view?usp=sharing" target="_blank">
                        <p className="contact-button cv-p">Curriculum Vitae</p>
                    </a>
                    <a href="https://www.linkedin.com/in/gabrieltettamanti/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="contact-button contact-icon" />
                    </a>
                    <button className="mail-button" onClick={() => handleMailTo() }>
                        <FontAwesomeIcon icon={faEnvelope} className="contact-button contact-icon" />
                    </button>
                    <a href="https://github.com/gabrielTettamanti" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="contact-button contact-icon" />
                    </a>
                </address>
            </div>
            <div className="background-footer-filling"/>
        </footer>
    );
};

export default Contact;