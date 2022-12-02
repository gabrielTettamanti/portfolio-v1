import React from "react";

import jsLogo from '../../assets/images/tecnologies/languages/javascript.png'
import tsLogo from '../../assets/images/tecnologies/languages/typescript.png'
import pyLogo from '../../assets/images/tecnologies/languages/python.jpg'
import goLogo from '../../assets/images/tecnologies/languages/go.png'
import cssLogo from '../../assets/images/tecnologies/languages/css.jpg'
import htmlLogo from '../../assets/images/tecnologies/languages/html.jpg'

import './styles.css'

export default () => {
    return (
        <section className="technologies">
            <div className="languages">
                <h1>Languages</h1>
                <img src={jsLogo} alt="JavaScript" className="technology-logo" />
                <img src={tsLogo} alt="JavaScript" className="technology-logo" />
                <img src={pyLogo} alt="JavaScript" className="technology-logo" />
                <img src={goLogo} alt="JavaScript" className="technology-logo" />
                <img src={htmlLogo} alt="JavaScript" className="technology-logo" />
                <img src={cssLogo} alt="JavaScript" className="technology-logo" />
            </div>
            <div className="frontend">
            </div>
            <div className="backend">
            </div>
            <div className="database">
            </div>
            <div className="tools">
            </div>
        </section>
    )
}