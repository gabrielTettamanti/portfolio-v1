import jsLogo from '../../assets/images/tecnologies/languages/javascript.png'
import tsLogo from '../../assets/images/tecnologies/languages/typescript.png'
import pyLogo from '../../assets/images/tecnologies/languages/python.png'
import goLogo from '../../assets/images/tecnologies/languages/go.png'
import cssLogo from '../../assets/images/tecnologies/languages/css.png'
import htmlLogo from '../../assets/images/tecnologies/languages/html.png'
import nextLogo from '../../assets/images/tecnologies/frontend/next.png'
import solidLogo from '../../assets/images/tecnologies/frontend/solid.png'
import reactLogo from '../../assets/images/tecnologies/frontend/react.png'
import expressLogo from '../../assets/images/tecnologies/backend/express.png'
import flaskLogo from '../../assets/images/tecnologies/backend/flask.png'
import djangoLogo from '../../assets/images/tecnologies/backend/django.png'
import ginLogo from '../../assets/images/tecnologies/backend/gin.png'
import MySQLLogo from '../../assets/images/tecnologies/database/mysql.webp'
import MongoDBLogo from '../../assets/images/tecnologies/database/mongodb.png'
import JestLogo from '../../assets/images/tecnologies/testing/jest.png'
import TailwindLogo from '../../assets/images/tecnologies/styles/tailwind.png'
import BootstrapLogo from '../../assets/images/tecnologies/styles/bootstrap.webp'
import GitLogo from '../../assets/images/tecnologies/tools/git.png'
import DockerLogo from '../../assets/images/tecnologies/tools/docker.png'
import ViteLogo from '../../assets/images/tecnologies/tools/vite.png'
import WebpackLogo from '../../assets/images/tecnologies/tools/webpack.png'
import SassLogo from '../../assets/images/tecnologies/tools/sass.png'

import MyPortfolio from '../../assets/images/repos/myportfolio.png'
import MuseoPaleontologico from '../../assets/images/repos/museopaleontologico.png'
import GoodTrail from '../../assets/images/repos/goodtrail.png'
import VideoManager from '../../assets/images/repos/videomanager.png'
import GoodTrailDashboard from '../../assets/images/repos/goodtraildashboard.png'
import TaskList from '../../assets/images/repos/tasklist.png'
import Calculator from '../../assets/images/repos/calculator.png'
import TatetiSolidJS from '../../assets/images/repos/tatetisolid.png'
import freeCodeCampSim from '../../assets/images/repos/freecodecampsimulation.png'
import MercadoLiebre from '../../assets/images/repos/mercadoliebre.png'
import CalculatorPy from "../../assets/images/repos/pythoncalculator.png";

const repositoriesData = [
    {
        title:"Mi portafolio digital",
        description:'Esta web está desarrollada con el objetivo de ser una extensión a mi curriculum vitae. Donde muestro desarrollos y experimentos que he hecho, tecnologías que uso y una breve descripción de mi persona. Cuenta con un ciclo de día y noche que cambia el tema de la web a las 7am y 7pm.',
        technologies: [reactLogo, tsLogo, htmlLogo, SassLogo, cssLogo, GitLogo],
        url: 'https://youtu.be/xbJ6qDkmYC4',
        github: "https://github.com/gabrielTettamanti/gabrieltettamanti",
        desktop: 'https://gabrieltettamanti.vercel.app/',
        img: MyPortfolio
    },{
        title:"GoodTrail",
        description:"Es un e-commerce de experiencias y aventuras, donde los usuarios pueden registrarse, ingresar y comprar u ofrecer servicios a los demás usuarios. Está desarrollado con arquitectura MVC, tiene middlewares de seguridad y cumple la función de API proporcionando información por varios endpoints.",
        technologies: [jsLogo, htmlLogo, cssLogo, expressLogo, MySQLLogo, GitLogo],
        url: 'https://youtu.be/WaB14urgPFs',
        github: "https://github.com/gabrielTettamanti/grupo7GoodTrail",
        desktop: '',
        img: GoodTrail
    },{
        title:"Museo Paleontológico de San Pedro",
        description:'Es el sitio oficial del Museo Paleontológico de San Pedro "Fray Manuel de Torres". En él se pueden crear, editar y eliminar noticias, sponsors y hasta los múltiples administradores que puede tener el sitio. Los lectores se pueden suscribir en la web y recibirán actualizaciones periódicas con las novedades del museo.',
        technologies: [jsLogo, htmlLogo, SassLogo, BootstrapLogo, cssLogo, expressLogo, MySQLLogo, GitLogo],
        url: 'https://youtu.be/8nz_pOPOKQ4',
        github: "https://github.com/gabrielTettamanti/museoPaleontologicoDeSanPedro",
        desktop: '',
        img: MuseoPaleontologico
    },{
        title:"Video Manager",
        description:"En esta aplicación uno encuentra un formulario donde puede ir agregando enlaces, títulos y descripciones de los videos que quieran guardar, estos van a ir organizándose en una lista que puede ser editada o eliminada.",
        technologies: [reactLogo, tsLogo, htmlLogo, BootstrapLogo, cssLogo, MongoDBLogo, GitLogo],
        url: 'https://youtu.be/2PcWzSoBah8',
        github: "https://github.com/gabrielTettamanti/videoManager-MERN-TS",
        desktop: '',
        img: VideoManager
    },{
        title:"GoodTrail Dashboard",
        description:"Aprovechando las funciones de API de la web de GoodTrail desarrollamos un Dashboard que proporciona diversa información y estadísticas sobre usuarios y ofertas existentes, como nombres, ubicación, fechas, entre otros datos.",
        technologies: [reactLogo, jsLogo, cssLogo, htmlLogo, GitLogo, WebpackLogo],
        url: 'https://youtu.be/zClhBgmCCaI',
        github: "https://github.com/gabrielTettamanti/grupo7GoodTrailDashboard",
        desktop: '',
        img: GoodTrailDashboard
    },{
        title:"Lista de tareas",
        description:"Es una aplicación web donde uno puede sumar, marcar como hechas o remover ítems en una lista de tareas.",
        technologies: [reactLogo, jsLogo, cssLogo, htmlLogo, GitLogo, WebpackLogo],
        url: 'https://youtu.be/j66BdSCLIhE',
        github: "https://github.com/gabrielTettamanti/react-task-list",
        desktop: 'https://reacttasklist.vercel.app/',
        img: TaskList
    },{
        title:"Ta-Te-Ti",
        description:"Es mi versión del clásico juego tateti o tres en línea para navegadores, totalmente responsive y desarrollado en SolidJS.",
        technologies: [solidLogo, jsLogo, SassLogo, cssLogo, htmlLogo, GitLogo, ViteLogo],
        url: 'https://youtu.be/DKR8Xa3Fqzk',
        github: "https://github.com/gabrielTettamanti/tateti-solidjs",
        desktop: 'https://tateti-solidjs.vercel.app/',
        img: TatetiSolidJS
    },{
        title:"Calculadora",
        description:"En esta web desarrollé una calculadora utilizando los hooks de React.",
        technologies: [reactLogo, jsLogo, cssLogo, htmlLogo, GitLogo, WebpackLogo],
        url: 'https://youtu.be/9ba4QWF2D0U',
        github: "https://github.com/gabrielTettamanti/react-calculator",
        desktop: 'https://reactcalculator-ten.vercel.app/',
        img: Calculator
    },{
        title:"Simulador de freeCodeCamp",
        description:"Es una simulación del home de la web de freeCodeCamp. En este se muestran experiencias de sus graduados, explicando lo que les pareció la experiencia y donde están trabajando actualmente.",
        technologies: [reactLogo, jsLogo, cssLogo, htmlLogo, GitLogo, WebpackLogo],
        url: 'https://youtu.be/u1RE5orD1k0',
        github: "https://github.com/gabrielTettamanti/primer-ejercicio-react",
        desktop: 'https://reactfreecodecampsim.vercel.app/',
        img: freeCodeCampSim
    },{
        title:"Mercado Liebre",
        description:"Es una simulación de la web de Mercado Libre. Se puede ver una lista de productos que se adaptan al tamaño de la pantalla del usuario y un formulario para agregar, editar y eliminar productos. Usada de práctica para aprender el correcto manejo de flex-box, animaciones y demás reglas de CSS.",
        technologies: [jsLogo, cssLogo, htmlLogo, expressLogo, GitLogo],
        url: 'https://youtu.be/_kcRMA777V4',
        github: "https://github.com/gabrielTettamanti/mercadoLiebre",
        desktop: 'https://mercadoliebre-production.up.railway.app/',
        img: MercadoLiebre
    },
    {
        title: "Calculadora con Python",
        description:
          "Es una calculadora desarrollada con python que cuenta con un cliente para usarse como aplicación de escritorio.",
        technologies: [pyLogo],
        url: "",
        github: "https://github.com/gabrielTettamanti/python-calculator",
        desktop: "",
        img: CalculatorPy,
    }
]

export default repositoriesData