import "./styles.css";
import AnalogClock from "../AnalogClock";
import useTime from "../hooks/useTime";
import useAOS from "../hooks/useAOS";

const text = require('./../../assets/data/indexTexts.json')

function Carousel() {
  let lang = sessionStorage.getItem("lang");
  const dayTime = useTime();
  useAOS();
  return (
    <section className={`carousel-background-${dayTime} home-intro`}>
      <div className="carousel-container">
        <div data-aos="zoom-in" data-aos-duration="2000">
          <AnalogClock />
        </div>
        <div
          className="carousel-text"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <p>
            <b>
              {lang === "en"
                ? text.en.welcomeQuestion
                : text.es.welcomeQuestion}
            </b>
            {lang === "en" ? text.en.welcomeAnswer : text.es.welcomeAnswer}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
