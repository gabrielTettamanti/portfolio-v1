import React from "react";
import './styles.css'
import AnalogClock from "../AnalogClock";
import useTime from "../hooks/useTime";

function Carousel() {
    const dayTime = useTime()
    return (
        <div className={`carousel-background-${dayTime}`}>
            <div className="carousel-container">
                <div data-aos="fade-right">
                    <AnalogClock />
                </div>
                <div className="carousel-text" data-aos="fade-left">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic officia illo maiores error, aliquid atque quod neque omnis, nobis tempore porro quos laudantium commodi iusto cupiditate maxime distinctio beatae delectus?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Carousel;