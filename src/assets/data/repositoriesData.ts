import jsLogo from '../../assets/images/tecnologies/languages/javascript.png'
import tsLogo from '../../assets/images/tecnologies/languages/typescript.png'
import cssLogo from '../../assets/images/tecnologies/languages/css.png'
import htmlLogo from '../../assets/images/tecnologies/languages/html.png'
import svelteLogo from "../../assets/images/tecnologies/frontend/svelte.png";
import solidLogo from '../../assets/images/tecnologies/frontend/solid.png'
import reactLogo from "../../assets/images/tecnologies/frontend/react.png";
import vueLogo from "../../assets/images/tecnologies/frontend/vue.png";
import nuxtLogo from "../../assets/images/tecnologies/frontend/nuxt.png";
import expressLogo from '../../assets/images/tecnologies/backend/express.png'
import MySQLLogo from '../../assets/images/tecnologies/database/mysql.webp'
import MongoDBLogo from '../../assets/images/tecnologies/database/mongodb.png'
import BootstrapLogo from "../../assets/images/tecnologies/styles/bootstrap.webp";
import TailwindLogo from "../../assets/images/tecnologies/styles/tailwind.png";
import GitLogo from '../../assets/images/tecnologies/tools/git.png'
import ViteLogo from '../../assets/images/tecnologies/tools/vite.png'
import WebpackLogo from '../../assets/images/tecnologies/tools/webpack.png'
import SassLogo from '../../assets/images/tecnologies/tools/sass.png'

import MyPortfolio from '../../assets/images/repos/myportfolio.png'
import MuseoPaleontologico from '../../assets/images/repos/museopaleontologico.png'
import GoodTrail from '../../assets/images/repos/goodtrail.png'
import MyMovieSite from "../../assets/images/repos/mymoviesite.png";
import VideoManager from '../../assets/images/repos/videomanager.png'
import GoodTrailDashboard from '../../assets/images/repos/goodtraildashboard.png'
import TaskList from '../../assets/images/repos/tasklist.png'
import Calculator from '../../assets/images/repos/calculator.png'
import KittensApp from "../../assets/images/repos/kittensapp.png";
import TatetiSolidJS from '../../assets/images/repos/tatetisolid.png'
import freeCodeCampSim from '../../assets/images/repos/freecodecampsimulation.png'
import MercadoLiebre from '../../assets/images/repos/mercadoliebre.png'
import ClicksSpeedTest from "../../assets/images/repos/clickspeedtest.png";

const repositoriesData = [
  {
    title: "Mi portafolio digital",
    description:
      "Esta web está desarrollada con el objetivo de ser una extensión a mi curriculum vitae. Donde muestro desarrollos y experimentos que he hecho, tecnologías que uso y una breve descripción de mi persona. Cuenta con un ciclo de día y noche que cambia el tema de la web a las 7am y 7pm.",
    technologies: [reactLogo, tsLogo, htmlLogo, SassLogo, cssLogo, GitLogo],
    url: "https://youtu.be/xbJ6qDkmYC4",
    github: "https://github.com/gabrielTettamanti/gabrieltettamanti",
    desktop: "https://gabrieltettamanti.vercel.app/",
    img: MyPortfolio,
  },
  {
    title: "GoodTrail",
    description:
      "Es un e-commerce de experiencias y aventuras, donde los usuarios pueden registrarse, ingresar y comprar u ofrecer servicios a los demás usuarios. Está desarrollado con arquitectura MVC, tiene middlewares de seguridad y cumple la función de API proporcionando información por varios endpoints.",
    technologies: [jsLogo, htmlLogo, cssLogo, expressLogo, MySQLLogo, GitLogo],
    url: "https://youtu.be/WaB14urgPFs",
    github: "https://github.com/gabrielTettamanti/grupo7GoodTrail",
    desktop: "",
    img: GoodTrail,
  },
  {
    title: "Museo Paleontológico de San Pedro",
    description:
      'Es el sitio oficial del Museo Paleontológico de San Pedro "Fray Manuel de Torres". En él se pueden crear, editar y eliminar noticias, sponsors y hasta los múltiples administradores que puede tener el sitio. Los lectores se pueden suscribir en la web y recibirán actualizaciones periódicas con las novedades del museo.',
    technologies: [
      jsLogo,
      htmlLogo,
      SassLogo,
      BootstrapLogo,
      cssLogo,
      expressLogo,
      MySQLLogo,
      GitLogo,
    ],
    url: "https://youtu.be/8nz_pOPOKQ4",
    github:
      "https://github.com/gabrielTettamanti/museoPaleontologicoDeSanPedro",
    desktop: "",
    img: MuseoPaleontologico,
  },
  {
    title: "My Movie Site | Working in prosses",
    description:
      "Esta app sirve para hacer búsquedas de películas y series, pudiendo entrar en cada una y ver una pequeña sinopsis, portada, nota de IMDB de la película. Además puedes iniciar sesión y cerrarla. Proximamente agregaré más funciones.",
    technologies: [
      nuxtLogo,
      vueLogo,
      jsLogo,
      htmlLogo,
      cssLogo,
      TailwindLogo,
      GitLogo,
      ViteLogo,
    ],
    url: "",
    github: "https://github.com/gabrielTettamanti/my-movie-site",
    desktop: "https://my-movie-site.vercel.app/movies",
    img: MyMovieSite,
  },
  {
    title: "Video Manager",
    description:
      "En esta aplicación uno encuentra un formulario donde puede ir agregando enlaces, títulos y descripciones de los videos que quieran guardar, estos van a ir organizándose en una lista que puede ser editada o eliminada.",
    technologies: [
      reactLogo,
      tsLogo,
      htmlLogo,
      BootstrapLogo,
      cssLogo,
      MongoDBLogo,
      GitLogo,
    ],
    url: "https://youtu.be/2PcWzSoBah8",
    github: "https://github.com/gabrielTettamanti/videoManager-MERN-TS",
    desktop: "",
    img: VideoManager,
  },
  {
    title: "GoodTrail Dashboard",
    description:
      "Aprovechando las funciones de API de la web de GoodTrail desarrollamos un Dashboard que proporciona diversa información y estadísticas sobre usuarios y ofertas existentes, como nombres, ubicación, fechas, entre otros datos.",
    technologies: [reactLogo, jsLogo, cssLogo, htmlLogo, GitLogo, WebpackLogo],
    url: "https://youtu.be/zClhBgmCCaI",
    github: "https://github.com/gabrielTettamanti/grupo7GoodTrailDashboard",
    desktop: "",
    img: GoodTrailDashboard,
  },
  {
    title: "Svelte Click Speed Test",
    description:
      "Es un programa que prueba tu velocidad de clicks por minuto. Está desarrollado en el framework front end de Javascript Svelte. Lo hice como un primer contacto a esta tecnología.",
    technologies: [
      svelteLogo,
      tsLogo,
      htmlLogo,
      SassLogo,
      cssLogo,
      ViteLogo,
      GitLogo,
    ],
    url: "",
    github: "https://github.com/gabrielTettamanti/svelte-clicks-speed-test",
    desktop: "https://svelte-clicks-speed-test.vercel.app/",
    img: ClicksSpeedTest,
  },
  {
    title: "Lista de tareas",
    description:
      "Es una aplicación web donde uno puede sumar, marcar como hechas o remover ítems en una lista de tareas.",
    technologies: [reactLogo, jsLogo, cssLogo, htmlLogo, GitLogo, WebpackLogo],
    url: "https://youtu.be/j66BdSCLIhE",
    github: "https://github.com/gabrielTettamanti/react-task-list",
    desktop: "https://reacttasklist.vercel.app/",
    img: TaskList,
  },
  {
    title: "Ta-Te-Ti",
    description:
      "Es mi versión del clásico juego tateti o tres en línea para navegadores, totalmente responsive y desarrollado en SolidJS.",
    technologies: [
      solidLogo,
      jsLogo,
      SassLogo,
      cssLogo,
      htmlLogo,
      GitLogo,
      ViteLogo,
    ],
    url: "https://youtu.be/DKR8Xa3Fqzk",
    github: "https://github.com/gabrielTettamanti/tateti-solidjs",
    desktop: "https://tateti-solidjs.vercel.app/",
    img: TatetiSolidJS,
  },
  {
    title: "Calculadora",
    description:
      "En esta web desarrollé una calculadora utilizando los hooks de React.",
    technologies: [reactLogo, jsLogo, cssLogo, htmlLogo, GitLogo, WebpackLogo],
    url: "https://youtu.be/9ba4QWF2D0U",
    github: "https://github.com/gabrielTettamanti/react-calculator",
    desktop: "https://reactcalculator-ten.vercel.app/",
    img: Calculator,
  },
  {
    title: "Kittens App",
    description:
      "Es una app que dice un dato curioso y una imagen aleatoria sobre gatitos. El valor de esta web radica en que llama a una primera API que da datos random y se hace una segunda llamada, a otra API, que devuelve una imagen aleatoria con las tres primeras palabras que le pasamos de la API anterior.",
    technologies: [reactLogo, jsLogo, cssLogo, htmlLogo, GitLogo, ViteLogo],
    url: "",
    github: "https://github.com/gabrielTettamanti/kittens-app",
    desktop: "https://kittens-app.vercel.app/",
    img: KittensApp,
  },
  {
    title: "Simulador de freeCodeCamp",
    description:
      "Es una simulación del home de la web de freeCodeCamp. En este se muestran experiencias de sus graduados, explicando lo que les pareció la experiencia y donde están trabajando actualmente.",
    technologies: [reactLogo, jsLogo, cssLogo, htmlLogo, GitLogo, WebpackLogo],
    url: "https://youtu.be/u1RE5orD1k0",
    github: "https://github.com/gabrielTettamanti/primer-ejercicio-react",
    desktop: "https://reactfreecodecampsim.vercel.app/",
    img: freeCodeCampSim,
  },
  {
    title: "Mercado Liebre",
    description:
      "Es una simulación de la web de Mercado Libre. Se puede ver una lista de productos que se adaptan al tamaño de la pantalla del usuario y un formulario para agregar, editar y eliminar productos. Usada de práctica para aprender el correcto manejo de flex-box, animaciones y demás reglas de CSS.",
    technologies: [jsLogo, cssLogo, htmlLogo, expressLogo, GitLogo],
    url: "https://youtu.be/_kcRMA777V4",
    github: "https://github.com/gabrielTettamanti/mercadoLiebre",
    desktop: "https://mercadoliebre-production.up.railway.app/",
    img: MercadoLiebre,
  },
];

export default repositoriesData