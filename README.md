# Nomades Web Site 
A web site using the MVC paradigm, express.js, pug, sequelize, jsonwebtoken and postgreSQL

## Descripcion del proyecto:

Este es el diagrama general del proyecto:
[Diagrama App:](./data/diagramaApp.md)

## Sobre la api: 

La api modelo `MVC` está construida con las siguientes tecnologias:

- Express.js
- bodyParser
- Morgan
- Helmet
- Dotenv
- Pug
- sequelize
- PostgresSql

## Inicializacion del proyecto:

Para incialiazar el proyecto es necesario clonar el repositorio y en el directorio raíz (adonde esta el `package.json`) correr el comando:

```bash
>> npm install
```
Seria conveniente crear un archivo `.env` copia del archivo `.env.example` pero con variables que se ajusten a nuestra conveniencia. 

Luego:

```bash
>> npm run dev
```
Para incializar el servidor en modo de desarrollo. 
 
Aparecerá en la consola la url a la que debemos hacer click + control para que nos dirija al navegador adonde podremos ver la UI del proyecto e interactuar con esta.

## Endpoints del proyecto (rutas):

Este proyecto cuenta con rutas de renderizado asi como tambien rutas Json.

[Ver endpoints:](./data/rutas.md)

<hr>

# myApi

Proyecto con Base de datos PostgresSQL. Iniciado el día 08/09/2024

## Variables de entorno:
El proyecto esta preparado para trabajar con dos variables de entorno en desarrollo, y por supuesto, una sola en producción, para eso utliza una libreria llamada cross-env que permite el enrutado al inicio en los sistemas windows, por lo tanto, es multiplataforma. 

Deben declararse en desarrollo dos variables de entorno: `.env.develpment` y `.env.production` con el modelo de `.env.example` la diferencia está en que en la variable de producción la opcion que se va a activar es `RENDER_DB`que es la base de datos de produccion (en este caso render) mientras que en desarrollo seran las varibles de base de datos local. Tenemos ademas la variable ` optionRender` que setea `dialectsOptions` en ssl required: true, en produccion o un objeto vacio en desarrollo (opcion de produccion necesaria en Render).

Esto fue implementado para que en desarrollo no se suban cambios a la base de datos en la nube, y además es un modelo a seguir en el caso de implementar tests de integracion ya que para ello es necesario hacer lo mismo a fin de preservar la integridad de los datos de desarrollo.

Estas son las rutas y sus respectivas caracteristicas:

## Rutas:
- `/:` Esta es la ruta principal de la app, y con sus derivadas `/detalles` y `/acerca` son las rutas que muestran toda la informacion al cliente. 
- `/api/v1/product:` Esta es la ruta por medio de la cual se guarda, administra y controla toda la informacion que aparecerá en la app
- `/api/v1/users:` Esta ruta va a ser utilizada por el super admin, y junto con la ruta page se encarga de administrar super usuarios e informacion que se mostrará en la página.

