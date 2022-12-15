import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'
import { faJs, faNode, faCss3, faHtml5 } from '@fortawesome/free-brands-svg-icons'
import './styles.css'

export default () => {
    return (
        <section className="repositories-list" id="repositories-list" 
        // data-aos="fade-down"
        >
            <h2 className="repositories-list-title">Proyectos</h2>
            <div className="repository" 
            // data-aos="fade-right"
            >
                <img src="/static/media/sunrise.913e3d46a8873355b5fe.jpg" alt="Foto del proyecto" className="repository-view"/>
                <div className="repository-info">
                    <h3 className="repository-title">Repositorio de ejemplo</h3>
                    <p className="repository-detail">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam omnis repellat molestias aspernatur. Saepe corrupti sint eligendi ex quo quia ducimus esse est, totam quae aut, omnis accusantium eaque vero?</p>
                    <p>
                        <FontAwesomeIcon icon={faJs} className="repository-technology" />
                        <FontAwesomeIcon icon={faNode} className="repository-technology" />
                        <FontAwesomeIcon icon={faCss3} className="repository-technology" />
                        <FontAwesomeIcon icon={faHtml5} className="repository-technology" />
                    </p>
                </div>
            </div>    
            <div className="repository" 
            // data-aos="fade-right"
            >
                <img src="/static/media/sunrise.913e3d46a8873355b5fe.jpg" alt="Foto del proyecto" className="repository-view"/>
                <div className="repository-info">
                    <h3 className="repository-title">Repositorio de ejemplo</h3>
                    <p className="repository-detail">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam omnis repellat molestias aspernatur. Saepe corrupti sint eligendi ex quo quia ducimus esse est, totam quae aut, omnis accusantium eaque vero?</p>
                    <p>
                        <FontAwesomeIcon icon={faJs} className="repository-technology" />
                        <FontAwesomeIcon icon={faNode} className="repository-technology" />
                        <FontAwesomeIcon icon={faCss3} className="repository-technology" />
                        <FontAwesomeIcon icon={faHtml5} className="repository-technology" />
                    </p>
                </div>
            </div>   
            <div className="repository" 
            // data-aos="fade-right"
            >
                <img src="/static/media/sunrise.913e3d46a8873355b5fe.jpg" alt="Foto del proyecto" className="repository-view"/>
                <div className="repository-info">
                    <h3 className="repository-title">Repositorio de ejemplo</h3>
                    <p className="repository-detail">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam omnis repellat molestias aspernatur. Saepe corrupti sint eligendi ex quo quia ducimus esse est, totam quae aut, omnis accusantium eaque vero?</p>
                    <p>
                        <FontAwesomeIcon icon={faJs} className="repository-technology" />
                        <FontAwesomeIcon icon={faNode} className="repository-technology" />
                        <FontAwesomeIcon icon={faCss3} className="repository-technology" />
                        <FontAwesomeIcon icon={faHtml5} className="repository-technology" />
                    </p>
                </div>
            </div> 
            <div>EXPERIMENTS & OPEN SOURCE Web is fun.</div>  
        </section>
    )
}