import React from "react";
import './styles.css'

interface repositoriesData {
  title: string,
  description: string,
  technologies: string[],
}

export default (props: repositoriesData) => {
    return (
      <div
        className="repository"
      >
        <img
          src="/static/media/sunrise.913e3d46a8873355b5fe.jpg"
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
      </div>
    )
}