import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import morgan from "morgan";
import cors from "cors";
import env from './envConfig.js'
import { configureCloudinary } from "./utils/cloudinary.js";
import sm from "./middlewares/serverMiddlewares.js";
import {sessionMiddle} from "./middlewares/validation/sessionMiddle.js";
import mainRouter from './routes/mainRouter.js'
import cookieParser from "cookie-parser";

const fileName = fileURLToPath(import.meta.url);
const dirname = path.dirname(fileName);
const rootDirname = path.resolve()
console.log('dirname: ',dirname);

const server = express();
configureCloudinary({
    cloud_name:env.CloudName,
    api_key:env.CloudApiKey,
    api_secret: env.CloudApiSecret
});
server.use(morgan("dev"));
server.use(cors());
server.use(cookieParser())
server.use(sessionMiddle);
server.use(express.urlencoded({extended:true}))
server.use(express.json());
server.use(sm.validJson);
// Aqui se declara el servidor mvc.
server.set("views", path.join(dirname, "views"))
server.set("view-engine", "pug")

if(env.Status==='production'){
server.use(express.static(path.join(rootDirname, 'dist')))

}else if(env.Status==='development'){
server.use(express.static(path.join(dirname, 'public')))

}else{
server.use(express.static(path.join(dirname, 'public')))
}

server.use(mainRouter)

server.use(sm.lostRoute);
server.use(sm.errorEndWare);

export default server;
