import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import env from './server/envConfig.js'
import {sequelize} from './server/db.js'
import { configureCloudinary } from "./server/utils/cloudinary.js";
import sm from "./server/middlewares/serverMiddlewares.js";
import mainRouter from './server/routes/mainRouter.js'
import {fileURLToPath} from 'url'
import path from 'path'
import initialUser from './server/services/initialUser.js'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)



const server = express();
configureCloudinary({
    cloud_name:env.CloudName,
    api_key:env.CloudApiKey,
    api_secret: env.CloudApiSecret
});
server.use(morgan("dev"));
server.use(cors());
server.use(helmet())
server.use(express.json());
server.use(sm.validJson);
server.use(express.static(path.join(dirname, 'dist')))

server.use(mainRouter)



server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });

server.use(sm.lostRoute);
server.use(sm.errorEndWare);

server.listen(env.Port, async()=>{
    try {
        await sequelize.sync({force:false})
        console.log('Database connect succesfully 😉!!')
        await initialUser()
        console.log(`Server is listening at port: ${env.Port}\nServer in ${env.Status}`)
    } catch (error) {
        console.error('Error syncing database: ',error)
    }
})

export default server;
