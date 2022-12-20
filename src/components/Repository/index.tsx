import React from "react";
import './styles.css'

interface repositoriesData {
  title: string,
  description: string,
  technologies: string[],
  url: string,
  img: string
}

export default (props: repositoriesData) => {
    return (
      <a
        href={props.url}
        target='_blank'
        className="repository"
      >
        <img
          src={props.img}
          alt="Foto del proyecto"
          className="repository-view"
        />
        <div className="repository-info">
          <h3 className="repository-title">{props.title}</h3>
          <p className="repository-detail">
            {props.description}
          </p>
          <h4 className="repository-technologies-title">Tecnologías</h4>
          <div className="repository-technologies-container">
            {props.technologies.map(tech => {
              return(
                <img src={tech} alt="Tech-logo" className="repository-technology" />
              )
            })}
          </div>
        </div>
      </a>
    )
}