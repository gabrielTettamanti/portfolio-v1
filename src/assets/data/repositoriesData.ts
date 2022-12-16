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

const repositoriesData = [
    {
        title:"Mi portafolio digital",
        description:'Esta web esta desarrollada con el objetivo de ser una extencion a mi curriculum vitae. Donde muestro desarrollos y experimentos que he hecho, tecnologias que uso y una breve descripcion de mi persona. Cuenta con un ciclo de dia y noche que cambia el tema de la web a las 7am y 7pm.',
        technologies: [reactLogo, tsLogo, htmlLogo, SassLogo, cssLogo, JestLogo, GitLogo],
        type: "development"
    },{
        title:"Museo Paleontologico de San Pedro",
        description:'Es el sitio oficial del Museo Paleontologico de San Pedro "Fray Manuel de Torres". En el se pueden crear, editar y eliminar noticias, sponsors y hasta los multiples administradores que puede tener el sitio. Los lectores se pueden suscribir en la web y recibiran actualizaciones periodicas con las novedades del museo. ',
        technologies: [jsLogo, htmlLogo, SassLogo, BootstrapLogo, cssLogo, expressLogo, MySQLLogo, GitLogo],
        type: "development"
    },{
        title:"GoodTrail",
        description:"Es un e-commerce de experiencias y aventuras, donde los usuarios pueden registrarse, ingresar y comprar u ofrecer servicios a los demas usuarios. Esta desarrollado con arquitectura MVC, tiene middlewares de seguridad y cumple la funcion de API proporcionando informacion por varios endpoints.",
        technologies: [jsLogo, htmlLogo, cssLogo, expressLogo, MySQLLogo, GitLogo],
        type: "development"
    },{
        title:"Video Manager",
        description:"En esta aplicacion uno encuentra un formulario donde puede ir agregando url's, titulos y descripciones de los videos que quieran guardar, estos van a ir organizandose en una lista que puede ser editada o eliminada.",
        technologies: [reactLogo, tsLogo, htmlLogo, BootstrapLogo, cssLogo, MongoDBLogo, GitLogo],
        type: "development"
    },{
        title:"GoodTrail Dashboard",
        description:"Aprovechando las funciones de API de la web de GoodTrail desarrollamos un Dashboard que proporciona diversa informacion y estadisticas sobre usuarios y ofertas existentes, como nombres, ubicacion, fechas, entre otros datos.",
        technologies: [reactLogo, jsLogo, cssLogo, htmlLogo, GitLogo, WebpackLogo],
        type: "development"
    },{
        title:"Lista de tareas",
        description:"Es una aplicacion web donde uno puede sumar, marcar como hechas o remover items en una lista de tareas.",
        technologies: [reactLogo, jsLogo, cssLogo, htmlLogo, GitLogo, WebpackLogo],
        type: "development"
    },{
        title:"TPG - MercadoPago",
        description:"Es una web que simula Mercado Libre, donde uno puede efectuar pago digitales mediante la API de Mercado Pago, la cual proporciona una gran seguridad a la hora de efectuar transacciones.",
        technologies: [jsLogo, htmlLogo, cssLogo, expressLogo, GitLogo],
        type: "experiment"
    },{
        title:"Calculadora",
        description:"En esta web desarrolle una calculadora utilizando los hooks de React.",
        technologies: [reactLogo, jsLogo, cssLogo, htmlLogo, GitLogo, WebpackLogo],
        type: "development"
    },{
        title:"Contador de clicks",
        description:"Es un contador de clicks que va sumando y restando el numero del recuadro. El objetivo era aprender los nuevos hooks de React, siendo estos el useEffect y el useState.",
        technologies: [reactLogo, jsLogo, cssLogo, htmlLogo, GitLogo, WebpackLogo],
        type: "experiment"
    },{
        title:"Simulador de freeCodeCamp",
        description:"Es una simulacion del home de la web de freeCodeCamp. En este se muestran experiencias de sus graduados, explicando lo que les parecio la experiencia y donde estan trabajando actualmente.",
        technologies: [reactLogo, jsLogo, cssLogo, htmlLogo, GitLogo, WebpackLogo],
        type: "experiment"
    },{
        title:"Mercado Liebre",
        description:"Es una simulacion de la web de Mercado Libre. Se puede ver una lista de productos que se adaptan al tamaño de la pantalla del usuario y un formulario para agregar, editar y eliminar productos. Usada de practica para aprender el correcto manejo de flex-box, animaciones y demas reglas de CSS.",
        technologies: [jsLogo, cssLogo, htmlLogo, expressLogo, GitLogo],
        type: "experiment"
    }
]

export default repositoriesData