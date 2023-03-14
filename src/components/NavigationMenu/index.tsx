/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Technologies from "../Technologies";
import "./styles.css";

const text = require("./../../assets/data/indexTexts.json");

export default () => {
  let lang = sessionStorage.getItem("lang");
  const [status, setStatus] = useState({
    project: "project",
    tech: "tech",
    aboutme: "aboutme",
  });

  useEffect(() => {
    let path = window.location.pathname.replace('/','');
    if(path === '') setStatus({ project: "project", tech: "unactive", aboutme: "unactive" });
    if(path === 'technologies') setStatus({ project: "unactive", tech: "tech", aboutme: "unactive" });
    if(path === 'aboutme') setStatus({ project: "unactive", tech: "unactive", aboutme: "aboutme" });
    if(path !== '' && path !== 'technologies' && path !== 'aboutme') setStatus({ project: "unactive", tech: "unactive", aboutme: "unactive" });
  }, []);

  const handleStatus = (option: string) => {
    if (option === "porject") {
      setStatus({ project: "project", tech: "unactive", aboutme: "unactive" });
    }
    if (option === "tech") {
      setStatus({ project: "unactive", tech: "tech", aboutme: "unactive" });
    }
    if (option === "aboutme") {
      setStatus({ project: "unactive", tech: "unactive", aboutme: "aboutme" });
    }
  };

  return (
    <ul className="navigation-menu">
      <span id="nav-menu"></span>
      <li className="menu-option">
        <Link
          to={"/"}
          onClick={() => handleStatus("porject")}
          className={`link-option ${status.project}`}
        >
          {lang === "en" ? text.en.navbarProjects : text.es.navbarProjects}
        </Link>
      </li>
      <li className="menu-option">
        <Link
          to={"/technologies"}
          onClick={() => handleStatus("tech")}
          className={`link-option ${status.tech}`}
        >
          {lang === "en" ? text.en.navbarTechnologies : text.es.navbarTechnologies}
        </Link>
      </li>
      <li className="menu-option">
        <Link
          to={"/aboutme"}
          onClick={() => handleStatus("aboutme")}
          className={`link-option ${status.aboutme}`}
        >
          {lang === "en" ? text.en.navbarAboutme : text.es.navbarAboutme}
        </Link>
      </li>
    </ul>
  );
};
