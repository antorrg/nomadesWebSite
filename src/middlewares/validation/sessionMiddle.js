import session from 'express-session';
import { Sequelize } from 'sequelize';
import connectSessionSequelize from 'connect-session-sequelize';
import env from '../../envConfig.js';

const SequelizeStore = connectSessionSequelize(session.Store);

// Inicializa Sequelize con tu configuración de PostgreSQL
const sequelize = new Sequelize(env. ConnectDb, {
    dialect: 'postgres',
    logging: false,
});

// Crea el almacén de sesiones
export const myStore = new SequelizeStore({
    db: sequelize,
    tableName: 'sessions', // Nombre de la tabla donde se guardarán las sesiones
    checkExpirationInterval: 10 * 60 * 1000, // Intervalo en milisegundos para eliminar las sesiones expiradas
    expiration: 24 * 60 * 60 * 1000 // Tiempo en milisegundos después del cual las sesiones expiran
});

// Sincroniza el modelo de sesiones con la base de datos
myStore.sync();

// Configura el middleware de sesión
export const sessionMiddle = session({
    secret: env.SecretKey,
    resave: false,
    saveUninitialized: false,
    store: myStore,
    cookie: {
        secure: false,
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 1000 * 60 * 60 // Tiempo de vida de la cookie en milisegundos
    }
});


// Manejo de errores
myStore.on('error', (error) => {
    console.error(error);
});

// Esta parte corresponde a jsonwebtoken: 


// import session from 'express-session';
// import  connectMongo from 'connect-mongodb-session'
// import env from '../../envConfig.js';
// const MongoDBStore = connectMongo(session);

// export const myStore = new MongoDBStore({
//     uri:env.DbUri,
//     autoReconnect: true,
//     collection: 'sessions', // Nombre de la colección donde se guardarán las sesiones
//     autoRemove: 'interval', // Eliminar automáticamente las sesiones expiradas
//     autoRemoveInterval: 10, // Intervalo en minutos para eliminar las sesiones expiradas
//     touchAfter: 24 * 3600 // Tiempo en segundos después del cual se actualiza la fecha de acceso de la sesión
// });

// myStore.on('error', (error) => {
//     console.error(error);
//   });

// export const sessionMiddle = session({
//     secret: env.Secret,
//     resave: false,
//     saveUninitialized: false,
//     store: myStore,
//     cookie: {
//         secure: false,
//         httpOnly: true,
//         sameSite: 'strict',
//         maxAge: 1000 * 60 * 60
//     }
// });


