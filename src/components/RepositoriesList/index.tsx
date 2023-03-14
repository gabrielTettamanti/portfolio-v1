/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./styles.css";

import Repository from "../Repository";

import repositoriesData from '../../assets/data/repositoriesData'
import experimentsData from '../../assets/data/experimentsData'
const text = require("./../../assets/data/indexTexts.json");

export default () => {
  let lang = sessionStorage.getItem("lang");
  return (
    <section className="repositories-list">
      <h2 className="repositories-list-title" id="developments-title">
        {lang === "en" ? text.en.repositoriesListTitle : text.es.repositoriesListTitle}
      </h2>
      {repositoriesData.map((data) => {
        return (
          <Repository
            title={data.title}
            description={data.description}
            technologies={data.technologies}
            url={data.url}
            github={data.github}
            desktop={data.desktop}
            img={data.img}
            key={data.title}
          />
        );
      })}
      <div>
        <h2 className="repositories-list-title" id="experiments-title">
          {lang === "en" ? text.en.experimentsTitle : text.es.experimentsTitle}
          <span>{lang === "en" ? text.en.experimentsSubtitle : text.es.experimentsSubtitle}</span>
        </h2>
        {experimentsData.map((data) => {
          return (
            <Repository
              title={data.title}
              description={data.description}
              technologies={data.technologies}
              url={data.url}
              github={data.github}
              desktop={data.desktop}
              img={data.img}
              key={data.title}
            />
          );
        })}
      </div>
    </section>
  );
};
