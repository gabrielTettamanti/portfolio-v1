import React from "react";
import './styles.css'
import AnalogClock from "../AnalogClock";
import useTime from "../hooks/useTime";
import useAOS from "../hooks/useAOS";

function Carousel() {
    const dayTime = useTime()
    useAOS()
    return (
        <section className={`carousel-background-${dayTime} home-intro`}>
            <div className="carousel-container">
                <div data-aos="zoom-in">
                    <AnalogClock />
                </div>
                <div className="carousel-text" data-aos="zoom-in">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic officia illo maiores error, aliquid atque quod neque omnis, nobis tempore porro quos laudantium commodi iusto cupiditate maxime distinctio beatae delectus?
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Carousel;