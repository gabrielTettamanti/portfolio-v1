import React, { useEffect } from "react";
import './styles.css'

function AnalogClock() {

    useEffect(() => {
        const secondHand = document.querySelector('.second-hand') as HTMLElement | null;
        const hourHand = document.querySelector('.hour-hand') as HTMLElement | null;
        const minsHand = document.querySelector('.min-hand') as HTMLElement | null;

        function setDate() {
            const now = new Date();

            const seconds = now.getSeconds();
            const secondsDegrees = ((seconds / 60) * 360) + 90;
            if (secondHand != null) {
                secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
            };
            const mins = now.getMinutes();
            const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
            if (minsHand != null) {
                minsHand.style.transform = `rotate(${minsDegrees}deg)`;
            };
            const hour = now.getHours();
            const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
            if (hourHand != null) {
                hourHand.style.transform = `rotate(${hourDegrees}deg)`;
            };
        }

        setInterval(setDate, 1000);

        setDate();
    }, []);

    return (
        <div className="clock">
            <div className="outer-clock-face">
                <div className="marking marking-one"></div>
                <div className="marking marking-two"></div>
                <div className="marking marking-three"></div>
                <div className="marking marking-four"></div>
                <div className="inner-clock-face">
                    <div className="hand hour-hand"></div>
                    <div className="hand min-hand"></div>
                    <div className="hand second-hand"></div>
                </div>
            </div>
        </div>
    );
};

export default AnalogClock;