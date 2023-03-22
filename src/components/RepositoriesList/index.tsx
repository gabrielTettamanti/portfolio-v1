/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./styles.css";

import Repository from "../Repository";

import repositoriesData from '../../assets/data/repositoriesData'
const text = require("./../../assets/data/indexTexts.json");

export default () => {
  let lang = sessionStorage.getItem("lang");
  return (
    <section className="repositories-list">
      <h2 className="repositories-list-title" id="experiments-title">
        {lang === "en" ? text.en.repositoriesListTitle : text.es.repositoriesListTitle}
        <span>
          {lang === "en"
            ? text.en.experimentsSubtitle
            : text.es.experimentsSubtitle}
        </span>
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
    </section>
  );
};
