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

Proyecto con Base de datos PostgresSQL. Iniciado el día 05/06/2024

## Variables de entorno:
El proyecto esta preparado para trabajar con dos variables de entorno en desarrollo, y por supuesto, una sola en producción, para eso utliza una libreria llamada cross-env que permite el enrutado al inicio en los sistemas windows, por lo tanto, es multiplataforma. 

Deben declararse en desarrollo dos variables de entorno: `.env.develpment` y `.env.production` con el modelo de `.env.example` la diferencia está en que en la varible de producción la opcion que se va a activar es `DATABASE_URL`que es la base de datos de produccion (en este caso raillway) mientras que en desarrollo seran las varibles de base de datos local.

Esto fue implementado para que en desarrollo no se suban cambios a la base de datos en la nube, y además es un modelo a seguir en el caso de implementar tests de integracion ya que para ello es necesario hacer lo mismo a fin de preservar la integridad de los datos de desarrollo.

Estas son las rutas y sus respectivas caracteristicas:

## Rutas:
- `/:` Esta es la ruta principal de la app, y con sus derivadas `/detalles` y `/acerca` son las rutas que muestran toda la informacion al cliente. 
- `/api/v3/page:` Esta es la ruta por medio de la cual se guarda, administra y controla toda la informacion que aparecerá en la app
- `/api/v3/hold:` Esta ruta va a ser utilizada por el super admin, y junto con la ruta page se encarga de administrar super usuarios e informacion que se mostrará en la página.

## Holder (Usuario con privilegios de super Admin)

### Creacion de super Usuario

- Método: `POST`
- Ruta: `/hold/create`
- Descripción: Crea un nuevo usuario.
- Parámetros:
  - `email` (string): Correo electrónico del usuario.
  - `password` (string): Una contraseña que deber tener por lo menos 8 caracteres, entre los cuales debe haber por lo menos una mayuscula y un numero.
 

### Inicio de Sesión de Usuario

- Método: `POST`
- Ruta: `/hold/login`
- Descripción: Inicia sesión para obtener un token de acceso.
- Parámetros:
  - `email` (string): Correo electrónico del usuario.
  - `password` (string): Contraseña del usuario.

### Obtener Todos los Usuarios (necesita permiso de super admin)

- Método: `GET`
- Ruta: `/hold`
- Descripción: Obtiene la lista de todos los usuarios.

### Obtener el detalle de un usuario determinado (necesita permiso de super admin)

- Método: `GET`
- Ruta: `/hold/:id`
- Descripción: Obtiene la lista de todos los usuarios.

### Editar usuarios:(Necesita validacion)

- Método: `PUT`
- Ruta: `/hold/:id`
- Descripción: Edita cualquier usuario, cambia sus permisos y puede bloquearlo y desbloquearlo.
- Parámetros:
  - email: `string`
  - password: `string`
  - nickname: `string`
  - given_name: `string`
  - picture: `string`
  - country: `string`
  - role `number`(selecciona)
  - enable `boolean`(selecciona)

### Borrar usuarios:(Necesita validacion)

- Método: `DELETE`
- Ruta: `/hold/:id`
- Descripción: Borrar permanentemente un usuario.



# Rutas de información
### ('home' y page)
Estas dos rutas corresponden a las tablas Home e Item de la base de datos.

La ruta `/home` tiene exactamente la misma información que se obtiene en un get hecho en la ruta `/page`, la diferencia está que esta ruta (`/home`) se utiliza con el método `render` que es el que sirve las plantillas pug que renderizan el `html`.

La ruta `/page` contiene la misma información pero la envía en formato json permitiendo así tener una app a distancia para administrar la información. y en combinación con la ruta `/hold` son las responsables de lo que se muestra a traves de las plantillas. 

La tabla Home tiene una relación de `uno a muchos` con la tabla Item, de manera que un proyecto puede tener muchos items (imagenes relevantes con su explicacion).

Las dos tablas trabajan en conjunto en su creación y en su entrega de información, ya sea en `html` o `json`, pero en la edición y el borrado, se mantienen con cierta individualidad.
<br>

# Ruta `/page`:
Habiendo aclarado la función de cada ruta vamos con la creación de la informacion renderizada.
La información se aloja en dos tablas: Home, e Item

### Tabla Home:

```javascript
// Los campos son:
id: integer (autogenerado),
title: string,
logo: string (url)
landing: string (url)
info_header: string (url)
info_body: string (url)
url: string (url)
enable: boolean,
deleteAt : boolean
```
### Tabla `Item`:
```javascript
// Los campos son:
id: integer (autogenerado),
img: string (url),, 
text: text,  
enable: boolean,
deleteAt: boolean,
```
### Creacion de información

- Método: `POST`
- Ruta: `/page/create`
- Descripción: Crea un nuevo proyecto.
- Parámetros:
- `title` (string): El nombre del proyecto.
- `logo` (string): Una url de la imagen usada como icono del proyecto.
- `landing` (string): Una url de la imagen que se utlizará para conformar el carrusel de la landing page.
- `info_header` (string): Información breve del proyecto.
- `info_body`(string): Si bien sigue siendo una info breve puede explayarse un poco más.
- `url` (string): La url del proyecto desplegado en producción. 

  - `items` (arreglo): Un arreglo o array conteniendo una serie de objetos, cada uno de los cuales contendrá: 

    - `img` (string): Url de la imagen de alguna captura de pantalla determinada del proyecto.
    - `text` (string): Un texto explicativo que aclare y justifique esa imagen. Esto es para poder resaltar utilidades o aplicaciones que contiene la pagina y que pueden escapara a un observador casual. 
 


### Obtener Toda la informacion 

- Método: `GET`
- Ruta: `/page`
- Descripción: Obtiene la lista de todos los proyectos.

### Obtener el detalle de un item del proyecto:
- Método: `GET`
- Ruta: `/page/:id`
- Descripción: Obtiene la imagen y el texto explicativo de ese aspecto del proyecto.

### Editar proyecto

- Método: `PUT`
- Ruta: `/page/:id`
- Descripción: Edita cualquier aspecto de la información general del proyecto.
- Parámetros:
  - title: `string`
  - logo: `string`
  - landing: `string`
  - info_header: `string`
  - info_body: `string`
  - url: `string`

### Añadir detalle

- Método: `POST`
- Ruta: `/page/item/add`
- Descripción: Añade 
### Editar detalle

- Método: `PATCH`
- Ruta: `/page/:id`
- Descripción: Edita cualquier aspecto de la información que se exhibe en forma de imagenes (tabla item).
- Parámetros:
  - img: `string`
  - text: `text`
  - enable: `boolean`
 
### Borrar proyecto:

- Método: `DELETE`
- Ruta: `/page/:id`
- Descripción: Borrar permanentemente un proyecto.

