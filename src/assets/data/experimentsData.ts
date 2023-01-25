import jsLogo from "../../assets/images/tecnologies/languages/javascript.png";
import tsLogo from "../../assets/images/tecnologies/languages/typescript.png";
import pyLogo from "../../assets/images/tecnologies/languages/python.png";
import goLogo from "../../assets/images/tecnologies/languages/go.png";
import cssLogo from "../../assets/images/tecnologies/languages/css.png";
import htmlLogo from "../../assets/images/tecnologies/languages/html.png";
import nextLogo from "../../assets/images/tecnologies/frontend/next.png";
import solidLogo from "../../assets/images/tecnologies/frontend/solid.png";
import reactLogo from "../../assets/images/tecnologies/frontend/react.png";
import vueLogo from "../../assets/images/tecnologies/frontend/vue.png";
import expressLogo from "../../assets/images/tecnologies/backend/express.png";
import flaskLogo from "../../assets/images/tecnologies/backend/flask.png";
import djangoLogo from "../../assets/images/tecnologies/backend/django.png";
import ginLogo from "../../assets/images/tecnologies/backend/gin.png";
import MySQLLogo from "../../assets/images/tecnologies/database/mysql.webp";
import MongoDBLogo from "../../assets/images/tecnologies/database/mongodb.png";
import JestLogo from "../../assets/images/tecnologies/testing/jest.png";
import TailwindLogo from "../../assets/images/tecnologies/styles/tailwind.png";
import BootstrapLogo from "../../assets/images/tecnologies/styles/bootstrap.webp";
import GitLogo from "../../assets/images/tecnologies/tools/git.png";
import DockerLogo from "../../assets/images/tecnologies/tools/docker.png";
import ViteLogo from "../../assets/images/tecnologies/tools/vite.png";
import WebpackLogo from "../../assets/images/tecnologies/tools/webpack.png";
import threeJSLogo from "../../assets/images/tecnologies/tools/threejs.png";
import SassLogo from "../../assets/images/tecnologies/tools/sass.png";

import HelloCube from "../../assets/images/repos/hellocube.png";
// import MercadoPago from "../../assets/images/repos/mercadopago.png";
import ClickCounter from "../../assets/images/repos/clickcounter.png";
import CameraThreeJS from "../../assets/images/repos/camerathreejs.png";
import CalculatorPy from "../../assets/images/repos/pythoncalculator.png";
import VueClickCounter from "../../assets/images/repos/vueclickcounter.png";

const experimentsData = [
  {
      title: "Calculadora con Python",
      description:
        "Es una calculadora desarrollada con python que cuenta con un cliente para usarse como aplicación de escritorio.",
      technologies: [pyLogo],
      url: "",
      github: "https://github.com/gabrielTettamanti/python-calculator",
      desktop: "",
      img: CalculatorPy,
  },
  {
    title: "Cámaras ThreeJS",
    description:
      "Es mi primera prueba con la tecnología de Cámara de ThreeJS. Desde una perspectiva alejada se muestra una cámara con un campo de visión observando un cubo y un fondo más alejado.",
    technologies: [jsLogo, htmlLogo, threeJSLogo, GitLogo],
    url: "",
    github: "https://github.com/gabrielTettamanti/cameraThreeJS",
    desktop: "https://camerathreejs.vercel.app/",
    img: CameraThreeJS,
  },
  {
    title: "Hello Cube",
    description:
      "Es mi primera prueba usando la librería ThreeJS de Javascript. Esta es la herramienta más usada en el desarrollo de software 3D web.",
    technologies: [jsLogo, htmlLogo, threeJSLogo, GitLogo],
    url: "https://youtu.be/uOqDkRhXWZY",
    github: "https://github.com/gabrielTettamanti/helloCubeThreeJS",
    desktop: "https://hellocube.vercel.app/",
    img: HelloCube,
  },
  {
    title: "Vue Click Counter",
    description:
    "Es un contador de clicks que va reaccionando a los click que se dan a los botones sumando y restando el número en el recuadro. Es mi primer acercamiento al framework frontend VueJS.",
    technologies: [vueLogo, tsLogo, htmlLogo, SassLogo, cssLogo, ViteLogo, GitLogo],
    url: "",
    github: "https://github.com/gabrielTettamanti/vue-click-counter",
    desktop: "https://vue-click-counter.vercel.app/",
    img: VueClickCounter,
  },
  {
    title: "React Click Counter",
    description:
      "Es un contador de clicks que va sumando y restando el número del recuadro. El objetivo era aprender los nuevos hooks de React, siendo estos el useEffect y el useState.",
    technologies: [reactLogo, jsLogo, cssLogo, htmlLogo, GitLogo, WebpackLogo],
    url: "https://youtu.be/QRZZ-RGerLo",
    github: "https://github.com/gabrielTettamanti/react-click-counter",
    desktop: "https://reactclickcounter.vercel.app/",
    img: ClickCounter,
  },
];

export default experimentsData;
