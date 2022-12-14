import React from "react";
import "./styles.css";

import UNLPLogo from "../../assets/images/education/unlp.webp";
import DHLogo from "../../assets/images/education/digitalhouse.svg";
import freeCodeCampLogo from "../../assets/images/education/freecodecamp.jpg";
import HarvardLogo from "../../assets/images/education/harvard.png";
import myPhoto from "../../assets/images/me/myphoto.jpg";

export default () => {
  return (
    <section className="about-me">
      <div className="personal-description">
        <img
          src={myPhoto}
          alt=""
          className="about-me-photo"
        />
        <div>
          <h2 className="about-me-title">Full-Stack Developer</h2>
          <p className="about-me-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus, magnam. Velit voluptatem esse nostrum consectetur
            magnam, quo repellendus perspiciatis deserunt labore exercitationem
            modi laudantium dignissimos sint nisi dolor? Reprehenderit, fugiat.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
            sapiente ullam excepturi animi incidunt laboriosam eos, rem labore
            quod similique saepe adipisci quia totam ab quam debitis velit,
            omnis sunt.
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
      {/* <div className="">
        <h3 className="">Idiomas</h3>
        <ul>
          <li>Español</li>
          <li>Ingles</li>
          <li>Alemán</li>
          <li>Japonés</li>
        </ul>
      </div> */}
      <ul className="langs-container">
        <h3 className="langs-title">Idiomas</h3>
        <li className="langs-list-item">
          <p className="langs-name">Español</p>
          <div className="bar front expert" data-skill="Native"></div>
        </li>
        <li className="langs-list-item">
          <p className="langs-name">Inglés</p>
          <div className="bar front advanced" data-skill="Upper intermediate"></div>
        </li>
        <li className="langs-list-item">
          <p className="langs-name">Alemán</p>
          <div className="bar back intermediate" data-skill="Intermediate"></div>
        </li>
        <li className="langs-list-item">
          <p className="langs-name">Japonés</p>
          <div className="bar learning" data-skill="Elementary"></div>
        </li>
      </ul>
    </section>
  );
};