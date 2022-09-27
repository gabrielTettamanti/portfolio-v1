import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'
import './styles.css'
import useTime from "../hooks/useTime";

function NavBar() {
    const dayTime = useTime()
    return (
        <header>
            <nav className={`nav-bar-container-${dayTime}`}>
                <div>
                    <h1 className="title-nav-bar">Gabriel Tettamanti Development</h1>
                </div>
                <div
                    className="theme-switch"
                >
                    <button
                        className="theme-key"
                    >
                        <FontAwesomeIcon 
                            icon={faSun}
                            className='switch-theme-icon actived-theme'
                        />
                    </button>
                    <button
                        className="theme-key"
                    >
                        <FontAwesomeIcon 
                            icon={faMoon}
                            className='switch-theme-icon off-theme'
                        />
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;