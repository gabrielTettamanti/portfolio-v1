import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faPlay, faXmark } from "@fortawesome/free-solid-svg-icons";
import useAOS from "../hooks/useAOS";

import "./styles.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface repositoriesData {
  title: string;
  description: string;
  technologies: string[];
  url: string;
  github: string;
  desktop: string;
  img: string;
}

export default (props: repositoriesData) => {
  const [modalIsOpen, setIsOpen] = useState('repository-menu-unactive');

  function openModal() {
    if(modalIsOpen == 'repository-menu-unactive') setIsOpen('repository-menu')
  }

  function closeModal() {
    setIsOpen('repository-menu-unactive');
  }

  useAOS();

  return (
    <div className={`repository ${modalIsOpen == 'repository-menu' ? 'unclickable' : 'clickable'}`} onClick={() => openModal()}>
      <img
        data-aos="fade-in"
        data-aos-duration="2000"
        data-aos-offset="250"
        src={props.img}
        alt="Foto del proyecto"
        className="repository-view"
      />
        <div className={modalIsOpen}>
          <a
            href={props.url}
            target="_blank"
            className={`repository-menu-button ${
              props.url == "" ? "no-url" : null
            }`}
            id="repository-menu-yt"
          >
            <FontAwesomeIcon icon={faPlay} />
          </a>
          <a
            href={props.desktop}
            target="_blank"
            className={`repository-menu-button ${
              props.desktop == "" ? "no-url" : null
            }`}
            id="repository-menu-desktop"
          >
            <FontAwesomeIcon icon={faDesktop} />
          </a>
          <a
            href={props.github}
            target="_blank"
            className={`repository-menu-button ${
              props.github == "" ? "no-url" : null
            }`}
            id="repository-menu-github"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <button
            onClick={closeModal}
            className="repository-menu-button"
            id="repository-menu-xmark"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      <div className="repository-info">
        <h3 className="repository-title">{props.title}</h3>
        <p className="repository-detail">{props.description}</p>
        <h4 className="repository-technologies-title">Tecnologías</h4>
        <div className="repository-technologies-container">
          {props.technologies.map((tech) => {
            return (
              <img
                key={tech}
                src={tech}
                alt="Tech-logo"
                className="repository-technology"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
