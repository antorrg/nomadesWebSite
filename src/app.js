import express from 'express'
import {fileURLToPath} from 'url'
import path from 'path'
import morgan from 'morgan'
import cors from 'cors'
import sm from './utils/serverMiddlewares.js'

const fileName = fileURLToPath(import.meta.url)
const dirname = path.dirname(fileName)
console.log(dirname)

const server = express()
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())
server.use(sm.validJson)

server.use(sm.lostRoute)
server.use(sm.errorEndWare)

export default server