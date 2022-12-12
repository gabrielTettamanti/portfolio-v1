import React from "react";
import "./styles.css";

export default () => {
  return (
    <section className="about-me">
      <div className="personal-description">
        <img
          src="/static/media/sunrise.913e3d46a8873355b5fe.jpg"
          alt=""
          className="about-me-photo"
        />
        <div>
          <h2 className="about-me-title">Full-Stack Developer</h2>
          <p className="about-me-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus, magnam. Velit voluptatem esse nostrum consectetur
            magnam, quo repellendus perspiciatis deserunt labore exercitationem
            modi laudantium dignissimos sint nisi dolor? Reprehenderit, fugiat.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
            sapiente ullam excepturi animi incidunt laboriosam eos, rem labore
            quod similique saepe adipisci quia totam ab quam debitis velit,
            omnis sunt.
          </p>
        </div>
      </div>
      <div className="education">
        <h3 className="education-title">Educacion</h3>
        <ul className="education-list">
          <li className="education-list-item">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            (31/12/2022 - 31/12/2022)
          </li>
          <li className="education-list-item">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            (31/12/2022 - 31/12/2022)
          </li>
          <li className="education-list-item">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            (31/12/2022 - 31/12/2022)
          </li>
          <li className="education-list-item">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            (31/12/2022 - 31/12/2022)
          </li>
        </ul>
      </div>
    </section>
  );
};
