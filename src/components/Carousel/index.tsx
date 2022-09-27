import React from "react";
import './styles.css'
import AnalogClock from "../AnalogClock";

function Carousel() {
    return (
        <>
            <div className="carousel-container">
                <div>
                    <AnalogClock />
                </div>
                <div className="carousel-text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic officia illo maiores error, aliquid atque quod neque omnis, nobis tempore porro quos laudantium commodi iusto cupiditate maxime distinctio beatae delectus?
                    </p>
                </div>
            </div>
        </>
    );
};

export default Carousel;