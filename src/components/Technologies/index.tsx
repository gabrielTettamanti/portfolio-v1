import React from "react";

import jsLogo from '../../assets/images/tecnologies/languages/javascript.png'
import tsLogo from '../../assets/images/tecnologies/languages/typescript.png'
import pyLogo from '../../assets/images/tecnologies/languages/python.jpg'
import goLogo from '../../assets/images/tecnologies/languages/go.png'
import cssLogo from '../../assets/images/tecnologies/languages/css.jpg'
import htmlLogo from '../../assets/images/tecnologies/languages/html.jpg'
import nextLogo from '../../assets/images/tecnologies/frontend/next.png'
import solidLogo from '../../assets/images/tecnologies/frontend/solid.png'
import reactLogo from '../../assets/images/tecnologies/frontend/react.png'
import expressLogo from '../../assets/images/tecnologies/backend/express.png'
import flaskLogo from '../../assets/images/tecnologies/backend/flask.png'
import djangoLogo from '../../assets/images/tecnologies/backend/django.png'
import ginLogo from '../../assets/images/tecnologies/backend/gin.png'
import MySQLLogo from '../../assets/images/tecnologies/database/mysql.webp'
import MongoDBLogo from '../../assets/images/tecnologies/database/mongodb.png'
import JestLogo from '../../assets/images/tecnologies/testing/jest.png'
import TailwindLogo from '../../assets/images/tecnologies/styles/tailwind.png'
import BootstrapLogo from '../../assets/images/tecnologies/styles/bootstrap.webp'
import GitLogo from '../../assets/images/tecnologies/tools/git.png'
import DockerLogo from '../../assets/images/tecnologies/tools/docker.png'

import './styles.css'

export default () => {
    return (
        <section className="technologies">
            <h2 className="tech-section-title">Tecnologias</h2>
            <div className="tech-group">
                <h3 className="tech-name">Languages</h3>
                <div className="logos-group">
                    <img src={jsLogo} alt="Javascript" className="technology-logo" />
                    <img src={tsLogo} alt="TypeScript" className="technology-logo" />
                    <img src={pyLogo} alt="Python" className="technology-logo" />
                    <img src={goLogo} alt="Go" className="technology-logo" />
                    <img src={htmlLogo} alt="HTML" className="technology-logo" />
                    <img src={cssLogo} alt="CSS" className="technology-logo" />
                </div>
            </div>
            <div className="tech-group">
                <h3 className="tech-name">Frontend</h3>
                <div className="logos-group">
                    <img src={nextLogo} alt="Next" className="technology-logo" />
                    <img src={solidLogo} alt="Solid" className="technology-logo" />
                    <img src={reactLogo} alt="React" className="technology-logo" />
                </div>
            </div>
            <div className="tech-group">
                <h3 className="tech-name">Backend</h3>
                <div className="logos-group">
                    <img src={expressLogo} alt="Express" className="technology-logo" />
                    <img src={flaskLogo} alt="Flask" className="technology-logo" />
                    <img src={djangoLogo} alt="DJango" className="technology-logo" />
                    <img src={ginLogo} alt="Gin" className="technology-logo" />
                </div>
            </div>
            <div className="tech-group">
                <h3 className="tech-name">Database</h3>
                <div className="logos-group">
                    <img src={MySQLLogo} alt="MySQL" className="technology-logo" />
                    <img src={MongoDBLogo} alt="MongoDB" className="technology-logo" />
                </div>
            </div>
            <div className="tech-group">
                <h3 className="tech-name">Tools</h3>
                <div className="logos-group">
                    <img src={JestLogo} alt="Jest" className="technology-logo" />
                    <img src={TailwindLogo} alt="Tailwind" className="technology-logo" />
                    <img src={BootstrapLogo} alt="Bootstrap" className="technology-logo" />
                    <img src={GitLogo} alt="Git" className="technology-logo" />
                    <img src={DockerLogo} alt="Docker" className="technology-logo" />
                </div>
            </div>
        </section>
    )
}