/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import useAOS from "../hooks/useAOS";
import "./styles.css";

import UNLPLogo from "../../assets/images/education/unlp.webp";
import DHLogo from "../../assets/images/education/digitalhouse.svg";
import freeCodeCampLogo from "../../assets/images/education/freecodecamp.jpg";
import HarvardLogo from "../../assets/images/education/harvard.png";
import VueSchoolLogo from "../../assets/images/education/vueschool.svg";
import myPhoto from "../../assets/images/me/myphoto.jpg";

const text = require("./../../assets/data/aboutmeTexts.json");

export default () => {
  let lang = sessionStorage.getItem("lang");
  useAOS();
  let date = new Date();
  let currentYear = date.getFullYear();
  let myCurrentAge = currentYear - 1999;

  return (
    <section className="about-me">
      <div className="personal-description">
        <img
          src={myPhoto}
          alt=""
          className="about-me-photo"
          data-aos="fade-in"
          data-aos-duration="2000"
          data-aos-offset="200"
          data-aos-once="true"
        />
        <div>
          <h2 className="about-me-title">Full-Stack Developer</h2>
          <p className="about-me-text">
            {lang === "en"
              ? text.en.aboutmeTextFirstPart +
                myCurrentAge +
                text.en.aboutmeTextSecondPart
              : text.es.aboutmeTextFirstPart +
                myCurrentAge +
                text.es.aboutmeTextSecondPart}
          </p>
        </div>
      </div>
      <div className="education">
        <h3 className="education-title">
          {lang === "en" ? text.en.studies : text.es.studies}
        </h3>
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
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  data-aos-once="true"
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
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  data-aos-once="true"
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
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  data-aos-once="true"
                />
              </div>
            </div>
          </li>
          <li className="education-list-item">
            <h4 className="education-years">2017 - 2020</h4>
            <div className="education-names">
              <div className="education-institutions">
                <p className="education-name">
                  Universidad Nacional de La Plata | Economics (60% completed)
                </p>
                <img
                  src={UNLPLogo}
                  alt="UNLP logo"
                  className="education-logo"
                  id="unlp-logo"
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  data-aos-once="true"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <ul className="langs-container">
        <h3 className="langs-title">
          {lang === "en" ? text.en.languages : text.es.languages}
        </h3>
        <li className="langs-list-item">
          <p className="langs-name">
            {lang === "en" ? text.en.spanish : text.es.spanish}
          </p>
          <div className="bar front expert" data-skill="Native"></div>
        </li>
        <li className="langs-list-item">
          <p className="langs-name">
            {lang === "en" ? text.en.english : text.es.english}
          </p>
          <div className="bar front advanced" data-skill="Advanced"></div>
        </li>
        <li className="langs-list-item">
          <p className="langs-name">
            {lang === "en" ? text.en.german : text.es.german}
          </p>
          <div className="bar back basic" data-skill="Intermediate"></div>
        </li>
        <li className="langs-list-item">
          <p className="langs-name">
            {lang === "en" ? text.en.japanese : text.es.japanese}
          </p>
          <div className="bar learning" data-skill="Begginer"></div>
        </li>
      </ul>
      <div className="education">
        <h3 className="courses-title">
          {lang === "en" ? text.en.courses : text.es.courses}
        </h3>
        <ul className="education-list">
          <li className="education-list-item">
            <h4 className="education-years">2023</h4>
            <div className="education-names">
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Vue.js + Firebase Authentication
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  data-aos-once="true"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Vue.js + Firebase Realtime Database
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  data-aos-once="true"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Build a Drag-and-Drop Trello Board with Vue.js
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  data-aos-once="true"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Web Accessibility Fundamentals
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  data-aos-once="true"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Storybook with Vue.js
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  data-aos-once="true"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Nuxt.js 3 Fundamentals
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  data-aos-once="true"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  GraphQL Fundamentals
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  data-aos-once="true"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Pinia: The Enjoyable Vue Store
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  data-aos-once="true"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  TypeScript Fundamentals
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  data-aos-once="true"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  JavaScript Testing Fundamentals
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  data-aos-once="true"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Rapid Development with Vite
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  data-aos-once="true"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Vue 3 Composition API
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  data-aos-once="true"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Vue 3 Single File Components
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  data-aos-once="true"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Vue.js 3 Components Fundamentals
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  data-aos-once="true"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Vue.js 3 Fundamentals with the Composition APIs
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  data-aos-once="true"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Vue.js 3 Fundamentals with the Options API
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  data-aos-once="true"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Visual Studio Code for Vue.js Developers
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  data-aos-offset='100'
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
