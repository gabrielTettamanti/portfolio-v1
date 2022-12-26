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

const repositoriesData = [
    {
        title:"Mi portafolio digital",
        description:'Esta web esta desarrollada con el objetivo de ser una extencion a mi curriculum vitae. Donde muestro desarrollos y experimentos que he hecho, tecnologias que uso y una breve descripcion de mi persona. Cuenta con un ciclo de dia y noche que cambia el tema de la web a las 7am y 7pm.',
        technologies: [reactLogo, tsLogo, htmlLogo, SassLogo, cssLogo, JestLogo, GitLogo],
        url: '',
        github: "https://github.com/gabrielTettamanti/gabrieltettamanti",
        desktop: 'https://gabrieltettamanti.vercel.app/',
        img: MyPortfolio
    },{
        title:"GoodTrail",
        description:"Es un e-commerce de experiencias y aventuras, donde los usuarios pueden registrarse, ingresar y comprar u ofrecer servicios a los demas usuarios. Esta desarrollado con arquitectura MVC, tiene middlewares de seguridad y cumple la funcion de API proporcionando informacion por varios endpoints.",
        technologies: [jsLogo, htmlLogo, cssLogo, expressLogo, MySQLLogo, GitLogo],
        url: '',
        github: "https://github.com/gabrielTettamanti/grupo7GoodTrail",
        desktop: '',
        img: GoodTrail
    },{
        title:"Museo Paleontologico de San Pedro",
        description:'Es el sitio oficial del Museo Paleontologico de San Pedro "Fray Manuel de Torres". En el se pueden crear, editar y eliminar noticias, sponsors y hasta los multiples administradores que puede tener el sitio. Los lectores se pueden suscribir en la web y recibiran actualizaciones periodicas con las novedades del museo. ',
        technologies: [jsLogo, htmlLogo, SassLogo, BootstrapLogo, cssLogo, expressLogo, MySQLLogo, GitLogo],
        url: 'https://youtu.be/8nz_pOPOKQ4',
        github: "https://github.com/gabrielTettamanti/museoPaleontologicoDeSanPedro",
        desktop: '',
        img: MuseoPaleontologico
    },{
        title:"Video Manager",
        description:"En esta aplicacion uno encuentra un formulario donde puede ir agregando url's, titulos y descripciones de los videos que quieran guardar, estos van a ir organizandose en una lista que puede ser editada o eliminada.",
        technologies: [reactLogo, tsLogo, htmlLogo, BootstrapLogo, cssLogo, MongoDBLogo, GitLogo],
        url: 'https://youtu.be/2PcWzSoBah8',
        github: "https://github.com/gabrielTettamanti/videoManager-MERN-TS",
        desktop: '',
        img: VideoManager
    },{
        title:"GoodTrail Dashboard",
        description:"Aprovechando las funciones de API de la web de GoodTrail desarrollamos un Dashboard que proporciona diversa informacion y estadisticas sobre usuarios y ofertas existentes, como nombres, ubicacion, fechas, entre otros datos.",
        technologies: [reactLogo, jsLogo, cssLogo, htmlLogo, GitLogo, WebpackLogo],
        url: 'https://youtu.be/zClhBgmCCaI',
        github: "https://github.com/gabrielTettamanti/grupo7GoodTrailDashboard",
        desktop: '',
        img: GoodTrailDashboard
    },{
        title:"Lista de tareas",
        description:"Es una aplicacion web donde uno puede sumar, marcar como hechas o remover items en una lista de tareas.",
        technologies: [reactLogo, jsLogo, cssLogo, htmlLogo, GitLogo, WebpackLogo],
        url: 'https://youtu.be/j66BdSCLIhE',
        github: "https://github.com/gabrielTettamanti/react-task-list",
        desktop: 'https://reacttasklist.vercel.app/',
        img: TaskList
    },{
        title:"Ta-Te-Ti",
        description:"Es mi version del clasico juego tateti o tres en linea para navegadores, totalmente responsive y desarrollado en SolidJS.",
        technologies: [solidLogo, jsLogo, SassLogo, cssLogo, htmlLogo, GitLogo, ViteLogo],
        url: 'https://youtu.be/DKR8Xa3Fqzk',
        github: "https://github.com/gabrielTettamanti/tateti-solidjs",
        desktop: 'https://tateti-solidjs.vercel.app/',
        img: TatetiSolidJS
    },{
        title:"Calculadora",
        description:"En esta web desarrolle una calculadora utilizando los hooks de React.",
        technologies: [reactLogo, jsLogo, cssLogo, htmlLogo, GitLogo, WebpackLogo],
        url: 'https://youtu.be/9ba4QWF2D0U',
        github: "https://github.com/gabrielTettamanti/react-calculator",
        desktop: 'https://reactcalculator-ten.vercel.app/',
        img: Calculator
    }
]

export default repositoriesData