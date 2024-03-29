/* eslint-disable react/jsx-no-target-blank */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './styles.css'
import useTime from "../hooks/useTime";
import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const URL_CV_ES =
        "https://drive.google.com/file/d/1uSBbpskdNQ5OAOfc6jy-LIfbZSZvLQ61/view?usp=sharing";
    const URL_CV_EN =
      "https://drive.google.com/file/d/1E441GTpvPRYg_DpSf2yZF8-q_fUU5yld/view?usp=sharing";

    const dayTime = useTime()
    let lang = sessionStorage.getItem("lang");

    const handleMailTo = () => {
        let toastMessage = () => {
            if (lang === 'en') {
                return 'Email copied!!'
            }
            if (lang === "es" || lang === null) {
              return "Email copiado!!";
            }
        }
        navigator.clipboard.writeText("gabrieltettamanti.dev@gmail.com");
        toast.success(toastMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
    }

    return (
      <footer>
        <ToastContainer />
        <div className={`contact-container-${dayTime}`}>
          <div className="contact-buttons"></div>
          <a href="#nav-menu">
            <FontAwesomeIcon icon={faBars} className="arrow-down-scroller" />
          </a>
          <address className="contact-buttons">
            <a href={lang === "en" ? URL_CV_EN : URL_CV_ES} target="_blank">
              <p className="contact-button cv-p">Curriculum Vitae</p>
            </a>
            <a
              href="https://www.linkedin.com/in/gabrieltettamanti/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="contact-button contact-icon"
              />
            </a>
            <button className="mail-button" onClick={() => handleMailTo()}>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="contact-button contact-icon"
              />
            </button>
            <a href="https://github.com/gabrielTettamanti" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="contact-button contact-icon"
              />
            </a>
          </address>
        </div>
        <div className="background-footer-filling" />
      </footer>
    );
};

export default Contact;