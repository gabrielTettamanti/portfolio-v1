import React from "react";
import "./styles.css";

import UNLPLogo from "../../assets/images/education/unlp.webp";
import DHLogo from "../../assets/images/education/digitalhouse.svg";
import freeCodeCampLogo from "../../assets/images/education/freecodecamp.jpg";
import HarvardLogo from "../../assets/images/education/harvard.png";
import myPhoto from "../../assets/images/me/myphoto.jpg";

export default () => {
  let date = new Date();
  let currentYear = date.getFullYear();
  let myCurrentAge = currentYear - 1999;

  return (
    <section className="about-me">
      <div className="personal-description">
        <img src={myPhoto} alt="" className="about-me-photo" />
        <div>
          <h2 className="about-me-title">Full-Stack Developer</h2>
          <p className="about-me-text">
            Soy un emprededor de {myCurrentAge} años. Apasionado por los nuevos
            proyectos y el trabajo en equipo para afrontar los desafíos. Tengo
            experiencia como product owner, scrum master y desarrollador;
            organizando equipos, creando estrategias y desarrollando
            aplicaciones a todo nivel (back end y front end). Soy ingenioso,
            cooperativo y previsor, siempre dispuesto a aprender nuevas
            herramientas y técnicas laborales, con buen ojo para el diseño y la
            creación de ambitos positivos de trabajo.
          </p>
        </div>
      </div>
      <div className="education">
        <h3 className="education-title">Estudios</h3>
        <ul className="education-list">
          <li className="education-list-item">
            <h4 className="education-years">2022</h4>
            <div className="education-names">
              <div className="education-institutions">
                <p className="education-name">
                  Harvard University | CS50's Web Programming with Python and
                  JavaScript
                </p>
                <img
                  src={HarvardLogo}
                  alt="Harvard University logo"
                  className="education-logo"
                  id="harvard-university-logo"
                />
              </div>
              <div className="education-institutions">
                <p className="education-name">
                  freeCodeCamp | Front End Development Libraries
                </p>
                <img
                  src={freeCodeCampLogo}
                  alt="freeCodeCamp logo"
                  className="education-logo"
                  id="freecodecamp-logo"
                />
              </div>
              <div className="education-institutions">
                <p className="education-name">
                  Digital House | Full Stack Web Development
                </p>
                <img
                  src={DHLogo}
                  alt="Digital House logo"
                  className="education-logo"
                  id="dh-logo"
                />
              </div>
            </div>
          </li>
          <li className="education-list-item">
            <h4 className="education-years">2017 - 2020</h4>
            <div className="education-names">
              <div className="education-institutions">
                <p className="education-name">
                  Universidad Nacional de La Plata | Licenciatura en Economía
                  (60% completa)
                </p>
                <img
                  src={UNLPLogo}
                  alt="UNLP logo"
                  className="education-logo"
                  id="unlp-logo"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <ul className="langs-container">
        <h3 className="langs-title">Idiomas</h3>
        <li className="langs-list-item">
          <p className="langs-name">Español</p>
          <div className="bar front expert" data-skill="Native"></div>
        </li>
        <li className="langs-list-item">
          <p className="langs-name">Inglés</p>
          <div
            className="bar front advanced"
            data-skill="Upper intermediate"
          ></div>
        </li>
        <li className="langs-list-item">
          <p className="langs-name">Alemán</p>
          <div className="bar back basic" data-skill="Intermediate"></div>
        </li>
        <li className="langs-list-item">
          <p className="langs-name">Japonés</p>
          <div className="bar learning" data-skill="Begginer"></div>
        </li>
      </ul>
    </section>
  );
};
