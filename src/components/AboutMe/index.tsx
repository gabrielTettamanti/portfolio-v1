import React from "react";
import "./styles.css";

import UNLPLogo from "../../assets/images/education/unlp.webp";
import DHLogo from "../../assets/images/education/digitalhouse.svg";
import freeCodeCampLogo from "../../assets/images/education/freecodecamp.jpg";
import HarvardLogo from "../../assets/images/education/harvard.png";

export default () => {
  return (
    <section className="about-me">
      <div className="personal-description">
        <img
          src="/static/media/sunrise.913e3d46a8873355b5fe.jpg"
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
    </section>
  );
};
