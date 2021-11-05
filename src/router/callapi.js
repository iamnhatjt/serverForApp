const express = require('express')
const router = express.Router()
const getapi = require('../controller/getapi')
const middleware = require('../controller/midleware')


router.get('/label', (req, res, next) => middleware(req, res, next), (req, res, next) => { getapi.getTitleDB(req, res, next) })

router.get('/getuser', (req, res, next) => middleware(req, res, next), (req, res, next) => { getapi.getUser(req, res, next) })


module.exports = router