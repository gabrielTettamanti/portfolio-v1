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

import './styles.css'

export default () => {
    return (
        <section className="technologies">
            <div className="languages">
                <h1>Languages</h1>
                <img src={jsLogo} alt="Javascript" className="technology-logo" />
                <img src={tsLogo} alt="TypeScript" className="technology-logo" />
                <img src={pyLogo} alt="Python" className="technology-logo" />
                <img src={goLogo} alt="Go" className="technology-logo" />
                <img src={htmlLogo} alt="HTML" className="technology-logo" />
                <img src={cssLogo} alt="CSS" className="technology-logo" />
            </div>
            <div className="frontend">
                <h3>Frontend</h3>
                <img src={nextLogo} alt="Next" className="technology-logo" />
                <img src={solidLogo} alt="Solid" className="technology-logo" />
                <img src={reactLogo} alt="React" className="technology-logo" />
            </div>
            <div className="backend">
                <h3>Backend</h3>
                <img src={expressLogo} alt="Express" className="technology-logo" />
                <img src={flaskLogo} alt="Flask" className="technology-logo" />
                <img src={djangoLogo} alt="DJango" className="technology-logo" />
                <img src={ginLogo} alt="Gin" className="technology-logo" />
            </div>
            <div className="database">
                <h3>Database</h3>
            </div>
            <div className="tools">
                <h3>Tools</h3>
            </div>
        </section>
    )
}