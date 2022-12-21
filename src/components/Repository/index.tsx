import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faPlay, faXmark } from "@fortawesome/free-solid-svg-icons";

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
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="repository">
      <img
        src={props.img}
        alt="Foto del proyecto"
        className="repository-view"
        onClick={() => openModal()}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            background: "none",
            border: "none",
          },
          overlay: {
            backgroundColor: "none",
          },
        }}
      >
        <div className="repository-menu">
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
      </Modal>
      <div className="repository-info">
        <h3 className="repository-title">{props.title}</h3>
        <p className="repository-detail">{props.description}</p>
        <h4 className="repository-technologies-title">Tecnologías</h4>
        <div className="repository-technologies-container">
          {props.technologies.map((tech) => {
            return (
              <img
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
