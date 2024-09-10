import express from 'express'
import mid from '../../src/middlewares/middlewares.js'
import auth from '../../src/middlewares/validation/index.js'
import * as store from './testStore.js'

const serverTest = express()
serverTest.use(express.json())

serverTest.post('/test/user/create', mid.createHolderMidd, (req, res) => {
    res.status(200).json({ message: 'Passed middleware' })})

serverTest.get('/test/users/:id', mid.middUuid, (req, res) => {
        res.status(200).json({ message: 'Passed middleware' })})

serverTest.put('/test/user/:id', mid.updHolderMidd, (req, res) => {
    res.status(200).json({ message: 'Passed middleware' })})

serverTest.post('/test/page', mid.createMidd, (req, res) => {
    res.status(200).json({ message: 'Passed middleware' })})

serverTest.post('/test/item', mid.createItem, (req, res) => {
    res.status(200).json({ message: 'Passed middleware' })})

serverTest.get('/test/:id', mid.protectParam, (req, res) => {
    res.status(200).json({ message: 'Passed middleware' })})

serverTest.put('/test/page/:id', mid.updHome, (req, res) => {
    res.status(200).json({ message: 'Passed middleware' })})


serverTest.put('/test/:id', (req, res) => {
    res.status(200).json({ message: 'Passed middleware' })})
serverTest.use((err, req, res, next)=>{
    const status = err.status ||500
    const message = err.message || err.stack
    res.status(status).json(message)
})



export default serverTest;