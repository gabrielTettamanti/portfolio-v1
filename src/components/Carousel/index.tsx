import React from "react";
import "./styles.css";
import AnalogClock from "../AnalogClock";
import useTime from "../hooks/useTime";
import useAOS from "../hooks/useAOS";

function Carousel() {
  const dayTime = useTime();
  useAOS();
  return (
    <section className={`carousel-background-${dayTime} home-intro`}>
      <div className="carousel-container">
        <div data-aos="zoom-in">
          <AnalogClock />
        </div>
        <div className="carousel-text" data-aos="zoom-in">
          <p>
            <b>¿Para qué programamos?</b> Lo hacemos para resolver problemas
            cotidianos, facilitando la vida de la gente mediante soluciones
            innovadoras, buscando una transformación tecnológica del día a día.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
