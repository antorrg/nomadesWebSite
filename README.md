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