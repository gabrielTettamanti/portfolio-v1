/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import useAOS from "../hooks/useAOS";

import jsLogo from "../../assets/images/tecnologies/languages/javascript.png";
import tsLogo from "../../assets/images/tecnologies/languages/typescript.png";
import pyLogo from "../../assets/images/tecnologies/languages/python.png";
import goLogo from "../../assets/images/tecnologies/languages/go.png";
import cSharpLogo from "../../assets/images/tecnologies/languages/csharp.png";
import rustLogo from "../../assets/images/tecnologies/languages/rust.png";
import cssLogo from "../../assets/images/tecnologies/languages/css.png";
import htmlLogo from "../../assets/images/tecnologies/languages/html.png";
import nextLogo from "../../assets/images/tecnologies/frontend/next.png";
import solidLogo from "../../assets/images/tecnologies/frontend/solid.png";
import reactLogo from "../../assets/images/tecnologies/frontend/react.png";
import vueLogo from "../../assets/images/tecnologies/frontend/vue.png";
import svelteLogo from "../../assets/images/tecnologies/frontend/svelte.png";
import quikLogo from "../../assets/images/tecnologies/frontend/qwik.png";
import jqueryLogo from "../../assets/images/tecnologies/frontend/jquery.png";
import expressLogo from "../../assets/images/tecnologies/backend/express.png";
import flaskLogo from "../../assets/images/tecnologies/backend/flask.png";
import djangoLogo from "../../assets/images/tecnologies/backend/django.png";
import fiberLogo from "../../assets/images/tecnologies/backend/fiber.webp";
import dotNetLogo from "../../assets/images/tecnologies/backend/aspnet.png";
import actixLogo from "../../assets/images/tecnologies/backend/actix.png";
import MySQLLogo from "../../assets/images/tecnologies/database/mysql.webp";
import MongoDBLogo from "../../assets/images/tecnologies/database/mongodb.png";
import redisLogo from "../../assets/images/tecnologies/database/redis.webp";
import graphQLLogo from "../../assets/images/tecnologies/database/graphql.webp";
import JestLogo from "../../assets/images/tecnologies/testing/jest.png";
import TailwindLogo from "../../assets/images/tecnologies/styles/tailwind.png";
import BootstrapLogo from "../../assets/images/tecnologies/styles/bootstrap.webp";
import GitLogo from "../../assets/images/tecnologies/tools/git.png";
import DockerLogo from "../../assets/images/tecnologies/tools/docker.png";
import ViteLogo from "../../assets/images/tecnologies/tools/vite.png";
import WebpackLogo from "../../assets/images/tecnologies/tools/webpack.png";
import SassLogo from "../../assets/images/tecnologies/tools/sass.png";
import ThreeJSLogo from "../../assets/images/tecnologies/tools/threejs.png";

import "./styles.css";

export default function () {

  useAOS();

  return (
    <>
      <section className="technologies">
        <h2 className="tech-section-title">Stack Actual</h2>
        <p className="tech-section-text">
          Estas son las tecnologías que uso profesionalmente en el día a día.
          Son aquellas con las que tengo mayor experiencia y las que me parecen
          más idóneas para el desarrollo web en la actualidad.
        </p>
        <div className="tech-group">
          <h3 className="tech-name">Lenguajes</h3>
          <div className="logos-group" data-aos="fade-in" data-aos-duration="1000" data-aos-offset="217" data-aos-once="true">
            <a
              href="https://www.javascript.com/"
              className="tech-link"
              target="_blank" rel="noreferrer"
            >
              <img src={jsLogo} alt="Javascript" className="technology-logo" />
            </a>
            <a
              href="https://www.typescriptlang.org/"
              className="tech-link"
              target="_blank" rel="noreferrer"
            >
              <img src={tsLogo} alt="TypeScript" className="technology-logo" />
            </a>
            <a
              href="https://www.python.org/"
              className="tech-link"
              target="_blank" rel="noreferrer"
            >
              <img src={pyLogo} alt="Python" className="technology-logo" />
            </a>
            <a href="https://html.com/" className="tech-link" target="_blank" rel="noreferrer">
              <img src={htmlLogo} alt="HTML" className="technology-logo" />
            </a>
            <a
              href="https://www.w3.org/Style/CSS/"
              className="tech-link"
              target="_blank" rel="noreferrer"
            >
              <img src={cssLogo} alt="CSS" className="technology-logo" />
            </a>
            <a
              href="https://sass-lang.com/"
              className="tech-link"
              target="_blank" rel="noreferrer"
            >
              <img src={SassLogo} alt="Sass" className="technology-logo" />
            </a>
          </div>
        </div>
        <div className="tech-group">
          <h3 className="tech-name">Front-end</h3>
          <div className="logos-group" data-aos="fade-in" data-aos-duration="1000" data-aos-offset="217" data-aos-once="true">
            <a href="https://nextjs.org/" className="tech-link" target="_blank" rel="noreferrer">
              <img src={nextLogo} alt="Next" className="technology-logo" />
            </a>
            <a
              href="https://es.reactjs.org/"
              className="tech-link"
              target="_blank" rel="noreferrer"
            >
              <img src={reactLogo} alt="React" className="technology-logo" />
            </a>
          </div>
        </div>
        <div className="tech-group">
          <h3 className="tech-name">Back-end</h3>
          <div className="logos-group" data-aos="fade-in" data-aos-duration="1000" data-aos-offset="217" data-aos-once="true">
            <a
              href="https://expressjs.com/"
              className="tech-link"
              target="_blank" rel="noreferrer"
            >
              <img
                src={expressLogo}
                alt="Express"
                className="technology-logo" />
            </a>
            <a
              href="https://www.djangoproject.com/"
              className="tech-link"
              target="_blank" rel="noreferrer"
            >
              <img src={djangoLogo} alt="DJango" className="technology-logo" />
            </a>
          </div>
        </div>
        <div className="tech-group">
          <h3 className="tech-name">Database</h3>
          <div className="logos-group" data-aos="fade-in" data-aos-duration="1000" data-aos-offset="217" data-aos-once="true">
            <a
              href="https://www.mysql.com/"
              className="tech-link"
              target="_blank" rel="noreferrer"
            >
              <img src={MySQLLogo} alt="MySQL" className="technology-logo" />
            </a>
            <a
              href="https://www.mongodb.com/"
              className="tech-link"
              target="_blank" rel="noreferrer"
            >
              <img
                src={MongoDBLogo}
                alt="MongoDB"
                className="technology-logo" />
            </a>
          </div>
        </div>
        <div className="tech-group">
          <h3 className="tech-name">Tools</h3>
          <div className="logos-group" data-aos="fade-in" data-aos-duration="1000" data-aos-offset="217" data-aos-once="true">
            <a href="https://jestjs.io/" className="tech-link" target="_blank" rel="noreferrer">
              <img src={JestLogo} alt="Jest" className="technology-logo" />
            </a>
            <a
              href="https://tailwindcss.com/"
              className="tech-link"
              target="_blank" rel="noreferrer"
            >
              <img
                src={TailwindLogo}
                alt="Tailwind"
                className="technology-logo" />
            </a>
            <a href="https://vitejs.dev/" className="tech-link" target="_blank" rel="noreferrer">
              <img src={ViteLogo} alt="Vite" className="technology-logo" />
            </a>
            <a
              href="https://git-scm.com/"
              className="tech-link"
              target="_blank" rel="noreferrer"
            >
              <img src={GitLogo} alt="Git" className="technology-logo" />
            </a>
            <a
              href="https://www.docker.com/"
              className="tech-link"
              target="_blank" rel="noreferrer"
            >
              <img src={DockerLogo} alt="Docker" className="technology-logo" />
            </a>
          </div>
        </div>
      </section>
      <section className="technologies second-technologies">
        <h2 id="tech-section-second-title">
          Herramientas interesantes<span>learning is fun</span>
        </h2>
        <p className="tech-section-text">
          Estas son tecnologías que me divierte usar e investigar en mi tiempo
          libre. Considero que algunas de ellas son el futuro del desarrollo de
          software y se van a ir viendo cada vez más en el corto plazo. Ofrecen
          enfoques innovadores y mayor rendimiento que ciertas tecnologías más
          usadas en la actualidad.
        </p>
        <div className="tech-group">
          <h3 className="tech-name">Lenguajes</h3>
          <div className="logos-group" data-aos="fade-in" data-aos-duration="1000" data-aos-offset="217" data-aos-once="true">
            <a href="https://go.dev/" className="tech-link" target="_blank" rel="noreferrer">
              <img src={goLogo} alt="Go" className="technology-logo" />
            </a>
            <a
              href="https://www.rust-lang.org/"
              className="tech-link"
              target="_blank" rel="noreferrer"
            >
              <img src={rustLogo} alt="Rust" className="technology-logo" />
            </a>
          </div>
        </div>
        <div className="tech-group">
          <h3 className="tech-name">Front-end</h3>
          <div className="logos-group" data-aos="fade-in" data-aos-duration="1000" data-aos-offset="217" data-aos-once="true">
            <a
              href="https://www.solidjs.com/"
              className="tech-link"
              target="_blank" rel="noreferrer"
            >
              <img src={solidLogo} alt="Solid" className="technology-logo" />
            </a>
            <a href="https://svelte.dev/" className="tech-link" target="_blank" rel="noreferrer">
              <img src={svelteLogo} alt="Svelte" className="technology-logo" />
            </a>
            <a
              href="https://qwik.builder.io/"
              className="tech-link"
              target="_blank" rel="noreferrer"
            >
              <img src={quikLogo} alt="Qwik" className="technology-logo" />
            </a>
            <a href="https://vuejs.org/" className="tech-link" target="_blank" rel="noreferrer">
              <img src={vueLogo} alt="Vue" className="technology-logo" />
            </a>
          </div>
        </div>
        <div className="tech-group">
          <h3 className="tech-name">Back-end</h3>
          <div className="logos-group" data-aos="fade-in" data-aos-duration="1000" data-aos-offset="217" data-aos-once="true">
            <a href="https://gofiber.io/" className="tech-link" target="_blank" rel="noreferrer">
              <img src={fiberLogo} alt="Fiber" className="technology-logo" />
            </a>
            <a href="https://actix.rs/" className="tech-link" target="_blank" rel="noreferrer">
              <img src={actixLogo} alt="Actix" className="technology-logo" />
            </a>
          </div>
        </div>
        <div className="tech-group">
          <h3 className="tech-name">Database</h3>
          <div className="logos-group" data-aos="fade-in" data-aos-duration="1000" data-aos-offset="217" data-aos-once="true">
            <a
              href="https://graphql.org/"
              className="tech-link"
              target="_blank" rel="noreferrer"
            >
              <img
                src={graphQLLogo}
                alt="GraphQL"
                className="technology-logo" />
            </a>
            <a href="https://redis.io/" className="tech-link" target="_blank" rel="noreferrer">
              <img src={redisLogo} alt="Redis" className="technology-logo" />
            </a>
          </div>
        </div>
        <div className="tech-group">
          <h3 className="tech-name">Tools</h3>
          <div className="logos-group" data-aos="fade-in" data-aos-duration="1000" data-aos-offset="217" data-aos-once="true">
            <a
              href="https://threejs.org/"
              className="tech-link"
              target="_blank" rel="noreferrer"
            >
              <img
                src={ThreeJSLogo}
                alt="ThreeJS"
                className="technology-logo" />
            </a>
          </div>
        </div>
      </section>
      <section className="technologies">
        <h2 className="tech-section-title">En desuso</h2>
        <p className="tech-section-text">
          Son tecnologías que dejé de usar en nuevos proyectos por preferencias
          personales o porque encuentro mejores opciones.
        </p>
        <div className="tech-group">
          <h3 className="tech-name">Lenguajes</h3>
          <div className="logos-group" data-aos="fade-in" data-aos-duration="1000" data-aos-offset="217" data-aos-once="true">
            <a
              href="https://learn.microsoft.com/en-us/dotnet/csharp/"
              className="tech-link"
              target="_blank" rel="noreferrer"
            >
              <img src={cSharpLogo} alt="C#" className="technology-logo" />
            </a>
          </div>
        </div>
        <div className="tech-group">
          <h3 className="tech-name">Front-end</h3>
          <div className="logos-group" data-aos="fade-in" data-aos-duration="1000" data-aos-offset="217" data-aos-once="true">
            <a href="https://jquery.com/" className="tech-link" target="_blank" rel="noreferrer">
              <img src={jqueryLogo} alt="Jquery" className="technology-logo" />
            </a>
          </div>
        </div>
        <div className="tech-group">
          <h3 className="tech-name">Back-end</h3>
          <div className="logos-group" data-aos="fade-in" data-aos-duration="1000" data-aos-offset="217" data-aos-once="true">
            <a
              href="https://palletsprojects.com/p/flask/"
              className="tech-link"
              target="_blank" rel="noreferrer"
            >
              <img src={flaskLogo} alt="Flask" className="technology-logo" />
            </a>
            <a
              href="https://dotnet.microsoft.com/en-us/apps/aspnet"
              className="tech-link"
              target="_blank" rel="noreferrer"
            >
              <img src={dotNetLogo} alt=".NET" className="technology-logo" />
            </a>
          </div>
        </div>
        {/* <div className="tech-group">
                        <h3 className="tech-name">Database</h3>
                        <div className="logos-group" data-aos="fade-in" data-aos-duration="1000" data-aos-offset="217" data-aos-once="true">
                            <a href="https://www.mysql.com/" className="tech-link" target="_blank">
                                <img src={MySQLLogo} alt="MySQL" className="technology-logo" />
                            </a>
                        </div>
                    </div> */}
        <div className="tech-group">
          <h3 className="tech-name">Tools</h3>
          <div className="logos-group" data-aos="fade-in" data-aos-duration="1000" data-aos-once="true">
            <a
              href="https://getbootstrap.com/"
              className="tech-link"
              target="_blank" rel="noreferrer"
            >
              <img
                src={BootstrapLogo}
                alt="Bootstrap"
                className="technology-logo" />
            </a>
            <a
              href="https://webpack.js.org/"
              className="tech-link"
              target="_blank" rel="noreferrer"
            >
              <img
                src={WebpackLogo}
                alt="Webpack"
                className="technology-logo" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
