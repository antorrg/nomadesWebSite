import express from "express";
//import { fileURLToPath } from "url";
import path from "path";
import morgan from "morgan";
import cors from "cors";
import sm from "./utils/serverMiddlewares.js";
import {sessionMiddle} from "./middlewares/validation/sessionMiddle.js";
import mainRouter from './routes/mainRouter.js'

// const fileName = fileURLToPath(import.meta.url);
// const dirname = path.dirname(fileName);
// console.log('dirname: ',dirname);
const pepito = path.resolve()
const dirname = path.join(pepito, 'src')
console.log('soy resolve: ',dirname)

const server = express();
server.use(morgan("dev"));
server.use(cors());
server.use(sessionMiddle);
server.use(express.json());
server.use(sm.validJson);

server.use(mainRouter)

server.use(sm.lostRoute);
server.use(sm.errorEndWare);

export default server;
