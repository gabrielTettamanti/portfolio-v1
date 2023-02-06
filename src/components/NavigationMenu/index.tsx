/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Technologies from "../Technologies";
import "./styles.css";

export default () => {
  const [status, setStatus] = useState({
    project: "project",
    tech: "tech",
    aboutme: "aboutme",
  });

  useEffect(() => {
    let path = window.location.pathname.replace('/','');
    if(path == '') setStatus({ project: "project", tech: "unactive", aboutme: "unactive" });
    if(path == 'technologies') setStatus({ project: "unactive", tech: "tech", aboutme: "unactive" });
    if(path == 'aboutme') setStatus({ project: "unactive", tech: "unactive", aboutme: "aboutme" });
    if(path != '' && path != 'technologies' && path != 'aboutme') setStatus({ project: "unactive", tech: "unactive", aboutme: "unactive" });
  }, []);

  const handleStatus = (option: string) => {
    if (option == "porject") {
      setStatus({ project: "project", tech: "unactive", aboutme: "unactive" });
    }
    if (option == "tech") {
      setStatus({ project: "unactive", tech: "tech", aboutme: "unactive" });
    }
    if (option == "aboutme") {
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
          Proyectos
        </Link>
      </li>
      <li className="menu-option">
        <Link
          to={"/technologies"}
          onClick={() => handleStatus("tech")}
          className={`link-option ${status.tech}`}
        >
          Tecnologías
        </Link>
      </li>
      <li className="menu-option">
        <Link
          to={"/aboutme"}
          onClick={() => handleStatus("aboutme")}
          className={`link-option ${status.aboutme}`}
        >
          Sobre mi
        </Link>
      </li>
    </ul>
  );
};
