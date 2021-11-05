const user = require('../model/user')
const data = require('../model/data')
const Mongoose = require('mongoose')
const jwt = require('jsonwebtoken')



const saveDB = (req, res, next) => {
    const check = jwt.verify(req.cookie.tokenLogin)
    data.create({
            for: check,
            dataBase: req.body.dataBase,
            lable: req.body.lable
        }).then(() => {
            res.json({ status: 'success', message: 'tạo thành công!' })
        })
        .catch(err => {
            console.log('err')
        })
}

const changeDB = (req, res, next) => {
    const check = jwt.verify(req.cookie.tokenLogin)
    data.findOneAndUpdate({
            for: check,
            lable: req.body.lable
        }, {
            dataBase: req.body.dataBase,
        })
        .then(() => {
            res.json({ status: 'success', message: 'Chỉnh Sửa thành công' })
        })
        .catch(err => {
            console.log('err')
        })
}

const deleteDB = (req, res, next) => {
    data.findOneAndDelete({
            for: check,
            lable: req.body.lable
        })
        .then(() => {
            res.json({ status: 'success', message: 'Đã xóa' })
        })
        .catch(err => {
            console.log('err')
        })
}

module.exports = {
    saveDB,
    changeDB,
    deleteDB
}