const user = require('../model/user')
const data = require('../model/data')
const jwt = require('jsonwebtoken')
const { Mongoose } = require('mongoose')

const getTitleDB = (req, res, next) => {
    var token = jwt.verify(req.cookies.tokenLogin, 'nhatjt')
    data.find({
            for: token,
        }).then(data => {
            res.json(data.map(a => a))
        })
        .catch(err => {
            console.log(err)
            res.status(400).json('Lỗi hệ thống!')
        })
}

const getUser = (req, res, next) => {
    var token = jwt.verify(req.cookies.tokenLogin, 'nhatjt')
    user.findOne({
            _id: token
        }).then(data => {
            res.json({ status: 'success', username: data.username })
        })
        .catch(err => {
            console.log(err)
            res.status(400).json('Lỗi hệ thống!')
        })
}

module.exports = { getTitleDB, getUser }