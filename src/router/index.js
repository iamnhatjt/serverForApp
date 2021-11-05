const express = require('express')
const router = express.Router()
const middleware = require('../controller/midleware')

const postDB = require('../controller/postDB')

const start = require('../controller/start')

router.post('/login', (req, res, next) => start.login(req, res, next))

router.post('/register', (req, res, next) => { start.register(req, res, next) })

router.post('/createDB', (req, res, next) => { middleware(req, res, next) }, (req, res, next) => { postDB.saveDB(req, res, next) })

router.post('/changeDB', (req, res, next) => { middleware(req, res, next) }, (req, res, next) => { postDB.changeDB(req, res, next) })

router.post('/deleteDB', (req, res, next) => { middleware(req, res, next) }, (req, res, next) => { postDB.deleteDB(req, res, next) })



module.exports = router