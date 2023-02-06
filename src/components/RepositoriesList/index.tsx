/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./styles.css";

import Repository from "../Repository";

import repositoriesData from '../../assets/data/repositoriesData'
import experimentsData from '../../assets/data/experimentsData'

export default () => {
  return (
    <section
      className="repositories-list"
    >
      <h2 className="repositories-list-title" id="developments-title">Desarrollos</h2>
      {repositoriesData.map(data => {
        return (
          <Repository
            title = {data.title}
            description = {data.description}
            technologies = {data.technologies}
            url = {data.url}
            github = {data.github}
            desktop = {data.desktop}
            img = {data.img}
            key = {data.title}
          />
        );
      })}
      <div>
      <h2 className="repositories-list-title" id="experiments-title">Experimentos y código abierto<span>Web is fun</span></h2>
        {experimentsData.map(data => {
          return (
            <Repository
              title = {data.title}
              description = {data.description}
              technologies = {data.technologies}
              url = {data.url}
              github = {data.github}
              desktop = {data.desktop}
              img = {data.img}
              key = {data.title}
            />
          );
        })}
      </div>
    </section>
  );
};
