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
        title:"Museo Paleontologico de San Pedro",
        description:'Es el sitio oficial del Museo Paleontologico de San Pedro "Fray Manuel de Torres". En el se pueden crear, editar y eliminar noticias, sponsors y hasta los multiples administradores que puede tener el sitio. Los lectores se pueden suscribir en la web y recibiran actualizaciones periodicas con las novedades del museo. ',
        technologies: [jsLogo, cssLogo, SassLogo, htmlLogo, expressLogo, MySQLLogo]
    },{
        title:"GoodTrail",
        description:"Es un e-commerce de experiencias y aventuras, donde los usuarios pueden registrarse, ingresar y comprar u ofrecer servicios a los demas usuarios. Esta desarrollado con arquitectura MVC, tiene middlewares de seguridad y cumple la funcion de API proporcionando informacion por varios endpoints.",
        technologies: [jsLogo, cssLogo, htmlLogo, expressLogo, MySQLLogo]
    },{
        title:"GoodTrail Dashboard",
        description:"Aprovechando las funciones de API de la web de GoodTrail desarrollamos un Dashboard que proporciona diversa informacion y estadisticas sobre usuarios y ofertas existentes, como nombres, ubicacion, fechas, entre otros datos.",
        technologies: [reactLogo, jsLogo, cssLogo, htmlLogo]
    }
]

export default repositoriesData