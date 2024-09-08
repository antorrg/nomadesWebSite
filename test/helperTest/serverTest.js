import express from 'express'
import mid from '../../src/middlewares/middlewares.js'

const serverTest = express()
serverTest.use(express.json())

serverTest.post('/test/user', mid.verifyToken, (req, res) => {
    res.status(200).json({ message: 'Passed middleware' })})

serverTest.get('/test/user', mid.verifyToken, (req, res) => {
     const {userId, userRole}= req.userInfo
    res.status(200).json({userId, userRole})})

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




export default serverTest;