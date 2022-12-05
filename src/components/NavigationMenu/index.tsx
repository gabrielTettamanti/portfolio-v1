import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"

export default () => {
    return(
        <ul className="navigation-menu">
            <Link to={"/"} className="menu-option">Proyectos</Link>
            <Link to={"/technologies"} className="menu-option">Tecnologias</Link>
            <Link to={"/aboutme"} className="menu-option">Sobre mi</Link>
        </ul>
    )
}